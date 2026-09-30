// מנוע המשחק: פרקים, שלבים, ניקוד, ממשק
import { sfx, stopSpeak } from './audio.js';
import { NUSACH, NOTE_DISCLAIMER } from './content.js';

export const $ = (s, r = document) => r.querySelector(s);

export function h(tag, attrs = {}, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v === false || v == null) continue;
    if (k === 'class') el.className = v;
    else if (k === 'html') el.innerHTML = v;
    else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else el.setAttribute(k, v);
  }
  for (const kid of kids.flat()) {
    if (kid == null || kid === false) continue;
    el.append(kid.nodeType ? kid : document.createTextNode(kid));
  }
  return el;
}

const shuffle = (a) => {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
};
export { shuffle };

const SAVE = 'lulav-tutorial-v1';

export class Game {
  constructor(world) {
    this.w = world;
    this.chapters = [];
    this.state = { nusach: 'ashkenaz', progress: {}, muted: false };
    this.load();
    this.score = 0;
    this.ci = -1;
    this.si = 0;
    this.ctx = null;
    this.keyHandlers = [];
    this.el = {
      panel: $('#panel'), tag: $('#stepTag'), title: $('#stepTitle'), body: $('#stepBody'),
      task: $('#task'), fb: $('#fb'), prev: $('#prev'), next: $('#next'), hint: $('#hint'),
      overlay: $('#overlay'), score: $('#score'), chapterName: $('#chapterName'), dots: $('#dots'),
      nusachBtn: $('#nusachBtn'), muteBtn: $('#muteBtn'), menuBtn: $('#menuBtn'),
    };
    this.el.prev.onclick = () => { sfx.click(); this.goStep(this.si - 1); };
    this.el.next.onclick = () => { sfx.click(); this.nextStep(); };
    this.el.hint.onclick = () => { sfx.click(); this.ctx?.step?.hint?.(this.ctx); };
    this.el.menuBtn.onclick = () => this.showMenu();
    this.el.nusachBtn.onclick = () => this.showMenu(true);
    this.el.muteBtn.onclick = () => {
      this.state.muted = !this.state.muted;
      sfx.setMuted(this.state.muted);
      if (this.state.muted) stopSpeak();
      this.updateChrome();
      this.save();
    };
    addEventListener('keydown', (e) => {
      if (this.el.overlay.classList.contains('show')) return;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
      for (const fn of this.keyHandlers) if (fn(e) === true) { e.preventDefault(); break; }
    });
    sfx.setMuted(this.state.muted);
  }

  get N() { return NUSACH[this.state.nusach]; }

  // ---------- שמירה ----------
  load() {
    try {
      const s = JSON.parse(localStorage.getItem(SAVE) || 'null');
      if (s) Object.assign(this.state, s);
    } catch (e) { /* noop */ }
  }
  save() {
    try { localStorage.setItem(SAVE, JSON.stringify(this.state)); } catch (e) { /* noop */ }
  }
  totalScore() {
    return Object.values(this.state.progress).reduce((a, p) => a + (p.score || 0), 0);
  }

