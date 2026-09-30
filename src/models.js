// דגמים תלת־ממדיים פרוצדורליים: ארבעת המינים, יד אוחזת, דמות מלמדת
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const UP = new THREE.Vector3(0, 1, 0);

// ---------- כלים ----------
export function rng(seed = 1) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const mat = (color, o = {}) =>
  new THREE.MeshStandardMaterial({ color, roughness: 0.75, metalness: 0, ...o });

const cache = {};
const cmat = (key, color, o = {}) => (cache[key] ??= mat(color, o));

/** עלה שטוח מחודד: לאורך Y, רוחב ב-X, קפל בצורת V, ואפשרות לשיניים (ערבה פסולה). */
export function leafGeo(len, width, { fold = 0.25, bend = 0, segs = 6, teeth = false, shape = 'ovate' } = {}) {
  const pos = [], idx = [];
  const rows = teeth ? segs * 2 : segs;
  for (let i = 0; i <= rows; i++) {
    const t = i / rows;
    let w;
    if (shape === 'ovate') w = Math.sin(Math.PI * Math.pow(t, 0.75)) * (1 - 0.25 * t);
    else if (shape === 'lance') w = Math.sin(Math.PI * Math.pow(t, 0.9)) * 0.95 + 0.05 * (1 - t);
    else w = (1 - Math.pow(t, 2.2)); // להב לולב
    w = Math.max(w, 0.0) * width;
    if (teeth && i % 2 === 1 && i < rows) w *= 0.55; // שיניים
    const y = t * len;
    const z = bend * len * t * t;
    pos.push(-w / 2, y, z + fold * w * 0.5, 0, y, z - fold * w * 0.5, w / 2, y, z + fold * w * 0.5);
  }
  for (let i = 0; i < rows; i++) {
    const a = i * 3, b = (i + 1) * 3;
    idx.push(a, b, a + 1, a + 1, b, b + 1, a + 1, b + 1, a + 2, a + 2, b + 1, b + 2);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

function placeLimb(mesh, a, b) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = Math.max(dir.length(), 1e-4);
  mesh.position.copy(a).addScaledVector(dir, 0.5);
  mesh.scale.set(1, len, 1);
  mesh.quaternion.setFromUnitVectors(UP, dir.multiplyScalar(1 / len));
}

/** ממזג רשימת עלים (גיאומטריה + אובייקט מיקום) למש אחד — מפחית קריאות ציור. */
function bake(entries, material, colors = null) {
  const geos = entries.map(({ geo, obj }, i) => {
    let root = obj;
    while (root.parent) root = root.parent;
    root.updateMatrixWorld(true);
    const c = geo.clone();
    c.applyMatrix4(obj.matrixWorld);
    if (colors) {
      const col = new THREE.Color(colors[i % colors.length]);
      const n = c.attributes.position.count;
      const arr = new Float32Array(n * 3);
      for (let k = 0; k < n; k++) { arr[k * 3] = col.r; arr[k * 3 + 1] = col.g; arr[k * 3 + 2] = col.b; }
      c.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    }
    return c;
  });
  return new THREE.Mesh(mergeGeometries(geos, false), material);
}

// ---------- לולב ----------
/**
 * ציר מקומי: אורך לאורך +Y (בסיס y=0). השדרה (הגב הקשה) בצד +Z.
 * open=true: לולב "נפוץ" (פסול) — העלים מתפזרים.
 */
export function makeLulav({ length = 0.62, open = false, seed = 7 } = {}) {
  const g = new THREE.Group();
  const r = rng(seed);
  const spineMat = cmat('spine', 0xd4c07a, { roughness: 0.55 });
  // שדרה
  const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.0035, 0.0105, length * 0.98, 8), spineMat);
  spine.scale.x = 1.5;
  spine.position.set(0, length * 0.49, 0.013);
  spine.userData.part = 'spine';
  g.add(spine);
  // עלים
  const greens = [0x3f8a3a, 0x4b9a3f, 0x367a34, 0x56a344, 0x2f7031];
  const n = 46;
  const entries = [];
  const bladeGeo = new Map();
  for (let i = 0; i < n; i++) {
    const y0 = 0.05 + (i / n) * (length * 0.62) + r() * 0.02;
    const len = Math.min(length - y0 - 0.005, 0.3 + r() * 0.12);
    const ang = (r() - 0.5) * Math.PI * 1.15; // בצד הקדמי (-Z)
    const rad = 0.008 + r() * 0.011;
    const geo = leafGeo(len, 0.036, { fold: 0.9, segs: 8, shape: 'blade' });
    const o = new THREE.Object3D();
    const splay = open ? 0.10 + (r() * 0.16) : 0.012 + r() * 0.02;
    o.position.set(Math.sin(ang) * rad, y0, -Math.cos(ang) * rad + 0.004);
    o.rotation.set(-splay * Math.cos(ang), ang * (open ? 0.35 : 0.08), splay * Math.sin(ang) * 1.5);
    entries.push({ geo, obj: o });
  }
  // התיומת — שני העלים המרכזיים המחוברים בראש
  const tipO = new THREE.Object3D();
  tipO.position.set(0, length * 0.5, -0.002);
  entries.push({ geo: leafGeo(length * 0.5, 0.026, { fold: 1, segs: 10, shape: 'blade' }), obj: tipO });
  const blades = bake(entries, cmat('lulavLeaves', 0xffffff, { side: THREE.DoubleSide, roughness: 0.6, vertexColors: true }),
    [...greens, ...greens.slice().reverse(), 0x4fa03f]);
  blades.userData.part = 'tiyumet';
  g.add(blades);
  g.userData.length = length;
  g.userData.kind = 'lulav';
  return g;
}

