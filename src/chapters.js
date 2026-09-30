// הפרקים: הכרת המינים, למה נוטלים, הרכבה, אחיזה, ברכה, נענועים, הלל
import * as THREE from 'three';
import { DIRS, makeLabel } from './world.js';
import { makeEtrog, makeLulav, makeHadas, makeArava, makeBundle, makeRing, LEN, ARRANGEMENTS } from './models.js';
import { NUSACH, SPECIES, BLESSING, MIDRASH_TYPES, buildHallel } from './content.js';
import { h, shuffle } from './game.js';
import { sfx, speak, stopSpeak } from './audio.js';

const T = 0.834; // גובה משטח השולחן
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const POSE = {
  rest: { r: [0.27, 0.85, -0.02], l: [-0.27, 0.85, -0.02], lean: 0, gripR: 0.7, gripL: 0.7 },
  carry: { r: [0.11, 1.14, -0.4], l: [0.04, 1.2, -0.4], lean: 0.06, gripR: 1.05, gripL: 1.45 },
};
const SP_ORDER = ['etrog', 'hadas', 'arava', 'lulav'];
const SP_X = { etrog: -0.52, hadas: -0.18, arava: 0.18, lulav: 0.52 };

// ---------- עזרי במה ----------
function setPose(w, p) {
  w.handBase.r.set(...p.r);
  w.handBase.l.set(...p.l);
  w.handBase.lean = p.lean;
  w.avatar.arms.r.grip = p.gripR;
  w.avatar.arms.l.grip = p.gripL;
  w.shakeOff.set(0, 0, 0);
}

function resetScene(ctx, { avatar = false, table = true, cam = 'table', markers = false, dur = 0.9 } = {}) {
  const w = ctx.w;
  w.clearStage();
  w.stopShake = true;
  w.shakeToken++;
  w.arrow.visible = false;
  w.setAvatarVisible(avatar);
  w.table.visible = table;
  w.setMarkers(markers);
  w.held = null;
  setPose(w, POSE.rest);
  w.setCamera(cam, dur);
  w.hoverCb = (p) => w.highlight(p ? p.root : null);
}

function cup(x, z, r = 0.05, hgt = 0.08) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(r, r * 0.8, hgt, 18),
    new THREE.MeshStandardMaterial({ color: 0xd9c9a0, roughness: 0.5 }),
  );
  body.position.y = hgt / 2;
  body.castShadow = true;
  g.add(body);
  g.position.set(x, T, z);
  return g;
}

function hitBox(w, h_, r = 0.07) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h_, 8), new THREE.MeshBasicMaterial({ visible: false }));
  m.position.y = h_ / 2;
  return m;
}

/** מציב מין על השולחן בתוך כוס. מחזיר Group עם userData.pick. */
function putSpecies(w, id, x, z, { pick = true, scale = 1, obj = null, hit = true, stand = true, lift = 0 } = {}) {
  const holder = new THREE.Group();
  let o = obj;
  let len = 0.6;
  if (!o) {
    if (id === 'etrog') o = makeEtrog();
    if (id === 'lulav') o = makeLulav({ length: LEN.lulav });
    if (id === 'hadas') o = makeHadas({ length: LEN.hadas });
    if (id === 'arava') o = makeArava({ length: LEN.arava });
  }
  if (id === 'etrog') {
    const st = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.025, 20), new THREE.MeshStandardMaterial({ color: 0xc9a86a, roughness: 0.5 }));
    st.position.y = 0.0125;
    if (stand) holder.add(st);
    o.position.y = (stand ? 0.025 : 0) + 0.062 + lift;
    len = 0.16;
  } else {
    const c = cup(0, 0);
    c.position.set(0, 0, 0);
    holder.add(c);
    o.position.y = 0.06;
    len = (o.userData.length || 0.5) + 0.1;
  }
  holder.add(o);
  holder.scale.setScalar(scale);
  holder.position.set(x, T, z);
  if (pick) {
    if (hit) holder.add(hitBox(w, len));
    holder.userData.pick = { id };
    w.addPickable(holder);
  }
  holder.userData.obj = o;
  w.stage.add(holder);
  return holder;
}

function speciesRow(w, { pick = false } = {}) {
  const row = {};
  for (const id of SP_ORDER) row[id] = putSpecies(w, id, SP_X[id], -0.62, { pick });
  return row;
}

function compareTable(kind) {
  const names = (n) => n.order.map((k) => DIRS[k].name).join(' ← ');
  const rows = Object.values(NUSACH).map((n) => (kind === 'dirs'
    ? `<tr><th>${n.name}</th><td>${names(n)}</td></tr>`
    : `<tr><th>${n.name}</th><td>${{ ashkenaz: '9 נענועים בהלל (הקהל)', sepharad: '5 נענועים, כולל זה שאחרי הברכה', chabad: '5 נענועים, כולל זה שאחרי הברכה; בכל אחד 18 תנועות' }[n.key]}</td></tr>`));
  if (kind !== 'dirs') rows.push('<tr><th>תימן</th><td>4 נענועים (אין חוזרים על "אנא ה\' הושיעה נא")</td></tr>');
  return `<table class="cmp"><thead><tr><th>נוסח</th><th>${kind === 'dirs' ? 'סדר הכיוונים' : 'כמה נענועים'}</th></tr></thead><tbody>${rows.join('')}</tbody></table>`;
}

// ---------- אחיזת האגד והאתרוג ביד ----------
function holdScene(ctx, { inverted = true, cam = 'heroClose', table = false, markers = false, etrogPitamLabel = false } = {}) {
  resetScene(ctx, { avatar: true, table, cam, markers });
  const w = ctx.w;
  const bundle = makeBundle({ arrangement: ctx.N.arrangement });
  const etrog = makeEtrog();
  w.stage.add(bundle, etrog);
  w.attach(bundle, 'r');
  w.attach(etrog, 'l');
  bundle.position.set(0, -0.075, 0);
  bundle.rotation.set(0, 0, 0);
  etrog.position.set(0, 0, 0);
  etrog.rotation.set(0, 0, inverted ? Math.PI : 0);
  w.held = { bundle, etrog };
  w.etrogInverted = inverted;
  setPose(w, POSE.carry);
  return { bundle, etrog };
}

const BLESS_TEXT = (words) => words.join(' ');