  // ---------- תפריט ----------
  showMenu(focusNusach = false) {
    const ov = this.el.overlay;
    ov.innerHTML = '';
    ov.classList.add('show');
    const card = h('div', { class: 'menu' });
    card.append(
      h('div', { class: 'menu-head' },
        h('div', { class: 'logo', html: '🌿🍋' }),
        h('h1', {}, 'ארבעת המינים'),
        h('p', { class: 'sub' }, 'מדריך תלת־ממדי אינטראקטיבי: מהרכבת האגד ועד נענוע בהלל')),
    );
    // בחירת נוסח
    const nus = h('section', { class: 'nusach' }, h('h2', {}, 'בחרו נוסח / מנהג'));
    const row = h('div', { class: 'nus-row' });
    for (const n of Object.values(NUSACH)) {
      const b = h('button', {
        class: 'nus' + (n.key === this.state.nusach ? ' sel' : ''),
        onclick: () => {
          sfx.click();
          if (this.state.nusach !== n.key) this.nusachChanged = true;
          this.state.nusach = n.key;
          this.save();
          this.updateChrome();
          [...row.children].forEach((c) => c.classList.toggle('sel', c === b));
        },
      }, h('b', {}, n.name), h('small', {}, n.tag));
      row.append(b);
    }
    nus.append(row);
    card.append(nus);
    // פרקים
    const list = h('section', { class: 'chapters' }, h('h2', {}, 'הפרקים'));
    const grid = h('div', { class: 'ch-grid' });
    this.chapters.forEach((c, i) => {
      const p = this.state.progress[c.id];
      const stars = p?.stars || 0;
      grid.append(h('button', {
        class: 'ch' + (p ? ' done' : ''),
        onclick: () => { sfx.click(); this.startChapter(i); },
      },
      h('span', { class: 'ch-ic' }, c.icon),
      h('span', { class: 'ch-tx' }, h('b', {}, `${i + 1}. ${c.title}`), h('small', {}, c.blurb)),
      h('span', { class: 'ch-st' }, p ? '★'.repeat(stars) + '☆'.repeat(3 - stars) : '☆☆☆')));
    });
    list.append(grid);
    card.append(list);
    const next = this.chapters.findIndex((c) => !this.state.progress[c.id]);
    card.append(h('div', { class: 'menu-foot' },
      h('button', {
        class: 'primary big',
        onclick: () => { sfx.click(); this.startChapter(next < 0 ? 0 : next); },
      }, next <= 0 ? 'התחילו ללמוד ◀' : 'המשיכו מהפרק ' + (next + 1) + ' ◀'),
      this.ci >= 0 ? h('button', {
        class: 'ghost',
        onclick: () => {
          ov.classList.remove('show');
          if (this.nusachChanged) { this.nusachChanged = false; this.startChapter(this.ci); }
        },
      }, 'חזרה למשחק') : null,
      h('p', { class: 'disc' }, NOTE_DISCLAIMER),
      h('p', { class: 'disc small' }, 'טיפ: גררו בעכבר (או באצבע) כדי לסובב את המצלמה, וגללו כדי להתקרב.')));
    ov.append(card);
    if (focusNusach) nus.scrollIntoView({ block: 'nearest' });
  }

  updateChrome() {
    this.el.score.textContent = this.totalScore() + this.currentChapterScore();
    this.el.nusachBtn.textContent = '📜 ' + this.N.name;
    this.el.muteBtn.textContent = this.state.muted ? '🔇' : '🔊';
  }
  currentChapterScore() { return this.chapterScore || 0; }

  // ---------- פרקים ושלבים ----------
  startChapter(i) {
    this.el.overlay.classList.remove('show');
    this.ci = i;
    this.chapterScore = 0;
    this.chapterMistakes = 0;
    const ch = this.chapters[i];
    this.chapterState = {}; // מצב משותף בין שלבי הפרק
    this.steps = ch.steps(this);
    this.el.chapterName.textContent = `${i + 1}. ${ch.title}`;
    this.el.dots.innerHTML = '';
    this.steps.forEach(() => this.el.dots.append(h('i')));
    this.stepDone = this.steps.map(() => false);
    this.goStep(0);
  }

  nextStep() {
    if (this.si < this.steps.length - 1) this.goStep(this.si + 1);
    else this.finishChapter();
  }

  goStep(k) {
    if (k < 0 || k >= this.steps.length) return;
    this.teardown();
    this.si = k;
    const step = this.steps[k];
    const ctx = this.makeCtx(step);
    this.ctx = ctx;
    this.el.tag.textContent = `שלב ${k + 1} מתוך ${this.steps.length}`;
    this.el.title.textContent = step.title;
    this.el.body.innerHTML = typeof step.body === 'function' ? step.body(ctx) : step.body || '';
    this.el.task.innerHTML = '';
    this.el.fb.className = '';
    this.el.fb.textContent = '';
    this.el.panel.classList.remove('flash');
    [...this.el.dots.children].forEach((d, i) => {
      d.className = (i === k ? 'cur ' : '') + (this.stepDone[i] ? 'ok' : '');
    });
    this.el.prev.disabled = k === 0;
    this.el.hint.style.display = step.hint ? '' : 'none';
    this.refreshNext();
    $('#pscroll').scrollTop = 0;
    this.updateChrome();
    if (step.auto) this.markDone(ctx, 0, true);
    try { const r = step.enter?.(ctx); r?.catch?.((e) => console.error(e)); } catch (e) { console.error(e); }
  }