// ---------- הדס ----------
/** variant: 'kosher' (שלשה עלים בכל קומה — מסולסל) | 'pairs' (זוגות — שוטה, פסול) */
export function makeHadas({ length = 0.44, variant = 'kosher', seed = 3 } = {}) {
  const g = new THREE.Group();
  const r = rng(seed);
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.0022, 0.0042, length, 6), cmat('hstem', 0x5c4a2e));
  stem.position.y = length / 2;
  g.add(stem);
  const leafMat = cmat('hleaf', 0x2e8a44, { side: THREE.DoubleSide, roughness: 0.5, emissive: 0x0d3a1a, emissiveIntensity: 0.7 });
  const per = variant === 'kosher' ? 3 : 2;
  const nodes = 18;
  const entries = [];
  for (let i = 0; i < nodes; i++) {
    const t = i / (nodes - 1);
    const y = 0.05 + t * (length - 0.06);
    const base = i * (variant === 'kosher' ? 1.05 : 1.6);
    for (let k = 0; k < per; k++) {
      let a = base + (k * Math.PI * 2) / per;
      if (variant === 'pairs' && k === 1) a = base + Math.PI;
      const size = 0.05 - 0.02 * t;
      const geo = leafGeo(size, size * 0.42, { fold: 0.35, segs: 5, shape: 'ovate' });
      // עלה יוצא בצד, זקוף כלפי מעלה והחוצה
      const pivot = new THREE.Group();
      pivot.position.y = y + (variant === 'pairs' ? (k === 2 ? 0.012 : 0) : 0);
      pivot.rotation.y = a;
      const m = new THREE.Object3D();
      m.rotation.x = 0.85 - 0.3 * t + (r() - 0.5) * 0.12;
      m.position.set(0, 0, 0.002);
      pivot.add(m);
      entries.push({ geo, obj: m });
    }
  }
  g.add(bake(entries, leafMat));
  g.userData.length = length;
  g.userData.kind = 'hadas';
  return g;
}