// ---------- הלל ----------
function hallelPlayer(ctx, mode, onFinish) {
  const N = ctx.N, w = ctx.w;
  const chabad = N.key === 'chabad';
  const lines = buildHallel(N.key);
  const moveDur = chabad ? 0.9 : 0.36;
  const reps = chabad ? 3 : 1;
  // תזמון
  let t = 0;
  lines.forEach((L) => {
    L.start = t;
    L.slots = [];
    let lt = 0;
    L.words.forEach((wd, i) => {
      const dirs = wd.dir == null ? [] : Array.isArray(wd.dir) ? wd.dir : [wd.dir];
      let dur;
      if (L.kind === 'gap') dur = 0.25;
      else if (L.star) dur = dirs.length ? moveDur * dirs.length : 0.28;
      else dur = 0.4;
      L.slots.push({ i, start: lt, dur, moves: L.star ? dirs : [] });
      lt += dur;
    });
    L.total = lt + (L.kind === 'gap' ? 0.4 : 0.7);
    L.end = L.start + L.total;
    L.allMoves = L.slots.flatMap((s) => s.moves);
    t = L.end;
  });
  const totalStars = lines.filter((l) => l.star).length;

  const root = h('div', { class: 'hallel ' + mode });
  const status = h('div', { class: 'hstat' });
  const box = h('div', { class: 'hbox' });
  const els = lines.map((L) => {
    const row = h('div', { class: 'hline ' + L.kind + (L.star ? ' star' : '') });
    if (L.tag) row.append(h('span', { class: 'htag' }, L.tag));
    const ws = L.words.map((wd, i) => {
      const dirs = wd.dir == null ? [] : Array.isArray(wd.dir) ? wd.dir : [wd.dir];
      const chip = h('small', {}, dirs.length && L.star ? dirs.map((d) => DIRS[N.order[d]].name).join('·') : '');
      const s = h('span', { class: 'wd' }, h('span', { class: 'w' }, wd.w), chip);
      row.append(s);
      return { s, chip, dirs };
    });
    if (L.star && mode === 'guide') row.append(h('span', { class: 'mark' }, '🤲'));
    box.append(row);
    return { row, ws };
  });
  root.append(status, box);

  let running = false, startT = 0, raf = 0, hits = 0, wrong = 0, missed = 0;
  let cur = -1;
  const pressed = new Set();
  const triggered = new Set();
  let finished = false;

  const setStatus = () => {
    status.innerHTML = mode === 'play'
      ? `נענועים: <b>${hits}</b> · טעויות: <b>${wrong + missed}</b>`
      : `נענועים בהלל בנוסח ${N.name}: <b>${totalStars}</b>`;
  };
  setStatus();

  const runMoves = (moves) => {
    if (!moves.length) return;
    w.stopShake = false;
    w.shakeSequence(moves.map((i) => N.order[i]), { reps, dur: moveDur, rustle: N.rustle });
    if (N.rustle) sfx.rustle();
  };

  function press() {
    if (!running || mode !== 'play') return;
    const L = lines[cur];
    if (L && L.star && !pressed.has(cur)) {
      pressed.add(cur);
      hits++;
      els[cur].row.classList.add('hit');
      sfx.ok();
      runMoves(L.allMoves);
    } else {
      wrong++;
      sfx.bad();
      ctx.mistake(L && L.star ? 'כבר ניענעתם בשורה הזו.' : 'כאן לא מנענעים — מנענעים רק ב"הודו לה\'" וב"אנא ה\' הושיעה נא".');
    }
    setStatus();
  }

  function tick() {
    if (!running || !ctx.alive) return;
    const el = (performance.now() - startT) / 1000;
    let idx = lines.findIndex((L) => el >= L.start && el < L.end);
    if (el >= t) idx = -2;
    if (idx !== cur) {
      // סיום שורה קודמת
      if (cur >= 0) {
        const prev = lines[cur];
        els[cur].row.classList.remove('active');
        els[cur].row.classList.add('past');
        if (prev.star && mode === 'play' && !pressed.has(cur)) {
          missed++;
          els[cur].row.classList.add('miss');
          ctx.mistake('פספסתם נענוע — "הודו" / "אנא ה\' הושיעה נא" הם מקומות לנענע.');
          setStatus();
        }
        if (mode === 'play') els[cur].ws.forEach((x) => { if (x.dirs.length && prev.star) x.chip.style.opacity = 1; });
      }
      cur = idx;
      if (cur >= 0) {
        els[cur].row.classList.add('active');
        box.scrollTo({ top: els[cur].row.offsetTop - box.clientHeight / 2 + els[cur].row.clientHeight / 2, behavior: 'smooth' });
      }
    }
    if (cur >= 0) {
      const L = lines[cur];
      const lt = el - L.start;
      L.slots.forEach((s) => {
        const on = lt >= s.start && lt < s.start + s.dur;
        els[cur].ws[s.i].s.classList.toggle('on', on);
        if (mode === 'guide' && L.star && lt >= s.start && !triggered.has(cur + ':' + s.i)) {
          triggered.add(cur + ':' + s.i);
          if (s.moves.length) {
            w.stopShake = false;
            w.shakeSequence(s.moves.map((i) => N.order[i]), { reps, dur: moveDur, rustle: N.rustle });
            if (N.rustle) sfx.rustle();
          }
        }
      });
    }
    if (idx === -2 && !finished) {
      finished = true;
      running = false;
      onFinish?.({ hits, wrong, missed, total: totalStars });
      return;
    }
    raf = requestAnimationFrame(tick);
  }

  const api = {
    el: root,
    start() {
      cancelAnimationFrame(raf);
      els.forEach((e) => {
        e.row.className = e.row.className.replace(/\b(active|past|hit|miss)\b/g, '').trim();
        e.ws.forEach((x) => { x.s.classList.remove('on'); if (mode === 'play') x.chip.style.opacity = 0; });
      });
      hits = 0; wrong = 0; missed = 0; cur = -1; finished = false;
      pressed.clear(); triggered.clear();
      setStatus();
      running = true;
      startT = performance.now() + 1200;
      ctx.info(mode === 'play' ? 'התחילו לומר את ההלל... לחצו על "נענעו" (או רווח) בזמן הנכון!' : 'צפו: הדמות מנענעת בכל כיוון לפי הנוסח שבחרתם.');
      raf = requestAnimationFrame(tick);
    },
    press,
    stop() { running = false; cancelAnimationFrame(raf); },
    lines,
    totalStars,
  };
  const bodyEl = document.getElementById('stepBody');
  bodyEl.classList.add('mob-hide');
  ctx.onExit(() => { api.stop(); bodyEl.classList.remove('mob-hide'); });
  return api;
}