  refreshNext() {
    const last = this.si === this.steps.length - 1;
    this.el.next.textContent = last ? 'סיום הפרק ✓' : 'הבא ◀';
    this.el.next.disabled = !this.stepDone[this.si];
    this.el.next.classList.toggle('pulse', !!this.stepDone[this.si]);
  }

  teardown() {
    if (this.ctx) {
      this.ctx.alive = false;
      this.ctx.cleanups.forEach((f) => { try { f(); } catch (e) { /* noop */ } });
    }
    this.keyHandlers = [];
    stopSpeak();
    this.w.stopShake = true;
    this.w.pickCb = null;
    this.w.hoverCb = null;
  }

  markDone(ctx, points = 100, silent = false) {
    if (this.stepDone[this.si]) return;
    this.stepDone[this.si] = true;
    const earned = silent ? 0 : Math.max(20, points - ctx.mistakes * 25);
    this.chapterScore += earned;
    this.chapterMistakes += ctx.mistakes;
    [...this.el.dots.children][this.si]?.classList.add('ok');
    this.refreshNext();
    this.updateChrome();
    if (!silent) {
      sfx.ok();
      this.toast(`+${earned}`);
    }
  }

  finishChapter() {
    const ch = this.chapters[this.ci];
    const m = this.chapterMistakes;
    const stars = m <= 1 ? 3 : m <= 5 ? 2 : 1;
    const prev = this.state.progress[ch.id];
    const score = Math.max(prev?.score || 0, this.chapterScore);
    this.state.progress[ch.id] = { stars: Math.max(prev?.stars || 0, stars), score };
    this.save();
    this.updateChrome();
    sfx.win();
    const ov = this.el.overlay;
    ov.innerHTML = '';
    ov.classList.add('show');
    const allDone = this.chapters.every((c) => this.state.progress[c.id]);
    const isLast = this.ci === this.chapters.length - 1;
    const card = h('div', { class: 'menu summary' },
      h('div', { class: 'logo', html: allDone && isLast ? '🏆' : '🎉' }),
      h('h1', {}, allDone && isLast ? 'סיימתם את כל המדריך!' : `סיימתם: ${ch.title}`),
      h('div', { class: 'stars' }, '★'.repeat(stars) + '☆'.repeat(3 - stars)),
      h('p', { class: 'sub' }, `ניקוד בפרק: ${this.chapterScore} · טעויות: ${m}`),
      ch.recap ? h('div', { class: 'recap', html: ch.recap(this) }) : null,
      allDone && isLast
        ? h('div', { class: 'cert' },
          h('h3', {}, 'תעודת נוטל לולב'),
          h('p', {}, `על שסיים/ה את המדריך בנוסח ${this.N.name} · ניקוד כולל ${this.totalScore()}`),
          h('p', { class: 'small' }, 'חג שמח! שיהיה לכם יום נעים של ארבעת המינים. 🌿'))
        : null,
      h('div', { class: 'menu-foot' },
        !isLast ? h('button', { class: 'primary big', onclick: () => { sfx.click(); this.startChapter(this.ci + 1); } }, 'לפרק הבא ◀') : null,
        h('button', { class: 'ghost', onclick: () => { sfx.click(); this.startChapter(this.ci); } }, 'נסו שוב את הפרק'),
        h('button', { class: 'ghost', onclick: () => this.showMenu() }, 'לתפריט הפרקים')));
    ov.append(card);
  }