// ---------- ערבה ----------
/** variant: 'smooth' (שפה חלקה — כשרה) | 'serrated' (משוננת — פסולה) */
export function makeArava({ length = 0.42, variant = 'smooth', seed = 5 } = {}) {
  const g = new THREE.Group();
  const r = rng(seed);
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.0022, 0.0038, length, 6),
    cmat('astem' + variant, variant === 'smooth' ? 0x8c3b2b : 0x7c5a3a));
  stem.position.y = length / 2;
  g.add(stem);
  const smooth = variant === 'smooth';
  const leafMat = cmat('aleaf' + variant, smooth ? 0x86ad4e : 0x4f8a34, { side: THREE.DoubleSide, roughness: 0.55 });
  const nodes = 14;
  const entries = [];
  for (let i = 0; i < nodes; i++) {
    const t = i / (nodes - 1);
    const y = 0.04 + t * (length - 0.06);
    const a = i * 2.4 + r() * 0.3;
    const len = (smooth ? 0.11 : 0.085) - 0.045 * t;
    const geo = leafGeo(len, smooth ? 0.016 : 0.028, {
      fold: 0.2, bend: smooth ? -0.15 : -0.05, segs: 8, teeth: !smooth, shape: 'lance',
    });
    const pivot = new THREE.Group();
    pivot.position.y = y;
    pivot.rotation.y = a;
    const m = new THREE.Object3D();
    m.rotation.x = 0.55 - 0.2 * t;
    pivot.add(m);
    entries.push({ geo, obj: m });
  }
  g.add(bake(entries, leafMat));
  g.userData.length = length;
  g.userData.kind = 'arava';
  return g;
}

// ---------- אתרוג ----------
/** ציר: פיטם למעלה (+Y), עוקץ למטה (-Y). מרכז באפס. */
export function makeEtrog({ seed = 11 } = {}) {
  const g = new THREE.Group();
  const r = rng(seed);
  const pts = [
    [0.0, -0.058], [0.011, -0.055], [0.025, -0.045], [0.036, -0.026], [0.041, -0.002],
    [0.038, 0.02], [0.03, 0.04], [0.018, 0.053], [0.009, 0.059], [0.0, 0.061],
  ].map(([x, y]) => new THREE.Vector2(x, y));
  const geo = new THREE.LatheGeometry(pts, 40);
  const p = geo.attributes.position;
  const col = [];
  const c1 = new THREE.Color(0xe8d13c), c2 = new THREE.Color(0xb7c23a);
  const off = r() * 10;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const bump = Math.sin(x * 260 + off) * Math.sin(y * 300 + z * 200) * 0.0016 + Math.sin(z * 340 + y * 180) * 0.0012;
    const len = Math.hypot(x, z) || 1;
    p.setXYZ(i, x + (x / len) * bump, y, z + (z / len) * bump);
    const m = 0.5 + 0.5 * Math.sin(y * 90 + x * 40 + off);
    const c = c1.clone().lerp(c2, m * 0.5);
    col.push(c.r, c.g, c.b);
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geo.computeVertexNormals();
  const body = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6 }));
  body.userData.part = 'body';
  g.add(body);
  // פיטם (למעלה)
  const pitam = new THREE.Mesh(new THREE.ConeGeometry(0.0065, 0.016, 8), cmat('pitam', 0x3b2a18));
  pitam.position.y = 0.066;
  pitam.userData.part = 'pitam';
  g.add(pitam);
  // עוקץ (למטה)
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.014, 0.008, 12), cmat('ukatz', 0x6b4a28));
  cap.position.y = -0.058;
  cap.userData.part = 'ukatz';
  g.add(cap);
  const stemM = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.005, 0.014, 8), cmat('ukatz', 0x6b4a28));
  stemM.position.y = -0.066;
  stemM.userData.part = 'ukatz';
  g.add(stemM);
  g.userData.kind = 'etrog';
  return g;
}

// ---------- אגד ----------
/**
 * מסדר: 'shulchan' (הדסים מימין, ערבות משמאל) | 'ari' (ערבה מימין ומשמאל, שלשה הדסים מעליהן).
 * מחזיר {group, slots}. לכל סלוט: kind, position, tilt.
 * הלולב עומד בראשית; השדרה פונה ל-+Z (המחזיק); ימין המחזיק = +X.
 */