// ============================================================
export function buildChapters() {
  return [
    // ---------------------------------------------------------- 1
    {
      id: 'meet', icon: '🌿', title: 'הכרת ארבעת המינים',
      blurb: 'אתרוג, לולב, הדס וערבה — איך מזהים כל אחד',
      recap: () => '<ul><li>אתרוג: פיטם למעלה, עוקץ למטה</li><li>לולב: סגור, והשדרה היא הגב הקשה</li><li>הדס: שלושה עלים בכל קומה</li><li>ערבה: עלה ארוך וחלק, קנה אדמדם</li></ul>',
      steps: () => [
        {
          title: 'ארבעה מינים על השולחן',
          body: `<p>התורה מצווה: <b>"וּלְקַחְתֶּם לָכֶם בַּיּוֹם הָרִאשׁוֹן פְּרִי עֵץ הָדָר, כַּפֹּת תְּמָרִים וַעֲנַף עֵץ עָבֹת וְעַרְבֵי נָחַל"</b> (ויקרא כג, מ).</p>
                 <p>לפניכם ארבעת המינים. <b>לחצו על כל אחד</b> כדי להתקרב אליו ולקרוא עליו.</p>`,
          enter(ctx) {
            const w = ctx.w;
            resetScene(ctx, { cam: 'table' });
            const row = speciesRow(w, { pick: true });
            const seen = new Set();
            const chips = h('div', { class: 'chips' });
            const chipEl = {};
            SP_ORDER.forEach((id) => {
              chipEl[id] = h('span', { class: 'chip' }, SPECIES[id].name);
              chips.append(chipEl[id]);
            });
            const info = h('div', { class: 'info' }, h('p', { class: 'muted' }, 'עדיין לא בחרתם מין. לחצו על אחד מהם בסצנה (או על השם כאן).'));
            ctx.add(chips); ctx.add(info);
            let sel = null;
            const show = (id) => {
              sel = id;
              const S = SPECIES[id];
              sfx.click();
              info.innerHTML = '';
              info.append(
                h('div', { class: 'verse', style: `border-color:${S.color}` }, S.verse),
                h('h3', {}, S.name),
                h('ul', {}, S.facts.map((f) => h('li', { html: f }))),
                h('button', { class: 'ghost', onclick: () => { sel = null; w.setCamera('table', 0.8); } }, '↩ חזרה לכל המינים'),
              );
              const x = SP_X[id];
              const ty = T + (id === 'etrog' ? 0.09 : 0.3);
              w.setCamera({ pos: [x * 0.6, 1.28, 0.62], target: [x, ty, -0.62] }, 0.9);
              seen.add(id);
              chipEl[id].classList.add('ok');
              if (seen.size === 4 && !ctx.isDone()) { ctx.complete(60); ctx.good('כל הכבוד! הכרתם את ארבעת המינים. עברו לשלב הבא.'); }
            };
            SP_ORDER.forEach((id) => { chipEl[id].onclick = () => show(id); });
            w.pickCb = (p) => { if (p) show(p.pick.id); };
            w.updaters.push((dt) => {
              SP_ORDER.forEach((id) => {
                const o = row[id].userData.obj;
                if (id === sel) o.rotation.y += dt * 0.9;
              });
            });
          },
        },
        {
          title: 'מי הכשר? — בחנו את עצמכם',
          body: `<p>עכשיו לומדים להבדיל בין <b>כשר</b> ל<b>פסול</b>. בכל סצנה לחצו על הפריט הנכון (מותר לסובב את המצלמה).</p>`,
          hint: (ctx) => ctx.info(ctx.shared.hint || 'התבוננו היטב בעלים.'),
          async enter(ctx) {
            const w = ctx.w;
            const q = ctx.add(h('p', { class: 'q big' }, ''));
            const pickItems = ({ prompt, items, cam = 'tableClose', scale = 1.4, hint }) => new Promise((res) => {
              resetScene(ctx, { cam });
              ctx.shared.hint = hint;
              q.textContent = prompt;
              const xs = items.length === 2 ? [-0.24, 0.24] : [-0.4, 0, 0.4];
              let done = false;
              shuffle(items).forEach((it, i) => {
                const holder = putSpecies(w, it.id, xs[i], -0.6, { pick: true, scale: it.scale ?? scale, obj: it.make() });
                holder.userData.pick = { it };
              });
              w.pickCb = (p) => {
                if (!p || done) return;
                const it = p.pick.it;
                if (it.ok) { done = true; w.highlight(p.root); ctx.good(it.why); res(); } else ctx.mistake(it.why);
              };
            });
            await pickItems({
              prompt: '🌿 איזה הדס כשר?',
              hint: 'ספרו כמה עלים יוצאים מכל "קומה" של הענף.',
              items: [
                { id: 'hadas', make: () => makeHadas({ length: LEN.hadas, variant: 'kosher' }), ok: true, why: 'נכון! בהדס מסולסל יוצאים <b>שלושה עלים</b> מכל קומה.' },
                { id: 'hadas', make: () => makeHadas({ length: LEN.hadas, variant: 'pairs', seed: 9 }), ok: false, why: 'העלים כאן יוצאים <b>בזוגות</b> ולא בשלשות — זה הדס "שוטה", פסול.' },
              ],
            });
            if (!ctx.alive) return;
            await wait(1300);
            await pickItems({
              prompt: '🌿 איזו ערבה כשרה?',
              hint: 'ערבה כשרה: עלה ארוך וצר, שפה חלקה וקנה אדמדם.',
              items: [
                { id: 'arava', make: () => makeArava({ length: LEN.arava, variant: 'smooth' }), ok: true, why: 'נכון! עלה <b>ארוך וצר עם שפה חלקה</b> וקנה אדמדם — "ערבי נחל".' },
                { id: 'arava', make: () => makeArava({ length: LEN.arava, variant: 'serrated', seed: 8 }), ok: false, why: 'העלים כאן <b>משוננים</b> ורחבים — זו צפצפה או מין אחר, לא ערבה כשרה.' },
              ],
            });
            if (!ctx.alive) return;
            await wait(1300);
            await pickItems({
              prompt: '🌴 איזה לולב כשר?', scale: 1, cam: 'tableClose',
              hint: 'לולב כשר הוא סגור — העלים צמודים לשדרה.',
              items: [
                { id: 'lulav', make: () => makeLulav({ length: LEN.lulav, open: false }), ok: true, why: 'נכון! הלולב <b>סגור</b>: העלים צמודים זה לזה.' },
                { id: 'lulav', make: () => makeLulav({ length: LEN.lulav, open: true, seed: 3 }), ok: false, why: 'העלים כאן <b>נפוצים</b> ומתפזרים — לולב "נפוץ" פסול.' },
              ],
            });
            if (!ctx.alive) return;
            await wait(1300);
            // אתרוג: פיטם ועוקץ
            resetScene(ctx, { cam: { pos: [0, 1.25, 0.6], target: [0, 1.25, -0.6] } });
            q.textContent = '🍋 לחצו על הפיטם של האתרוג';
            ctx.shared.hint = 'הפיטם הוא הבליטה הקטנה והכהה בקצה העליון.';
            const holder = putSpecies(w, 'etrog', 0, -0.6, { pick: true, scale: 2.6, hit: false, stand: false, lift: 0.1 });
            const o = holder.userData.obj;
            const hp = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 8), new THREE.MeshBasicMaterial({ visible: false }));
            hp.position.y = 0.066; hp.userData.part = 'pitam'; o.add(hp);
            const hu = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 8), new THREE.MeshBasicMaterial({ visible: false }));
            hu.position.y = -0.062; hu.userData.part = 'ukatz'; o.add(hu);
            let phase = 0;
            await new Promise((res) => {
              w.pickCb = (p) => {
                if (!p) return;
                const part = p.part;
                if (phase === 0) {
                  if (part === 'pitam') {
                    phase = 1;
                    const l = makeLabel('פיטם', { size: 56, scale: 0.0007 }); l.position.set(0, 0.11, 0); o.add(l);
                    ctx.good('נכון! זה ה<b>פיטם</b>. עכשיו לחצו על ה<b>עוקץ</b> — הקצה התחתון, שבו היה מחובר לעץ.');
                    q.textContent = '🍋 עכשיו לחצו על העוקץ';
                  } else ctx.mistake(part === 'ukatz' ? 'זה העוקץ (למטה). הפיטם הוא בקצה העליון.' : 'זה גוף האתרוג. חפשו את הבליטה הקטנה והכהה בקצה העליון.');
                } else if (phase === 1) {
                  if (part === 'ukatz') {
                    phase = 2;
                    const l = makeLabel('עוקץ', { size: 56, scale: 0.0007 }); l.position.set(0, -0.11, 0); o.add(l);
                    ctx.good('מצוין! פיטם למעלה ועוקץ למטה — כך האתרוג גדל על העץ.');
                    res();
                  } else ctx.mistake('העוקץ הוא הקצה התחתון, שבו האתרוג היה מחובר לענף.');
                }
              };
            });
            ctx.complete(100);
          },
        },
      ],
    },
    // ---------------------------------------------------------- 2
    {
      id: 'why', icon: '📜', title: 'למה נוטלים?',
      blurb: 'הציווי, המדרש על ארבעה סוגי יהודים, ורמזי האיברים',
      recap: () => '<ul><li>ציווי התורה: "ולקחתם לכם... ושמחתם לפני ה\' אלהיכם שבעת ימים"</li><li>ארבעה סוגים בעם ישראל — קשורים באגודה אחת</li><li>המינים כנגד איברי הגוף</li></ul>',
      steps: () => [
        {
          title: 'הציווי והשמחה',
          auto: true,
          body: `<div class="verse big">"וּלְקַחְתֶּם לָכֶם בַּיּוֹם הָרִאשׁוֹן פְּרִי עֵץ הָדָר כַּפֹּת תְּמָרִים וַעֲנַף עֵץ עָבֹת וְעַרְבֵי נָחַל, <em>וּשְׂמַחְתֶּם לִפְנֵי ה' אֱלֹהֵיכֶם שִׁבְעַת יָמִים</em>."</div>
                 <p class="src">ויקרא כג, מ</p>
                 <ul>
                   <li><b>מצוות התורה</b> — לקיחה של ארבעת המינים כביטוי של שמחה בחג הסוכות. בבית המקדש נטלו כל שבעת הימים; ומאז החורבן נוהגים כך גם מתקנת חכמים, "זכר למקדש".</li>
                   <li><b>הודיה על הפרי והגשם</b> — חג הסוכות הוא זמן אסיף, ובו נידונים על המים. הערבה והלולב שגדלים ליד מים מזכירים את הצורך בגשם.</li>
                   <li><b>ניצחון בדין</b> — לפי המדרש (ויקרא רבה ל, ב) מי שיוצא מיום הכיפורים ולולבו בידו — הוא יוצא מנצח.</li>
                 </ul>`,
          enter(ctx) { resetScene(ctx, { cam: 'table' }); speciesRow(ctx.w); },
        },
        {
          title: 'ארבעה סוגי יהודים — אגודה אחת',
          body: `<p>המדרש (ויקרא רבה ל, יב) משווה כל מין לסוג אחר בעם ישראל, לפי <b>טעם</b> (תורה) ו<b>ריח</b> (מעשים טובים). בחרו מין בצד ימין ואז התאימו לו את התיאור.</p>`,
          async enter(ctx) {
            const w = ctx.w;
            resetScene(ctx, { cam: 'table' });
            const row = speciesRow(w);
            await ctx.match(
              'התאימו כל מין לתיאור שלו:',
              SP_ORDER.map((id) => ({ id, label: SPECIES[id].name, dot: SPECIES[id].color })),
              MIDRASH_TYPES.map((m) => ({ id: m.species, label: m.type })),
              {
                onLeft: (it) => w.highlight(row[it.id]),
                explain: (id) => {
                  const m = MIDRASH_TYPES.find((x) => x.species === id);
                  return `נכון! ${SPECIES[id].name} — כמו ${m.means}.`;
                },
              },
            );
            if (!ctx.alive) return;
            w.highlight(null);
            ctx.add(h('div', { class: 'verse' }, 'מה עושה הקב"ה? — "יִקָּשְׁרוּ כֻלָּם אֲגֻדָּה אַחַת, וְהֵן מְכַפְּרִין אֵלּוּ עַל אֵלּוּ."'));
            ctx.complete(100);
          },
        },
        {
          title: 'המינים והאיברים',
          body: `<p>במדרש נוסף (ויקרא רבה ל, יד) כל מין רומז לאיבר בגוף האדם שבו הוא משבח את בוראו. התאימו:</p>`,
          async enter(ctx) {
            const w = ctx.w;
            resetScene(ctx, { cam: 'table' });
            const row = speciesRow(w);
            const organ = { etrog: 'הלב', lulav: 'השדרה', hadas: 'העיניים', arava: 'השפתיים' };
            await ctx.match(
              'איזה איבר מסמל כל מין?',
              SP_ORDER.map((id) => ({ id, label: SPECIES[id].name, dot: SPECIES[id].color })),
              SP_ORDER.map((id) => ({ id, label: organ[id] })),
              { onLeft: (it) => w.highlight(row[it.id]), explain: (id) => `נכון! ${SPECIES[id].name} כנגד ${organ[id]}.` },
            );
            if (!ctx.alive) return;
            w.highlight(null);
            ctx.add(h('p', { class: 'note' }, 'כשאוחזים את כולם יחד — כל הגוף כולו משבח: הלב, השדרה, העיניים והשפתיים.'));
            ctx.complete(100);
          },
        },
        {
          title: 'שאלת סיכום',
          body: `<p>בדקו את עצמכם לפני שממשיכים להרכבה.</p>`,
          async enter(ctx) {
            resetScene(ctx, { cam: 'table' });
            speciesRow(ctx.w);
            await ctx.mc('הפסוק מסיים את מצוות ארבעת המינים במילים "וּ___ לִפְנֵי ה\' אֱלֹהֵיכֶם שִׁבְעַת יָמִים". מה חסר?', [
              { t: 'ושמחתם', ok: true, why: 'נכון! "ושמחתם לפני ה\' אלהיכם שבעת ימים" — מצוות הלולב היא ביטוי של שמחה.' },
              { t: 'וזכרתם', ok: false, why: '"וזכרתם" נאמר בציצית. כאן נאמר "ושמחתם".' },
              { t: 'ושמרתם', ok: false, why: '"ושמרתם" איננו הפסוק כאן. חשבו על החג — זמן שמחתנו.' },
            ]);
            if (!ctx.alive) return;
            await ctx.mc('מדוע קושרים את ארבעת המינים יחד לאגד אחד?', [
              { t: 'כדי שכל סוגי ישראל יהיו "אגודה אחת" ויכפרו זה על זה', ok: true, why: 'נכון! כך לימדו חכמים במדרש.' },
              { t: 'רק כדי שיהיה נוח לאחוז', ok: false, why: 'יש בזה גם נוחות, אבל הטעם העיקרי במדרש הוא האחדות.' },
              { t: 'כדי שהאתרוג לא יתבלבל בהדס', ok: false, why: 'האתרוג בכלל לא נקשר — הוא מוחזק ביד שמאל.' },
            ]);
            if (ctx.alive) ctx.complete(100);
          },
        },
      ],
    },
    // ---------------------------------------------------------- 3
    {
      id: 'build', icon: '🧵', title: 'הרכבת האגד',
      blurb: 'שדרה אליך, בחירת הענפים, גבהים וקשירה',
      recap: (g) => `<ul><li>השדרה פונה אל המחזיק</li><li>סידור בנוסח שלכם: ${ARRANGEMENTS[g.N.arrangement].label}</li><li>הלולב גבוה מההדסים בטפח לפחות</li><li>קושרים את האגד בטבעות; האתרוג לא נקשר</li></ul>`,
      steps: (g) => {
        const arr = ARRANGEMENTS[g.N.arrangement];
        // קבוצות רצופות של סוג ענף לפי סדר הסלוטים
        const groups = [];
        arr.slots.forEach((s, i) => {
          const last = groups[groups.length - 1];
          if (last && last.kind === s.kind) last.n++;
          else groups.push({ kind: s.kind, n: 1, start: i });
        });
        const stand = (w, opts, x = 0, z = -0.5) => {
          const holder = new THREE.Group();
          const base = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.03, 20), new THREE.MeshStandardMaterial({ color: 0xb08a4a, roughness: 0.7 }));
          base.position.y = 0.015;
          holder.add(base);
          const b = makeBundle({ arrangement: g.N.arrangement, ...opts });
          b.position.y = 0.03;
          holder.add(b);
          holder.position.set(x, T, z);
          w.stage.add(holder);
          return { holder, bundle: b };
        };
        const steps = [];
        steps.push({
          title: 'הלולב: השדרה אליך',
          body: `<p>מתחילים בלולב. <b>השדרה</b> — הגב הקשה והצהבהב — צריכה לפנות <b>אל המחזיק</b> (אליכם), והעלים הפנימיים מופנים החוצה.</p>
                 <p>סובבו את הלולב עד שהשדרה פונה אליכם (המצלמה היא המחזיק).</p>`,
          hint: (ctx) => { const lb = ctx.shared.lulavRef; if (lb && !lb.userData.lab) { const l = makeLabel('שדרה', { size: 56, scale: 0.0012 }); l.position.set(0, 0.35, 0.05); lb.add(l); lb.userData.lab = l; } },
          enter(ctx) {
            const w = ctx.w;
            resetScene(ctx, { cam: 'tableClose' });
            const { holder, bundle } = stand(w, { slotCount: 0, rings: 0, handle: false }, 0, -0.5);
            ctx.shared.lulavRef = bundle;
            let rot = [Math.PI / 2, Math.PI, -Math.PI / 2][Math.floor(Math.random() * 3)];
            bundle.rotation.y = rot;
            let busy = false;
            const turn = async (d) => {
              if (busy) return;
              busy = true;
              const r0 = rot;
              rot += d;
              await w.tween(0.45, (k) => { bundle.rotation.y = r0 + (rot - r0) * k; });
              busy = false;
              const c = Math.cos(rot);
              if (c > 0.94 && !ctx.isDone()) { ctx.good('נכון! השדרה פונה אליכם.'); ctx.complete(100); } else if (c < -0.5) ctx.info('השדרה פונה מכם והלאה — סובבו עוד.');
            };
            ctx.add(h('div', { class: 'row' },
              h('button', { class: 'primary', onclick: () => { sfx.click(); turn(Math.PI / 2); } }, '⟲ סובבו שמאלה'),
              h('button', { class: 'primary', onclick: () => { sfx.click(); turn(-Math.PI / 2); } }, 'סובבו ימינה ⟳')));
            ctx.onKey((e) => {
              if (e.code === 'ArrowLeft') { turn(Math.PI / 2); return true; }
              if (e.code === 'ArrowRight') { turn(-Math.PI / 2); return true; }
              return false;
            });
            ctx.add(h('p', { class: 'muted' }, 'רמז: כפתור "רמז" יסמן לכם היכן השדרה.'));
          },
        });
        groups.forEach((gr) => {
          const isH = gr.kind === 'hadas';
          steps.push({
            title: isH ? `הדסים — ${gr.n} ענפים כשרים` : `ערבות — ${gr.n} ענפים כשרות`,
            body: isH
              ? `<p>מוסיפים <b>${gr.n} ענפי הדס</b> לאגד. יש על השולחן ענפים כשרים ופסולים — בחרו רק את הכשרים (לחצו עליהם).</p><p class="note">${arr.label}.</p>`
              : `<p>מוסיפים <b>${gr.n} ענפי ערבה</b> לאגד. בחרו רק ערבות כשרות (לחצו עליהן).</p><p class="note">${arr.label}.</p>`,
            hint: (ctx) => ctx.info(isH ? 'הדס כשר: שלושה עלים בכל קומה.' : 'ערבה כשרה: עלים ארוכים וצרים, שפה חלקה, קנה אדמדם.'),
            enter(ctx) {
              const w = ctx.w;
              resetScene(ctx, { cam: 'table' });
              const cur = { n: 0, holder: null, bundle: null };
              const rebuild = () => {
                if (cur.holder) { w.stage.remove(cur.holder); }
                const s = stand(w, { slotCount: gr.start + cur.n, rings: 0 }, -0.42, -0.5);
                cur.holder = s.holder; cur.bundle = s.bundle;
              };
              rebuild();
              const need = gr.n;
              const goods = Array.from({ length: need }, (_, i) => ({ ok: true, seed: 20 + i }));
              const bads = Array.from({ length: isH ? 2 : 2 }, (_, i) => ({ ok: false, seed: 40 + i }));
              const xs = [-0.08, 0.1, 0.28, 0.46, 0.64].slice(0, goods.length + bads.length);
              const counter = ctx.add(h('div', { class: 'counter' }, `חוברו: 0 מתוך ${need}`));
              shuffle([...goods, ...bads]).forEach((c, i) => {
                const obj = isH
                  ? makeHadas({ length: LEN.hadas, variant: c.ok ? 'kosher' : 'pairs', seed: c.seed })
                  : makeArava({ length: LEN.arava, variant: c.ok ? 'smooth' : 'serrated', seed: c.seed });
                const holder = putSpecies(w, isH ? 'hadas' : 'arava', xs[i], -0.86, { pick: true, obj });
                holder.userData.pick = { c };
              });
              let busy = false;
              w.pickCb = async (p) => {
                if (!p || busy || !p.pick.c) return;
                const c = p.pick.c;
                if (!c.ok) {
                  ctx.mistake(isH ? 'בענף הזה העלים יוצאים <b>בזוגות</b> — הדס פסול.' : 'בענף הזה העלים <b>משוננים</b> ורחבים — לא ערבה כשרה.');
                  return;
                }
                busy = true;
                w.pickables = w.pickables.filter((x) => x !== p.root);
                const p0 = p.root.position.clone();
                const p1 = new THREE.Vector3(-0.42, T + 0.2, -0.46);
                await w.tween(0.6, (k) => {
                  p.root.position.lerpVectors(p0, p1, k);
                  p.root.position.y += Math.sin(k * Math.PI) * 0.18;
                });
                w.stage.remove(p.root);
                cur.n++;
                rebuild();
                sfx.ok();
                counter.textContent = `חוברו: ${cur.n} מתוך ${need}`;
                busy = false;
                if (cur.n === need) { ctx.good('מצוין! כל הענפים הכשרים חוברו.'); ctx.complete(100); }
              };
            },
          });
        });
        steps.push({
          title: 'גובה הענפים',
          body: `<p>איזה אגד מסודר נכון? <b>הלולב הוא הגבוה מכולם</b> — הוא עולה על ההדסים והערבות <b>בטפח לפחות</b> (כ־8–10 ס"מ). לחצו על האגד המסודר נכון.</p>`,
          hint: (ctx) => ctx.info('חפשו את האגד שבו ראש הלולב בולט בבירור מעל ההדסים, אך לא גבוה מדי.'),
          enter(ctx) {
            const w = ctx.w;
            resetScene(ctx, { cam: 'table' });
            const defs = [
              { hadasTip: 0.7, aravaTip: 0.62, ok: false, why: 'ההדסים כאן גבוהים מהלולב. הלולב צריך להיות הגבוה מכולם.' },
              { hadasTip: 0.62, aravaTip: 0.58, ok: false, why: 'הלולב גבוה מההדסים רק בכמה ס"מ — צריך <b>טפח לפחות</b>.' },
              { hadasTip: LEN.hadas, aravaTip: LEN.arava, ok: true, why: 'נכון! הלולב גבוה מההדסים בטפח ויותר, וההדסים מעט גבוהים מהערבות (מן ההידור).' },
            ];
            shuffle(defs).forEach((d, i) => {
              const { holder } = stand(w, { hadasTip: d.hadasTip, aravaTip: d.aravaTip, rings: 3, arrangement: g.N.arrangement }, [-0.5, 0, 0.5][i], -0.55);
              holder.userData.pick = { d };
              const hb = hitBox(w, 0.75, 0.09); holder.add(hb);
              w.addPickable(holder);
              const lab = makeLabel(['א', 'ב', 'ג'][i], { size: 56, scale: 0.0016 });
              lab.position.set(0, 0.86, 0);
              holder.add(lab);
            });
            let done = false;
            w.pickCb = (p) => {
              if (!p || done) return;
              const d = p.pick.d;
              if (d.ok) { done = true; w.highlight(p.root); ctx.good(d.why); ctx.complete(100); } else ctx.mistake(d.why);
            };
          },
        });
        steps.push({
          title: 'קושרים את האגד',
          body: `<p>כדי שיהיו "אגודה אחת" קושרים את ההדסים והערבות אל שדרת הלולב. <b>לחצו על הטבעות הזוהרות</b> כדי להניח אותן — נהוג <b>שלוש טבעות</b>, בגבהים שונים.</p>
                 <p class="note">האתרוג אינו נקשר: הוא נשאר ביד שמאל.</p>`,
          enter(ctx) {
            const w = ctx.w;
            resetScene(ctx, { cam: 'tableClose' });
            const { holder, bundle } = stand(w, { slotCount: 5, rings: 0 }, 0, -0.5);
            let placed = 0;
            [0.16, 0.24, 0.32].forEach((y) => {
              const gr = makeRing(y, true);
              gr.scale.set(1.15, 0.9, 1.15);
              const hitM = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.05, 12), new THREE.MeshBasicMaterial({ visible: false }));
              hitM.position.set(0, y, 0.02);
              hitM.userData.pick = { ring: y, ghost: gr };
              gr.userData.pick = { ring: y, ghost: gr, hitM };
              hitM.userData.pick.hitM = hitM;
              bundle.add(gr, hitM);
              w.addPickable(hitM);
              w.addPickable(gr);
            });
            w.pickCb = (p) => {
              if (!p || !p.pick.ring) return;
              const { ring: y, ghost, hitM } = p.pick;
              w.pickables = w.pickables.filter((x) => x !== ghost && x !== hitM);
              bundle.remove(ghost, hitM);
              bundle.add(makeRing(y));
              placed++;
              sfx.ok();
              w.highlight(null);
              if (placed === 3) { ctx.good('האגד קשור היטב!'); ctx.complete(100); }
            };
          },
        });
        steps.push({
          title: 'האגד מוכן',
          auto: true,
          body: `<p>האגד שלכם מוכן — בסידור של נוסח <b>${g.N.name}</b>: <b>${arr.label}</b>.</p>
                 <ul><li>השדרה פונה אליכם.</li><li>הלולב גבוה מההדסים בטפח לפחות.</li><li>האתרוג נשאר נפרד, לידיים.</li></ul>
                 <p class="note">יש קהילות ומנהגים נוספים בסידור ההדסים והערבות סביב הלולב — נהגו כמנהג קהילתכם.</p>`,
          enter(ctx) {
            const w = ctx.w;
            resetScene(ctx, { cam: 'tableClose' });
            const { bundle } = stand(w, { slotCount: 5, rings: 3 }, 0, -0.5);
            const e = putSpecies(w, 'etrog', 0.35, -0.5, { pick: false });
            w.updaters.push((dt) => { bundle.rotation.y += dt * 0.5; });
          },
        });
        return steps;
      },
    },
    // ---------------------------------------------------------- 4
    {
      id: 'hold', icon: '🤲', title: 'אחיזה לפני הברכה',
      blurb: 'לולב בימין, אתרוג בשמאל — ולמה הפיטם למטה',
      recap: () => '<ul><li>הלולב (עם ההדסים והערבות) ביד ימין, השדרה אליך</li><li>האתרוג ביד שמאל</li><li>לפני הברכה — הפיטם <b>למטה</b></li></ul>',
      steps: (g) => [
        {
          title: 'לוקחים את הלולב — ביד ימין',
          body: `<p>מתחילים ב<b>לולב</b>: נוטלים אותו <b>ביד ימין</b>, כשהשדרה פונה אליכם. לחצו על הלולב על השולחן.</p>
                 <p class="note">מי ששמאלי (איטר יד) — ישאל את רבו באיזו יד לאחוז.</p>`,
          enter(ctx) {
            const w = ctx.w;
            resetScene(ctx, { avatar: true, table: true, cam: 'hero' });
            const holderB = new THREE.Group();
            const base = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.03, 20), new THREE.MeshStandardMaterial({ color: 0xb08a4a }));
            base.position.y = 0.015; holderB.add(base);
            const bundle = makeBundle({ arrangement: g.N.arrangement });
            bundle.position.y = 0.03; holderB.add(bundle);
            holderB.position.set(0.3, T, -0.42);
            holderB.userData.pick = { id: 'bundle' };
            holderB.add(hitBox(w, 0.7, 0.08));
            w.stage.add(holderB); w.addPickable(holderB);
            const et = putSpecies(w, 'etrog', -0.2, -0.42, { pick: true });
            ctx.shared.et = et;
            let busy = false;
            w.pickCb = async (p) => {
              if (!p || busy || ctx.isDone()) return;
              if (p.pick.id === 'etrog') { ctx.mistake('מתחילים דווקא בלולב, ביד ימין. האתרוג יבוא אחר כך.'); return; }
              busy = true;
              w.highlight(null);
              w.pickables = [];
              const gp = new THREE.Vector3().setFromMatrixPosition(bundle.matrixWorld).add(new THREE.Vector3(0, 0.075, 0));
              await w.handsTo({ r: [gp.x, gp.y, gp.z], lean: 0.3, gripR: 1.05 }, 0.9);
              w.attach(bundle, 'r');
              bundle.position.set(0, -0.075, 0);
              w.stage.remove(holderB);
              await w.handsTo({ r: POSE.carry.r, lean: 0.15 }, 0.9);
              ctx.good('נהדר! הלולב ביד ימין והשדרה פונה אליכם.');
              ctx.complete(100);
            };
          },
        },
        {
          title: 'האתרוג — ביד שמאל',
          body: `<p>עכשיו נוטלים את <b>האתרוג</b> ביד <b>שמאל</b>. לחצו על האתרוג.</p>`,
          enter(ctx) {
            const w = ctx.w;
            resetScene(ctx, { avatar: true, table: true, cam: 'hero' });
            const bundle = makeBundle({ arrangement: g.N.arrangement });
            w.stage.add(bundle); w.attach(bundle, 'r');
            bundle.position.set(0, -0.075, 0);
            w.held = { bundle, etrog: null };
            setPose(w, { ...POSE.carry, l: POSE.rest.l, gripL: 0.7, lean: 0.15 });
            const et = putSpecies(w, 'etrog', -0.2, -0.42, { pick: true });
            let busy = false;
            w.pickCb = async (p) => {
              if (!p || busy || ctx.isDone()) return;
              busy = true;
              w.highlight(null);
              w.pickables = [];
              const gp = new THREE.Vector3(-0.2, T + 0.087, -0.42);
              await w.handsTo({ l: [gp.x, gp.y, gp.z], lean: 0.3, gripL: 1.45 }, 0.9);
              const etrog = et.userData.obj;
              w.stage.add(etrog);
              etrog.position.copy(gp); etrog.scale.set(1, 1, 1); etrog.rotation.set(0, 0, 0);
              w.stage.remove(et);
              w.attach(etrog, 'l');
              etrog.position.set(0, 0, 0);
              w.held.etrog = etrog;
              await w.handsTo({ l: POSE.carry.l, lean: 0.06 }, 0.9);
              ctx.good('האתרוג ביד שמאל. עכשיו צריך לסדר אותו נכון לפני הברכה.');
              ctx.complete(100);
            };
          },
        },
        {
          title: 'הופכים את האתרוג — פיטם למטה',
          body: `<p>לפני הברכה מחזיקים את האתרוג <b>הפוך</b>: הפיטם <b>למטה</b> והעוקץ למעלה. סובבו אותו לתנוחה הנכונה.</p>
                 <p class="note">כרגע הוא מוחזק "כדרך גידולו" — פיטם למעלה.</p>`,
          hint: (ctx) => ctx.info('לחצו על הכפתור כדי להפוך את האתרוג עד שהפיטם פונה למטה.'),
          enter(ctx) {
            const w = ctx.w;
            const { etrog } = holdScene(ctx, { inverted: false, table: true, cam: 'heroClose' });
            const lp = makeLabel('פיטם', { size: 50, scale: 0.0007 }); lp.position.set(0.1, 0.075, 0); etrog.add(lp);
            const lu = makeLabel('עוקץ', { size: 50, scale: 0.0007 }); lu.position.set(0.1, -0.075, 0); etrog.add(lu);
            let busy = false;
            const b = ctx.button('🔄 הפכו את האתרוג', async () => {
              if (busy) return;
              busy = true;
              await w.flipEtrog(w.etrogInverted);
              busy = false;
              if (w.etrogInverted) { ctx.good('נכון! הפיטם למטה.'); ctx.complete(100); } else ctx.info('כרגע הפיטם למעלה. לפני הברכה — הפיטם צריך להיות למטה.');
            });
          },
        },
        {
          title: 'למה הפוך?',
          body: `<p>האתרוג הפוך והלולב בימין — מוכנים לברכה. אבל למה מחזיקים את האתרוג הפוך?</p>`,
          async enter(ctx) {
            holdScene(ctx, { inverted: true, table: true, cam: 'heroClose' });
            await ctx.mc('למה לפני הברכה מחזיקים את האתרוג הפוך (פיטם למטה)?', [
              { t: 'כדי שלא לקיים את המצווה לפני הברכה — המצווה מתקיימת כשהאתרוג מוחזק כדרך גידולו (פיטם למעלה), והברכה נאמרת "עובר לעשייתן", לפני המצווה', ok: true, why: 'נכון! כך הברכה באה לפני המצווה, וכשהופכים אותו אחריה — מקיימים את המצווה.' },
              { t: 'כדי שהפיטם לא ישבר', ok: false, why: 'זו לא הסיבה. הטעם קשור לכך שהברכה צריכה לבוא לפני קיום המצווה.' },
              { t: 'כי כך האתרוג יציב יותר ביד', ok: false, why: 'יציבות היא לא הטעם. הסיבה היא "עובר לעשייתן" — ברכה לפני המצווה.' },
            ]);
            if (!ctx.alive) return;
            await ctx.mc('באיזו יד אוחזים את הלולב (עם ההדסים והערבות) ובאיזו את האתרוג?', [
              { t: 'הלולב ביד ימין, האתרוג ביד שמאל', ok: true, why: 'נכון! (מי ששמאלי ישאל את רבו.)' },
              { t: 'הלולב ביד שמאל, האתרוג ביד ימין', ok: false, why: 'ההפך: הלולב — ביד ימין.' },
              { t: 'הכול ביד אחת', ok: false, why: 'יש שתי ידיים, ובסוף מצמידים אותן זו לזו.' },
            ]);
            if (ctx.alive) ctx.complete(100);
          },
        },
      ],
    },
    // ---------------------------------------------------------- 5
    {
      id: 'bless', icon: '🙏', title: 'הברכה',
      blurb: 'על נטילת לולב, שהחיינו והסדר הנכון',
      recap: () => '<ul><li>"על נטילת לולב" — לפני המצווה, האתרוג הפוך</li><li>ביום הראשון — גם "שהחיינו", ואז הופכים את האתרוג</li><li>אחר כך מנענעים</li></ul>',
      steps: () => [
        {
          title: 'מברכים: על נטילת לולב',
          body: `<p>האתרוג הפוך, הלולב בימין — מברכים. הברכה נאמרת <b>לפני</b> קיום המצווה ("עובר לעשייתן"):</p>`,
          enter(ctx) {
            holdScene(ctx, { inverted: true, cam: 'heroClose' });
            const card = h('div', { class: 'bless' });
            const spans = BLESSING.netilat.map((wd) => h('span', { class: 'bw' }, wd));
            card.append(...spans.flatMap((s) => [s, ' ']));
            ctx.add(card);
            let busy = false;
            const play = ctx.button('▶ אמרו את הברכה', async () => {
              if (busy) return;
              busy = true;
              spans.forEach((s) => s.classList.remove('on', 'done'));
              const spoke = speak(BLESSING.netilat.join(' '));
              for (const s of spans) {
                if (!ctx.alive) return;
                s.classList.add('on');
                await wait(spoke ? 620 : 480);
                s.classList.remove('on'); s.classList.add('done');
              }
              busy = false;
              if (!ctx.isDone()) {
                ctx.good('עכשיו עונים <b>אמן</b>.');
                const amen = ctx.button('אמן 🙏', () => { amen.remove(); ctx.complete(100); }, 'primary big');
              }
            });
            ctx.add(h('p', { class: 'muted' }, 'אם הדפדפן תומך — תישמע גם הקראה (ניתן להשתיק בכפתור הרמקול).'));
          },
        },
        {
          title: 'שהחיינו — מתי?',
          body: `<p>ביום הראשון שבו נוטלים לולב בשנה מוסיפים ברכת <b>שהחיינו</b> — <b>אחרי</b> "על נטילת לולב" ולפני שהופכים את האתרוג:</p>
                 <div class="bless mini">${BLESSING.shehecheyanu.join(' ')}</div>`,
          async enter(ctx) {
            holdScene(ctx, { inverted: true, cam: 'heroClose' });
            await ctx.mc('היום הראשון של סוכות (בחול), נוטלים לולב לראשונה השנה. אילו ברכות מברכים?', [
              { t: '"על נטילת לולב" ואחריה "שהחיינו"', ok: true, why: 'נכון! קודם "על נטילת לולב" ואחריה "שהחיינו".' },
              { t: 'רק "על נטילת לולב"', ok: false, why: 'ביום הראשון שנוטלים בשנה מוסיפים גם "שהחיינו".' },
              { t: '"שהחיינו" ואחריה "על נטילת לולב"', ok: false, why: 'הסדר: קודם ברכת המצווה, ואחריה "שהחיינו".' },
            ]);
            if (!ctx.alive) return;
            await wait(600);
            ctx.clear();
            await ctx.mc('היום השלישי של החג — מה מברכים?', [
              { t: 'רק "על נטילת לולב"', ok: true, why: 'נכון! "שהחיינו" נאמר רק ביום הראשון (בפעם הראשונה בשנה).' },
              { t: '"על נטילת לולב" ו"שהחיינו"', ok: false, why: '"שהחיינו" נאמר רק בפעם הראשונה בשנה.' },
            ]);
            if (!ctx.alive) return;
            await wait(600);
            ctx.clear();
            await ctx.mc('חל יום ראשון של סוכות בשבת. האם נוטלים לולב?', [
              { t: 'לא — אין נוטלים לולב בשבת (והנטילה והברכה נדחות ליום הבא)', ok: true, why: 'נכון! בשבת אין נוטלים לולב, ו"שהחיינו" נאמר בפעם הראשונה שנוטלים.' },
              { t: 'כן, בדיוק כמו בשאר הימים', ok: false, why: 'בשבת אין נוטלים לולב. (מקורה בגזרת חכמים.)' },
            ]);
            if (ctx.alive) ctx.complete(100);
          },
        },
        {
          title: 'סדר הפעולות',
          body: `<p>סדרו נכון את השלבים מהראשון לאחרון — לחצו על השלב הבא בכל פעם.</p>`,
          async enter(ctx) {
            const w = ctx.w;
            holdScene(ctx, { inverted: true, cam: 'heroClose' });
            await ctx.order('מה הסדר?', [
              'אוחזים לולב ביד ימין ואתרוג הפוך ביד שמאל',
              'מברכים "על נטילת לולב"',
              'ביום הראשון: מברכים "שהחיינו"',
              'הופכים את האתרוג (פיטם למעלה) ומצמידים את הידיים',
              'מנענעים לכל הכיוונים',
            ]);
            if (!ctx.alive) return;
            await w.flipEtrog(true);
            await w.handsTo({ r: [0.09, 1.14, -0.4], l: [0.03, 1.2, -0.4] }, 0.5);
            ctx.good('כך עושים: האתרוג הפוך — ברכה — שהחיינו — הופכים — מנענעים.');
            ctx.complete(100);
          },
        },
      ],
    },
    // ---------------------------------------------------------- 6
    {
      id: 'shake', icon: '🧭', title: 'הנענועים',
      blurb: 'לאיזה כיוונים, באיזה סדר — ולמה',
      recap: (g) => `<ul><li>ששה כיוונים: ${g.N.order.map((k) => DIRS[k].name).join(', ')}</li><li>בכל כיוון שלוש תנועות, הלולב נשאר זקוף</li><li>הטעם (סוכה לז ב): מוליך ומביא — למי שהארבע רוחות שלו; מעלה ומוריד — למי שהשמים והארץ שלו</li></ul>`,
      steps: (g) => {
        const N = g.N;
        const orderTxt = N.order.map((k) => `${DIRS[k].name} (${DIRS[k].rel})`);
        return [
          {
            title: 'כללי הנענוע',
            body: `<p>מנענעים כשהידיים צמודות זו לזו. <b>מוליכים ומביאים</b> (מושיטים את הידיים לכיוון וחוזרים) — שלוש פעמים בכל כיוון. עומדים עם הפנים <b>למזרח</b>: קדימה — מזרח, ימין — דרום, שמאל — צפון, אחורה — מערב (מי שאינו יודע היכן המזרח — הכיוונים נקבעים לפי גופו).</p>
                   <ul><li><b>הלולב נשאר זקוף</b> בכל התנועות — גם כשמורידים: מורידים את הידיים בלבד, לא הופכים את הלולב.</li>
                   ${N.rustle ? '<li>באשכנז נוהגים "לכסכס": ללחוש בעלי הלולב בשעת הנענוע.</li>' : ''}</ul>`,
            async enter(ctx) {
              const w = ctx.w;
              holdScene(ctx, { inverted: false, cam: 'hero', markers: true });
              w.setCamera('hero', 0.8);
              ctx.add(h('div', { class: 'row wrap' },
                ['east', 'south', 'up', 'down'].map((k) => h('button', {
                  class: 'ghost',
                  onclick: () => { sfx.click(); w.stopShake = false; w.shake(k, { reps: 3, dur: 1.5, rustle: N.rustle }); if (N.rustle) sfx.rustle(); },
                }, `הדגמה: ${DIRS[k].name}`))));
              await ctx.mc('בנענוע כלפי מטה — מה עושים בלולב?', [
                { t: 'מורידים את הידיים והלולב נשאר זקוף', ok: true, why: 'נכון! הלולב נשאר תמיד בכיוון גידולו, כלפי מעלה.' },
                { t: 'הופכים את הלולב כשראשו כלפי מטה', ok: false, why: 'לא — מין שגדל צריך להישאר "כדרך גידולו", זקוף.' },
              ]);
              if (ctx.alive) ctx.complete(100);
            },
          },
          {
            title: `הסדר בנוסח ${N.name}`,
            body: `<p>בנוסח <b>${N.name}</b> הסדר הוא:</p>
                   <ol class="order-list">${orderTxt.map((t) => `<li>${t}</li>`).join('')}</ol>
                   ${N.why.map((t) => `<p class="why">${t}</p>`).join('')}
                   <h4 class="sec">השוואה בין הנוסחים</h4>${compareTable('dirs')}`,
            enter(ctx) {
              const w = ctx.w;
              holdScene(ctx, { inverted: false, cam: 'hero', markers: true });
              let busy = false;
              ctx.button('▶ הראו לי את הסדר', async () => {
                if (busy) return;
                busy = true;
                w.stopShake = false;
                await w.shakeSequence(N.order, { reps: 3, dur: 1.4, rustle: N.rustle });
                busy = false;
                if (ctx.alive && !ctx.isDone()) { ctx.good('זה הסדר. עכשיו נתרגל!'); ctx.complete(60); }
              });
            },
          },
          {
            title: 'תרגול: נענעו בסדר הנכון',
            body: `<p>נענעו בסדר של נוסח <b>${N.name}</b> — לחצו על הכפתורים <span class="kbd">(או במקלדת: W קדימה · D ימין · S אחורה · A שמאל · E מעלה · Q מטה)</span>.</p>`,
            hint: (ctx) => {
              const i = ctx.shared.idx || 0;
              ctx.info(`הכיוון הבא: <b>${DIRS[N.order[i]].name}</b> (${DIRS[N.order[i]].rel})`);
            },
            enter(ctx) {
              const w = ctx.w;
              holdScene(ctx, { inverted: false, cam: 'hero', markers: true });
              ctx.shared.idx = 0;
              const prog = h('div', { class: 'chips' }, N.order.map(() => h('span', { class: 'chip' }, '·')));
              ctx.add(prog);
              const pad = h('div', { class: 'dpad' });
              const mk = (k, area) => {
                const b = h('button', { class: 'dbtn ' + area, onclick: () => go(k) }, h('b', {}, DIRS[k].rel), h('small', {}, DIRS[k].name));
                pad.append(b);
              };
              mk('east', 'n'); mk('north', 'w'); mk('south', 'e'); mk('west', 's'); mk('up', 'u'); mk('down', 'd');
              pad.classList.add('sticky');
              ctx.add(pad);
              let busy = false;
              const go = async (k) => {
                if (busy || ctx.isDone()) return;
                const i = ctx.shared.idx;
                if (k !== N.order[i]) {
                  ctx.mistake(`לא זה. בנוסח ${N.name} ${i === 0 ? 'מתחילים' : 'אחרי ' + DIRS[N.order[i - 1]].name + ' באים'} ב<b>${DIRS[N.order[i]].name}</b>.`);
                  return;
                }
                busy = true;
                prog.children[i].textContent = DIRS[k].name;
                prog.children[i].classList.add('ok');
                ctx.shared.idx++;
                w.stopShake = false;
                if (N.rustle) sfx.rustle();
                await w.shake(k, { reps: 3, dur: 1.25, rustle: N.rustle });
                busy = false;
                if (ctx.shared.idx === N.order.length && ctx.alive) { ctx.good('מצוין! ששת הכיוונים בסדר הנכון.'); ctx.complete(100); }
              };
              const keys = { KeyW: 'east', ArrowUp: 'east', KeyD: 'south', ArrowRight: 'south', KeyS: 'west', ArrowDown: 'west', KeyA: 'north', ArrowLeft: 'north', KeyE: 'up', PageUp: 'up', KeyQ: 'down', PageDown: 'down' };
              ctx.onKey((e) => { if (keys[e.code]) { go(keys[e.code]); return true; } return false; });
            },
          },
          {
            title: 'למה מנענעים?',
            body: `<p>מה הטעם? הגמרא (סוכה לז ב) מביאה כמה טעמים — בדקו את עצמכם:</p>`,
            async enter(ctx) {
              holdScene(ctx, { inverted: false, cam: 'hero', markers: true });
              await ctx.mc('לפי רבי יוחנן, מה משמעות "מוליך ומביא" (לארבע הרוחות)?', [
                { t: 'למי שארבע הרוחות שלו — הכרה שהקב"ה שולט בכל העולם', ok: true, why: 'נכון! "מוליך ומביא — למי שהארבע רוחות שלו".' },
                { t: 'כדי להתרחק מהאתרוג', ok: false, why: 'לא. זו הכרזה על מלכות ה\' בכל כיוון.' },
                { t: 'כדי להשמיע רשרוש', ok: false, why: 'הרשרוש הוא מנהג ("כיסכוס"), לא הטעם של הגמרא.' },
              ]);
              if (!ctx.alive) return;
              await wait(500); ctx.clear();
              await ctx.mc('ו"מעלה ומוריד"?', [
                { t: 'למי שהשמים והארץ שלו', ok: true, why: 'נכון! "מעלה ומוריד — למי שהשמים והארץ שלו".' },
                { t: 'כדי לנער את האבק', ok: false, why: 'הטעם הוא הכרה בבורא שמים וארץ.' },
              ]);
              if (!ctx.alive) return;
              await wait(500); ctx.clear();
              await ctx.mc('לפי הסבר נוסף בגמרא, הנענועים באים כדי...', [
                { t: 'לעצור רוחות רעות (בהולכה והבאה) וטללים רעים (במעלה ומוריד)', ok: true, why: 'נכון! גם בקשה על ברכת הגשמים והטל.' },
                { t: 'להבריח יתושים', ok: false, why: 'לא — הטעם קשור לרוחות ולטללים.' },
              ]);
              if (!ctx.alive) return;
              await wait(500); ctx.clear();
              const right = N.order.map((k) => DIRS[k].name).join(' ← ');
              const ari = ['south', 'north', 'east', 'up', 'down', 'west'].map((k) => DIRS[k].name).join(' ← ');
              const ash = ['east', 'south', 'west', 'north', 'up', 'down'].map((k) => DIRS[k].name).join(' ← ');
              await ctx.mc(`איזה סדר הוא של נוסח <b>${N.name}</b>?`, [
                { t: right, ok: true, why: `נכון! ${N.why[0]}` },
                { t: N.key === 'ashkenaz' ? ari : ash, ok: false, why: 'זה הסדר של נוסח אחר. נסו שוב.' },
                { t: 'מעלה ← מטה ← מזרח ← מערב ← צפון ← דרום', ok: false, why: 'זה לא סדר של אף נוסח.' },
              ]);
              if (ctx.alive) ctx.complete(100);
            },
          },
        ];
      },
    },
    // ---------------------------------------------------------- 7
    {
      id: 'hallel', icon: '🎵', title: 'נענוע בהלל',
      blurb: 'איפה בדיוק מנענעים בתפילת הלל — לפי הנוסח',
      recap: (g) => `<ul><li>${g.N.hallelSummary}</li><li>מנענעים ב"הודו לה' כי טוב" וב"אנא ה' הושיעה נא" (ולא ב"הצליחה נא")</li><li>ב"הודו" שישה כיוונים לשש מילים; ב"אנא" — שתי תנועות לכל מילה</li></ul>`,
      steps: (g) => {
        const N = g.N;
        return [
          {
            title: 'איפה מנענעים בהלל?',
            auto: true,
            body: `<p>בהלל אוחזים את הלולב ומנענעים במקומות המסוימים. הכלל (סוכה לז ב): בפסוק <b>"הודו לה' כי טוב כי לעולם חסדו"</b> — בתחילת ההלל ובסופו, וב<b>"אנא ה' הושיעה נא"</b>.</p>
                   <p><b>בנוסח ${N.name}:</b> ${N.hallelSummary}</p>
                   <ul>
                     <li><b>הודו</b> — הודאה על החסד; <b>הושיעה נא</b> — תפילה לישועה ולגשמים. ב"הצליחה נא" לא מנענעים.</li>
                     <li>מילה־מילה: ב"הודו לה' כי טוב כי לעולם חסדו" יש שש מילים מלבד שם ה' — <b>לכל מילה כיוון</b> לפי סדר הנוסח (שם ה' — לא מנענעים). ב"אנא ה' הושיעה נא" שלוש מילים, ולכל מילה <b>שני כיוונים</b>.</li>
                     ${N.key === 'chabad' ? '<li>בחב"ד בכל כיוון שלוש תנועות (18 תנועות בכל פעם).</li>' : ''}
                     <li>בנוסח תימן מנענעים ארבע פעמים, כי אין חוזרים על "אנא ה' הושיעה נא".</li>
                   </ul>
                   <h4 class="sec">השוואה בין הנוסחים</h4>${compareTable('hallel')}
                   <p class="note">פרטי החזרות והכיוונים המדויקים עשויים להשתנות בין קהילות — נהגו כמנהג קהילתכם.</p>`,
            enter(ctx) { holdScene(ctx, { inverted: false, cam: 'hero', markers: true }); },
          },
          {
            title: 'צפו: ההלל בנוסח שלכם',
            auto: true,
            body: `<p>הדמות תנענע בכל מקום בהלל לפי נוסח <b>${N.name}</b>. שימו לב מתי מופיע 🤲 ולאיזה כיוון בכל מילה.</p>`,
            enter(ctx) {
              holdScene(ctx, { inverted: false, cam: 'hero', markers: true });
              const p = hallelPlayer(ctx, 'guide', () => { ctx.good('זה הסדר המלא של ההלל בנוסח שלכם.'); ctx.complete(80); });
              ctx.add(p.el);
              ctx.add(h('div', { class: 'row sticky' }, h('button', { class: 'primary', onclick: () => { sfx.click(); p.start(); } }, '▶ הפעילו'), h('button', { class: 'ghost', onclick: () => { sfx.click(); p.start(); } }, '↻ שוב')));
            },
          },
          {
            title: 'אתגר: נענעו בזמן הנכון',
            body: `<p>ההלל מתקדם — <b>לחצו "נענעו"<span class="kbd"> (או רווח)</span></b> בכל פעם שצריך לנענע בנוסח <b>${N.name}</b>. אל תנענעו במקומות אחרים! מותר עד 5 טעויות.</p>`,
            enter(ctx) {
              const w = ctx.w;
              holdScene(ctx, { inverted: false, cam: 'hero', markers: true });
              const p = hallelPlayer(ctx, 'play', (r) => {
                const bad = r.wrong + r.missed;
                if (bad <= 5) { ctx.good(`כל הכבוד! ${r.hits} מתוך ${r.total} נענועים בזמן.`); ctx.complete(100); } else ctx.info(`היו ${bad} טעויות. נסו שוב — אתם קרובים!`);
              });
              ctx.add(p.el);
              const shake = h('button', { class: 'primary big shake', onclick: () => p.press() }, '🤲 נענעו!');
              ctx.add(h('div', { class: 'row sticky' }, shake, h('button', { class: 'ghost', onclick: () => { sfx.click(); p.start(); } }, '▶ התחילו / ↻')));
              ctx.onKey((e) => { if (e.code === 'Space') { p.press(); return true; } return false; });
            },
          },
        ];
      },
    },
  ];
}
