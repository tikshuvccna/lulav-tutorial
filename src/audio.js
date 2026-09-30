// צלילים קצרים (WebAudio) והקראה אופציונלית
let ctx = null;
let muted = false;

function ac() {
  try {
    ctx ??= new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
  } catch (e) { ctx = null; }
  return ctx;
}

function tone(freq, dur = 0.15, type = 'sine', vol = 0.12, delay = 0) {
  const c = ac();
  if (!c || muted) return;
  const t = c.currentTime + delay;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(c.destination);
  o.start(t);
  o.stop(t + dur + 0.02);
}

function noise(dur = 0.25, vol = 0.08) {
  const c = ac();
  if (!c || muted) return;
  const n = Math.floor(c.sampleRate * dur);
  const buf = c.createBuffer(1, n, c.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
  const src = c.createBufferSource();
  src.buffer = buf;
  const f = c.createBiquadFilter();
  f.type = 'bandpass'; f.frequency.value = 3200; f.Q.value = 0.7;
  const g = c.createGain(); g.gain.value = vol;
  src.connect(f).connect(g).connect(c.destination);
  src.start();
}

export const sfx = {
  ok() { tone(660, 0.12, 'triangle', 0.12); tone(880, 0.18, 'triangle', 0.12, 0.09); },
  bad() { tone(220, 0.2, 'sawtooth', 0.07); tone(170, 0.25, 'sawtooth', 0.07, 0.1); },
  click() { tone(520, 0.05, 'square', 0.04); },
  win() { [523, 659, 784, 1046].forEach((f, i) => tone(f, 0.25, 'triangle', 0.12, i * 0.12)); },
  rustle() { noise(0.28, 0.07); },
  setMuted(m) { muted = m; },
  isMuted() { return muted; },
};

export function speak(text) {
  try {
    if (muted || !('speechSynthesis' in window)) return false;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'he-IL';
    u.rate = 0.85;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
    return true;
  } catch (e) { return false; }
}

export function stopSpeak() {
  try { speechSynthesis.cancel(); } catch (e) { /* noop */ }
}