export const ARRANGEMENTS = {
  shulchan: {
    label: 'הדסים מימין, ערבות משמאל',
    slots: [
      { kind: 'hadas', pos: [0.030, 0.030], tilt: [0, 0.03] },
      { kind: 'hadas', pos: [0.042, 0.020], tilt: [0, 0.05] },
      { kind: 'hadas', pos: [0.018, 0.040], tilt: [0, 0.02] },
      { kind: 'arava', pos: [-0.030, 0.030], tilt: [0, -0.03] },
      { kind: 'arava', pos: [-0.042, 0.020], tilt: [0, -0.05] },
    ],
  },
  ari: {
    label: 'ערבה מימין ומשמאל, ושלשה הדסים מכסים',
    slots: [
      { kind: 'arava', pos: [0.022, 0.028], tilt: [0, 0.02] },
      { kind: 'arava', pos: [-0.022, 0.028], tilt: [0, -0.02] },
      { kind: 'hadas', pos: [0.036, 0.040], tilt: [0, 0.04] },
      { kind: 'hadas', pos: [-0.036, 0.040], tilt: [0, -0.04] },
      { kind: 'hadas', pos: [0.006, 0.050], tilt: [0, 0.03] },
    ],
  },
};

/** בונה אגד: slotCount = כמה ענפים כבר חוברו (לפי סדר הסלוטים של הסידור), rings = כמה טבעות. */
export const LEN = { lulav: 0.66, hadas: 0.54, arava: 0.51 };
export function makeBundle({ arrangement = 'shulchan', hadasTip = LEN.hadas, aravaTip = LEN.arava, lulavLen = LEN.lulav,
  rings = 3, slotCount = 5, seed = 1, handle = true } = {}) {
  const g = new THREE.Group();
  const lulav = makeLulav({ length: lulavLen, seed: 7 + seed });
  g.add(lulav);
  const arr = ARRANGEMENTS[arrangement];
  const parts = [];
  let hi = 0, ai = 0;
  arr.slots.forEach((s, i) => {
    const isH = s.kind === 'hadas';
    const idx = isH ? hi++ : ai++;
    if (i >= slotCount) return;
    const tip = isH ? hadasTip : aravaTip;
    const m = isH ? makeHadas({ length: tip, seed: 3 + idx }) : makeArava({ length: tip, seed: 5 + idx });
    m.position.set(s.pos[0], 0, s.pos[1]);
    m.rotation.set(s.tilt[0], 0, -s.tilt[1]);
    g.add(m);
    parts.push(m);
  });
  g.userData.parts = parts;
  g.userData.lulav = lulav;
  [0.16, 0.24, 0.32].slice(0, rings).forEach((y) => g.add(makeRing(y)));
  if (handle && slotCount > 0) {
    const wrap = new THREE.Mesh(new THREE.CylinderGeometry(0.031, 0.029, 0.11, 14), cmat('wrap', 0x8a7a3a));
    wrap.position.set(0, 0.06, 0.016);
    g.add(wrap);
  }
  g.userData.kind = 'bundle';
  return g;
}

export function makeRing(y, ghost = false) {
  const t = new THREE.Mesh(
    new THREE.TorusGeometry(0.045, ghost ? 0.012 : 0.0055, 8, 24),
    ghost
      ? new THREE.MeshBasicMaterial({ color: 0xffd44d, transparent: true, opacity: 0.55, depthTest: false })
      : cmat('ring', 0xb8a44a, { roughness: 0.5 }),
  );
  t.rotation.x = Math.PI / 2;
  t.position.set(0, y, 0.02);
  t.scale.set(0.9, 0.7, 1);
  t.userData.ringY = y;
  return t;
}