  // ---------- הקשר לשלב ----------
  makeCtx(step) {
    const g = this;
    const ctx = {
      game: g, w: g.w, N: g.N, step, mistakes: 0, alive: true, cleanups: [],
      task: g.el.task, shared: g.chapterState,
      onExit(fn) { ctx.cleanups.push(fn); },
      onKey(fn) { g.keyHandlers.push(fn); },
      complete(points = 100) { g.markDone(ctx, points); },
      isDone: () => g.stepDone[g.si],
      say(html) { g.el.body.innerHTML = html; },
      info(msg) { g.feedback(msg, 'info'); },
      good(msg) { g.feedback(msg, 'ok'); },
      mistake(msg) {
        ctx.mistakes++;
        sfx.bad();
        g.feedback(msg || 'לא בדיוק — נסו שוב.', 'bad');
        g.el.panel.classList.remove('flash');
        void g.el.panel.offsetWidth;
        g.el.panel.classList.add('flash');
      },
      clear() { g.el.task.innerHTML = ''; },
      add(el) { g.el.task.append(el); return el; },
      // --- רכיבי אינטראקציה ---
      mc(q, options, { cls = '' } = {}) {
        return new Promise((res) => {
          const box = h('div', { class: 'mc ' + cls }, h('p', { class: 'q', html: q }));
          const btns = [];
          shuffle(options).forEach((o) => {
            const b = h('button', { class: 'opt', html: o.t });
            b.onclick = () => {
              if (b.disabled) return;
              sfx.click();
              if (o.ok) {
                btns.forEach((x) => { x.disabled = true; });
                b.classList.add('ok');
                ctx.good(o.why || 'נכון!');
                res(o);
              } else {
                b.classList.add('bad');
                b.disabled = true;
                ctx.mistake(o.why || 'לא מדויק — נסו שוב.');
              }
            };
            btns.push(b);
            box.append(b);
          });
          ctx.add(box);
        });
      },
      order(prompt, items, { numbered = true } = {}) {
        return new Promise((res) => {
          const box = h('div', { class: 'order' }, h('p', { class: 'q', html: prompt }));
          const pool = h('div', { class: 'pool' });
          const seq = h('ol', { class: 'seq' });
          let next = 0;
          shuffle(items.map((t, i) => ({ t, i }))).forEach((it) => {
            const b = h('button', { class: 'opt', html: it.t });
            b.onclick = () => {
              sfx.click();
              if (it.i === next) {
                next++;
                b.remove();
                seq.append(h('li', { class: 'ok', html: it.t }));
                if (next === items.length) { ctx.good('הסדר נכון!'); res(); }
              } else {
                ctx.mistake('זה לא הצעד הבא בסדר. חשבו: מה קורה קודם?');
              }
            };
            pool.append(b);
          });
          box.append(pool, numbered ? seq : seq);
          ctx.add(box);
        });
      },
      /** התאמה: left=[{id,label,dot}], right=[{id,label}] */
      match(prompt, left, right, { onLeft, onMatch, explain } = {}) {
        return new Promise((res) => {
          const box = h('div', { class: 'match' }, h('p', { class: 'q', html: prompt }));
          const cols = h('div', { class: 'cols' });
          const L = h('div', { class: 'col' }), R = h('div', { class: 'col' });
          let sel = null, done = 0;
          const lbtn = {};
          left.forEach((it) => {
            const b = h('button', { class: 'opt' }, it.dot ? h('i', { class: 'dot', style: `background:${it.dot}` }) : null, it.label);
            b.onclick = () => {
              if (b.classList.contains('locked')) return;
              sfx.click();
              sel = it;
              Object.values(lbtn).forEach((x) => x.classList.remove('sel'));
              b.classList.add('sel');
              onLeft?.(it);
            };
            lbtn[it.id] = b;
            L.append(b);
          });
          shuffle(right).forEach((it) => {
            const b = h('button', { class: 'opt' }, it.label);
            b.onclick = () => {
              if (b.classList.contains('locked')) return;
              if (!sel) { ctx.info('קודם בחרו פריט מהעמודה הימנית.'); return; }
              if (sel.id === it.id) {
                sfx.ok();
                b.classList.add('locked', 'ok');
                lbtn[sel.id].classList.add('locked', 'ok');
                lbtn[sel.id].classList.remove('sel');
                ctx.good(explain?.(sel.id) || 'נכון!');
                onMatch?.(sel);
                sel = null;
                if (++done === left.length) res();
              } else {
                ctx.mistake('ההתאמה לא נכונה. נסו שוב.');
              }
            };
            R.append(b);
          });
          cols.append(L, R);
          box.append(cols);
          ctx.add(box);
        });
      },
      button(label, fn, cls = 'primary') {
        const b = h('button', { class: cls, onclick: () => { sfx.click(); fn(b); } }, label);
        ctx.add(b);
        return b;
      },
    };
    return ctx;
  }

  feedback(msg, kind) {
    const fb = this.el.fb;
    fb.className = 'show ' + kind;
    fb.innerHTML = msg;
    clearTimeout(this.fbT);
    if (kind !== 'bad') this.fbT = setTimeout(() => { fb.className = kind === 'ok' ? 'show ok' : 'show ' + kind; }, 0);
  }

  toast(txt) {
    const t = h('div', { class: 'toast' }, txt);
    document.body.append(t);
    setTimeout(() => t.remove(), 1400);
  }
}