// ---------- אגרוף אוחז ----------
const SKIN = 0xe0b08c;
/** אגרוף סביב מוט אנכי בראשית. פיסת כף היד בצד +Z (צד הגוף). */
export function makeFist(side = 1) {
  const g = new THREE.Group();
  const skin = cmat('skin', SKIN, { roughness: 0.6 });
  const palm = new THREE.Mesh(new THREE.SphereGeometry(0.048, 16, 12), skin);
  palm.scale.set(1.05, 1.05, 0.75);
  palm.position.set(0, 0, 0.05);
  g.add(palm);
  const R = 0.034;
  for (let i = 0; i < 4; i++) {
    const geo = new THREE.TorusGeometry(R + 0.006, 0.0095, 8, 18, Math.PI * 1.25);
    geo.rotateX(Math.PI / 2);
    geo.rotateY(side * 0.35 + (side > 0 ? 0 : Math.PI * 0.75));
    const f = new THREE.Mesh(geo, skin);
    f.position.y = (i - 1.5) * 0.02;
    f.scale.x = side;
    g.add(f);
  }
  const thumb = new THREE.Mesh(new THREE.CapsuleGeometry(0.0105, 0.05, 4, 8), skin);
  thumb.rotation.z = Math.PI / 2;
  thumb.position.set(-side * 0.012, 0.045, -0.03);
  g.add(thumb);
  return g;
}

// ---------- דמות ----------
export class Avatar {
  constructor() {
    this.root = new THREE.Group();
    const shirt = cmat('shirt', 0xf4f1ea, { roughness: 0.85 });
    const trousers = cmat('trousers', 0x2b2f3a);
    const skin = cmat('skin', SKIN, { roughness: 0.6 });
    const hair = cmat('hair', 0x3a2a1c);
    const kippa = cmat('kippa', 0x2d4f8a, { roughness: 0.9 });

    // רגליים
    for (const s of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 0.7, 4, 10), trousers);
      leg.position.set(s * 0.09, 0.5, 0);
      leg.castShadow = true;
      this.root.add(leg);
      const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.07, 0.26), cmat('shoe', 0x1a1a1a));
      shoe.position.set(s * 0.09, 0.035, -0.05);
      shoe.castShadow = true;
      this.root.add(shoe);
    }
    // מותניים וגוף עליון
    this.hips = new THREE.Group();
    this.hips.position.y = 0.95;
    this.root.add(this.hips);
    this.torso = new THREE.Group();
    this.hips.add(this.torso);
    const chest = new THREE.Mesh(new THREE.CapsuleGeometry(0.165, 0.34, 6, 14), shirt);
    chest.scale.z = 0.72;
    chest.position.y = 0.24;
    chest.castShadow = true;
    this.torso.add(chest);
    const pelvis = new THREE.Mesh(new THREE.CapsuleGeometry(0.15, 0.1, 6, 14), trousers);
    pelvis.scale.z = 0.75;
    pelvis.position.y = -0.04;
    pelvis.castShadow = true;
    this.hips.add(pelvis);
    // ראש
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.115, 24, 18), skin);
    head.scale.set(0.92, 1.08, 1);
    head.position.y = 0.72;
    head.castShadow = true;
    this.torso.add(head);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.122, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.42), kippa);
    cap.scale.set(0.92, 1.08, 1);
    cap.position.y = 0.73;
    this.torso.add(cap);
    const beard = new THREE.Mesh(new THREE.SphereGeometry(0.085, 20, 14), hair);
    beard.scale.set(1.0, 0.72, 0.8);
    beard.position.set(0, 0.655, -0.06);
    this.torso.add(beard);
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.014, 0.03, 8), skin);
    nose.rotation.x = -Math.PI / 2;
    nose.position.set(0, 0.722, -0.122);
    this.torso.add(nose);
    for (const s of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.012, 8, 8), cmat('eye', 0x1b1b1b));
      eye.position.set(s * 0.04, 0.745, -0.105);
      this.torso.add(eye);
      const peah = new THREE.Mesh(new THREE.CapsuleGeometry(0.008, 0.06, 3, 6), hair);
      peah.position.set(s * 0.112, 0.7, -0.03);
      this.torso.add(peah);
    }
    // כתפיים
    this.shoulderR = new THREE.Object3D(); this.shoulderR.position.set(0.2, 0.47, 0); this.torso.add(this.shoulderR);
    this.shoulderL = new THREE.Object3D(); this.shoulderL.position.set(-0.2, 0.47, 0); this.torso.add(this.shoulderL);

    // זרועות
    this.arms = {};
    const sleeve = cmat('sleeve', 0xf1eee6, { roughness: 0.85 });
    for (const side of ['r', 'l']) {
      const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.042, 1, 12), sleeve);
      const fore = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.034, 1, 12), sleeve);
      const elbow = new THREE.Mesh(new THREE.SphereGeometry(0.044, 12, 10), sleeve);
      const shoulderBall = new THREE.Mesh(new THREE.SphereGeometry(0.052, 12, 10), sleeve);
      const wristCuff = new THREE.Mesh(new THREE.CylinderGeometry(0.037, 0.037, 0.03, 12), skin);
      [upper, fore, elbow, shoulderBall, wristCuff].forEach((m) => { m.castShadow = true; this.root.add(m); });
      const fist = makeFist(side === 'r' ? 1 : -1);
      fist.traverse((o) => { if (o.isMesh) o.castShadow = true; });
      this.root.add(fist);
      const anchor = new THREE.Object3D();
      this.root.add(anchor);
      this.arms[side] = {
        upper, fore, elbow, shoulderBall, wristCuff, fist, anchor,
        target: new THREE.Vector3(side === 'r' ? 0.28 : -0.28, 0.85, -0.05),
        grip: 0.6, // גודל האגרוף (1 = סביב מוט של 3 ס"מ)
        elbowOut: side === 'r' ? 1 : -1,
      };
    }
    this.lean = 0;
    this.A = 0.33; // אורך זרוע עליונה
    this.B = 0.31; // אמה
  }

  /** מציב את מרכז האגרוף (במרחב העולם) */
  setHand(side, pos, grip) {
    const a = this.arms[side];
    a.target.copy(pos);
    if (grip !== undefined) a.grip = grip;
  }

  update() {
    this.torso.rotation.x = -this.lean;
    this.root.updateMatrixWorld(true);
    for (const side of ['r', 'l']) {
      const a = this.arms[side];
      const S = new THREE.Vector3();
      (side === 'r' ? this.shoulderR : this.shoulderL).getWorldPosition(S);
      const F = a.target;
      a.fist.position.copy(F);
      a.fist.scale.set(a.grip, 1, a.grip);
      a.anchor.position.copy(F);
      // שורש כף היד: מאחורי האגרוף (בצד הגוף) ומעט למטה
      const W = new THREE.Vector3(F.x + (side === 'r' ? 0.005 : -0.005), F.y - 0.03, F.z + 0.09 * Math.max(0.7, a.grip));
      // IK דו־עצמות
      const dirV = new THREE.Vector3().subVectors(W, S);
      let d = dirV.length();
      const reach = this.A + this.B - 0.002;
      if (d > reach) { W.copy(S).addScaledVector(dirV.normalize(), reach); d = reach; dirV.subVectors(W, S); }
      const dir = dirV.clone().normalize();
      const x = (this.A * this.A - this.B * this.B + d * d) / (2 * d);
      const h = Math.sqrt(Math.max(this.A * this.A - x * x, 0));
      const pole = new THREE.Vector3(a.elbowOut * 0.7, -1, 0.55);
      pole.addScaledVector(dir, -pole.dot(dir)).normalize();
      const E = new THREE.Vector3().copy(S).addScaledVector(dir, x).addScaledVector(pole, h);
      placeLimb(a.upper, S, E);
      placeLimb(a.fore, E, W);
      a.elbow.position.copy(E);
      a.shoulderBall.position.copy(S);
      a.wristCuff.position.copy(W);
      a.wristCuff.quaternion.setFromUnitVectors(UP, new THREE.Vector3().subVectors(F, W).normalize());
      // הפיכת האגרוף לשמור יציבות
      a.fist.rotation.set(0, 0, 0);
    }
  }
}
