// העולם התלת־ממדי: סוכה, שולחן, דמות, מצלמה, נענועים
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Avatar, leafGeo, mat, rng } from './models.js';

export const DIRS = {
  east:  { v: new THREE.Vector3(0, 0, -1), name: 'מזרח',  rel: 'קדימה' },
  south: { v: new THREE.Vector3(1, 0, 0),  name: 'דרום',  rel: 'ימין' },
  west:  { v: new THREE.Vector3(0, 0, 1),  name: 'מערב',  rel: 'אחור' },
  north: { v: new THREE.Vector3(-1, 0, 0), name: 'צפון',  rel: 'שמאל' },
  up:    { v: new THREE.Vector3(0, 1, 0),  name: 'מעלה',  rel: 'מעלה' },
  down:  { v: new THREE.Vector3(0, -1, 0), name: 'מטה',   rel: 'מטה' },
};

const easeIO = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

export const CAMS = {
  table:      { pos: [0, 1.7, 1.4],     target: [0, 1.15, -0.6] },
  tableClose: { pos: [0, 1.58, 1.1],    target: [0, 1.15, -0.5] },
  tableSide:  { pos: [1.15, 1.35, -0.1], target: [0, 0.98, -0.55] },
  hero:       { pos: [1.75, 1.6, -2.15], target: [0, 1.12, -0.15] },
  heroClose:  { pos: [1.05, 1.5, -1.6],  target: [0.06, 1.3, -0.4] },
  handsFront: { pos: [0.05, 1.3, -1.25], target: [0.05, 1.2, -0.4] },
  behind:     { pos: [0.55, 1.75, 2.3], target: [0, 1.25, -0.5] },
  compass:    { pos: [0.4, 2.3, 2.7],   target: [0, 0.75, -0.5] },
  front:      { pos: [0, 1.55, -2.5],   target: [0, 1.15, 0] },
};

function canvasTex(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

export function makeLabel(text, { size = 64, color = '#fff', bg = 'rgba(20,30,50,.72)', scale = 0.0022, pad = 22 } = {}) {
  const c = document.createElement('canvas');
  const ctx = c.getContext('2d');
  ctx.font = `700 ${size}px Heebo, Arial, sans-serif`;
  const w = Math.ceil(ctx.measureText(text).width) + pad * 2;
  const h = size + pad;
  c.width = w; c.height = h;
  ctx.font = `700 ${size}px Heebo, Arial, sans-serif`;
  ctx.direction = 'rtl';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  if (bg) {
    ctx.fillStyle = bg;
    const r = h / 2;
    ctx.beginPath();
    ctx.moveTo(r, 0); ctx.lineTo(w - r, 0); ctx.arc(w - r, r, r, -Math.PI / 2, Math.PI / 2);
    ctx.lineTo(r, h); ctx.arc(r, r, r, Math.PI / 2, -Math.PI / 2); ctx.fill();
  }
  ctx.fillStyle = color;
  ctx.fillText(text, w / 2, h / 2 + 2);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
  spr.scale.set(w * scale, h * scale, 1);
  spr.renderOrder = 10;
  return spr;
}

export class World {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xb9dcf2);
    this.scene.fog = new THREE.Fog(0xcfe6f5, 9, 30);
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.05, 60);
    this.camera.position.set(...CAMS.hero.pos);
    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.target.set(...CAMS.hero.target);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.minDistance = 0.5;
    this.controls.maxDistance = 4.2;
    this.controls.maxPolarAngle = Math.PI * 0.53;
    this.controls.enablePan = false;

    this.stage = new THREE.Group();
    this.scene.add(this.stage);
    this.tweens = [];
    this.pickables = [];
    this.updaters = [];
    this.shakeToken = 0;
    this.raycaster = new THREE.Raycaster();
    this.time = 0;

    this.buildLights();
    this.buildSukkah();
    this.buildTable();
    this.buildAvatar();
    this.buildMarkers();
    this.buildHighlight();
    this.last = performance.now();
    this.shakeOff = new THREE.Vector3();
    this.rustle = 0;
    this.handBase = {
      r: new THREE.Vector3(0.27, 0.85, -0.02),
      l: new THREE.Vector3(-0.27, 0.85, -0.02),
      lean: 0,
    };
    this.followHands = true;
    this.resize();
    addEventListener('resize', () => this.resize());
    this.hoverCb = null;
    canvas.addEventListener('pointermove', (e) => this.onMove(e));
    canvas.addEventListener('pointerdown', (e) => { this.downAt = [e.clientX, e.clientY]; });
    canvas.addEventListener('pointerup', (e) => {
      if (!this.downAt) return;
      const d = Math.hypot(e.clientX - this.downAt[0], e.clientY - this.downAt[1]);
      this.downAt = null;
      if (d < 6 && this.pickCb) this.pickCb(this.pickAt(e.clientX, e.clientY), e);
    });
  }

  // ---------- סביבה ----------
  buildLights() {
    this.scene.add(new THREE.HemisphereLight(0xd6ecff, 0x9a8460, 0.85));
    const sun = new THREE.DirectionalLight(0xfff0d0, 2.3);
    sun.position.set(2.5, 7, 3.5);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera;
    sc.left = -3.6; sc.right = 3.6; sc.top = 3.6; sc.bottom = -3.6; sc.near = 1; sc.far = 16;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.02;
    this.scene.add(sun);
    this.sun = sun;
    const front = new THREE.DirectionalLight(0xfff4e0, 1.2);
    front.position.set(-1.5, 3, -4);
    this.scene.add(front);
    const fill = new THREE.PointLight(0xffe2b0, 8, 6, 2);
    fill.position.set(0, 2.2, 0.6);
    this.scene.add(fill);
  }

  buildSukkah() {
    const g = new THREE.Group();
    this.scene.add(g);
    // רצפה
    const floorTex = canvasTex(512, 512, (c, w, h) => {
      const r = rng(4);
      for (let i = 0; i < 8; i++) {
        const l = 42 + r() * 12;
        c.fillStyle = `hsl(30 ${38 + r() * 12}% ${l}%)`;
        c.fillRect(0, (i * h) / 8, w, h / 8);
        c.strokeStyle = 'rgba(60,35,15,.5)'; c.lineWidth = 2;
        c.strokeRect(0, (i * h) / 8, w, h / 8);
        for (let k = 0; k < 40; k++) {
          c.strokeStyle = `rgba(80,50,20,${0.05 + r() * 0.1})`;
          c.beginPath(); const y = (i * h) / 8 + r() * (h / 8);
          c.moveTo(r() * w, y); c.lineTo(r() * w, y + (r() - 0.5) * 4); c.stroke();
        }
      }
    });
    floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping;
    floorTex.repeat.set(2.5, 2.5);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(4.8, 5.6), new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.8 }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, 0, -0.1);
    floor.receiveShadow = true;
    g.add(floor);
    // דשא מחוץ לסוכה
    const grass = new THREE.Mesh(new THREE.CircleGeometry(40, 48), new THREE.MeshStandardMaterial({ color: 0x7ea25c, roughness: 1 }));
    grass.rotation.x = -Math.PI / 2;
    grass.position.y = -0.02;
    grass.receiveShadow = true;
    g.add(grass);
    // קירות בד
    const clothTex = canvasTex(256, 256, (c, w, h) => {
      c.fillStyle = '#f2ecdd'; c.fillRect(0, 0, w, h);
      const r = rng(9);
      for (let i = 0; i < w; i += 3) {
        c.fillStyle = `rgba(150,130,90,${0.03 + r() * 0.05})`;
        c.fillRect(i, 0, 1 + r() * 2, h);
      }
      for (let i = 0; i < h; i += 4) { c.fillStyle = 'rgba(120,100,70,.03)'; c.fillRect(0, i, w, 1); }
    });
    clothTex.wrapS = clothTex.wrapT = THREE.RepeatWrapping;
    clothTex.repeat.set(4, 2);
    const wallM = new THREE.MeshStandardMaterial({ map: clothTex, roughness: 0.95, side: THREE.DoubleSide });
    const H = 2.55, W = 4.8, D = 5.6;
    const back = new THREE.Mesh(new THREE.PlaneGeometry(W, H), wallM);
    back.position.set(0, H / 2, -D / 2 - 0.1);
    back.receiveShadow = true;
    g.add(back);
    for (const s of [-1, 1]) {
      const side = new THREE.Mesh(new THREE.PlaneGeometry(D, H), wallM);
      side.rotation.y = Math.PI / 2;
      side.position.set((s * W) / 2, H / 2, -0.1);
      side.receiveShadow = true;
      g.add(side);
    }
    // עמודי עץ
    const wood = mat(0x8a5a2b, { roughness: 0.85 });
    for (const x of [-W / 2, W / 2]) for (const z of [-D / 2 - 0.1, D / 2 - 0.1]) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.09, H + 0.1, 0.09), wood);
      p.position.set(x, H / 2, z); p.castShadow = true; g.add(p);
    }
    // גג — קנים ועלי דקל (סכך)
    const roof = new THREE.Group();
    this.roof = roof;
    g.add(roof);
    const poleGeo = new THREE.CylinderGeometry(0.02, 0.022, W + 0.3, 6);
    poleGeo.rotateZ(Math.PI / 2);
    const nPoles = 22;
    const poles = new THREE.InstancedMesh(poleGeo, mat(0xb08a4a, { roughness: 0.8 }), nPoles);
    const m4 = new THREE.Matrix4();
    for (let i = 0; i < nPoles; i++) {
      m4.makeTranslation(0, H + 0.03, -D / 2 + 0.05 + (i * (D - 0.1)) / (nPoles - 1) - 0.1);
      poles.setMatrixAt(i, m4);
    }
    poles.castShadow = true;
    roof.add(poles);
    const beamGeo = new THREE.BoxGeometry(0.06, 0.06, D + 0.2);
    for (const x of [-W / 2 + 0.05, 0, W / 2 - 0.05]) {
      const b = new THREE.Mesh(beamGeo, wood); b.position.set(x, H - 0.02, -0.1); b.castShadow = true; roof.add(b);
    }
    const frondGeo = leafGeo(1.5, 0.34, { fold: 0.15, segs: 10, shape: 'blade' });
    frondGeo.rotateX(-Math.PI / 2);
    const nF = 46;
    const fronds = new THREE.InstancedMesh(frondGeo, new THREE.MeshStandardMaterial({ color: 0x4a7a2e, side: THREE.DoubleSide, roughness: 0.8 }), nF);
    const r = rng(21);
    const q = new THREE.Quaternion(), e = new THREE.Euler(), sc = new THREE.Vector3(), p = new THREE.Vector3();
    for (let i = 0; i < nF; i++) {
      p.set((r() - 0.5) * (W + 0.4), H + 0.07 + r() * 0.05, (r() - 0.5) * (D + 0.2) - 0.1);
      e.set((r() - 0.5) * 0.1, r() * Math.PI * 2, (r() - 0.5) * 0.1);
      q.setFromEuler(e);
      sc.setScalar(0.9 + r() * 0.6);
      m4.compose(p, q, sc);
      fronds.setMatrixAt(i, m4);
    }
    fronds.castShadow = true;
    roof.add(fronds);
    // קישוטים תלויים
    const deco = new THREE.Group();
    g.add(deco);
    const cols = [0xc0392b, 0xe67e22, 0x8e44ad, 0xf1c40f, 0x27ae60];
    const dr = rng(33);
    for (let i = 0; i < 16; i++) {
      const x = (dr() - 0.5) * 3.8, z = -2.2 + dr() * 3.6, len = 0.25 + dr() * 0.45;
      const s = new THREE.Mesh(new THREE.CylinderGeometry(0.002, 0.002, len, 3), mat(0xeeeeee));
      s.position.set(x, H - len / 2, z);
      deco.add(s);
      const fruit = new THREE.Mesh(new THREE.SphereGeometry(0.05 + dr() * 0.03, 12, 10), mat(cols[i % 5], { roughness: 0.5 }));
      fruit.position.set(x, H - len - 0.04, z);
      fruit.castShadow = true;
      deco.add(fruit);
    }
    // עצים ברקע
    const tr = rng(77);
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * Math.PI * 2 + tr(), d = 8 + tr() * 8;
      const tree = new THREE.Group();
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 1.6, 6), mat(0x6b4a2b));
      trunk.position.y = 0.8;
      const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(1.3 + tr() * 0.7, 0), mat(0x4e8a3b, { flatShading: true }));
      crown.position.y = 2.4;
      tree.add(trunk, crown);
      tree.position.set(Math.cos(a) * d, 0, Math.sin(a) * d);
      this.scene.add(tree);
    }
  }

  buildTable() {
    const t = new THREE.Group();
    const wood = mat(0x7b4f26, { roughness: 0.75 });
    const top = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.04, 0.74), wood);
    top.position.y = 0.8;
    top.castShadow = true; top.receiveShadow = true;
    t.add(top);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const l = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.8, 0.06), wood);
      l.position.set(sx * 0.7, 0.4, sz * 0.32);
      l.castShadow = true;
      t.add(l);
    }
    const cloth = new THREE.Mesh(new THREE.BoxGeometry(1.56, 0.012, 0.8), mat(0xfafafa, { roughness: 0.95 }));
    cloth.position.y = 0.828;
    cloth.receiveShadow = true;
    t.add(cloth);
    const drape = new THREE.Mesh(new THREE.BoxGeometry(1.56, 0.16, 0.012), mat(0xfafafa, { roughness: 0.95 }));
    drape.position.set(0, 0.75, 0.4); t.add(drape);
    const drape2 = drape.clone(); drape2.position.z = -0.4; t.add(drape2);
    t.position.set(0, 0, -0.66);
    this.scene.add(t);
    this.table = t;
    this.tableTop = 0.834;
  }

  buildAvatar() {
    this.avatar = new Avatar();
    this.scene.add(this.avatar.root);
    this.avatar.update();
  }

  buildMarkers() {
    // סימני כיוון: חץ זוהר + תוויות רוחות
    this.markers = new THREE.Group();
    this.markers.visible = false;
    this.scene.add(this.markers);
    const arrowMat = new THREE.MeshBasicMaterial({ color: 0xffc83d, transparent: true, opacity: 0.9, depthTest: false });
    this.arrow = new THREE.Group();
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.4, 10), arrowMat);
    shaft.position.y = 0.2;
    const head = new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.14, 12), arrowMat);
    head.position.y = 0.47;
    this.arrow.add(shaft, head);
    this.arrow.renderOrder = 9;
    this.arrow.traverse((o) => { o.renderOrder = 9; });
    this.arrow.visible = false;
    this.scene.add(this.arrow);
    this.dirLabels = {};
    const place = {
      east: [0, 0.05, -1.55], south: [1.55, 0.05, 0], west: [0, 0.05, 1.55], north: [-1.55, 0.05, 0],
      up: [0, 1.95, -0.5], down: [0, 0.12, -0.5],
    };
    for (const k of Object.keys(DIRS)) {
      const txt = ['up', 'down'].includes(k) ? DIRS[k].name : `${DIRS[k].name} · ${DIRS[k].rel}`;
      const s = makeLabel(txt, { size: 54, scale: 0.0015 });
      s.position.set(...place[k]);
      this.markers.add(s);
      this.dirLabels[k] = s;
    }
    // טבעת מצפן על הרצפה
    const ring = new THREE.Mesh(new THREE.RingGeometry(1.42, 1.48, 64), new THREE.MeshBasicMaterial({ color: 0xffc83d, transparent: true, opacity: 0.6 }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.01;
    this.markers.add(ring);
    const cross = new THREE.Mesh(new THREE.PlaneGeometry(2.9, 0.02), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 }));
    cross.rotation.x = -Math.PI / 2; cross.position.y = 0.012;
    const cross2 = cross.clone(); cross2.rotation.z = Math.PI / 2;
    this.markers.add(cross, cross2);
    // חץ "מזרח" ראשי
    const eastTri = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.22, 3), new THREE.MeshBasicMaterial({ color: 0xffc83d }));
    eastTri.rotation.x = -Math.PI / 2; eastTri.position.set(0, 0.02, -1.3);
    eastTri.rotation.z = 0;
    this.markers.add(eastTri);
  }

  buildHighlight() {
    this.hl = new THREE.Box3Helper(new THREE.Box3(), 0xffc83d);
    this.hl.material.depthTest = false;
    this.hl.material.transparent = true;
    this.hl.renderOrder = 8;
    this.hl.visible = false;
    this.scene.add(this.hl);
    this.hlTarget = null;
  }

  // ---------- שליטה ----------
  resize() {
    const w = this.canvas.clientWidth || innerWidth, h = this.canvas.clientHeight || innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    // במסך צר — שדה ראייה רחב יותר
    this.camera.fov = w / h < 0.8 ? 60 : 45;
    this.applyView(w, h);
  }

  /** מזיז את מרכז הסצנה כדי שלא יוסתר על ידי לוח ההסבר */
  setViewShift(dx, dy) { this.shift = [dx, dy]; this.resize(); }
  applyView(w, h) {
    const [dx, dy] = this.shift || [0, 0];
    if (dx || dy) this.camera.setViewOffset(w, h, dx, dy, w, h);
    else this.camera.clearViewOffset();
    this.camera.updateProjectionMatrix();
  }

  setMarkers(on) { this.markers.visible = on; }
  setAvatarVisible(v) { this.avatar.root.visible = v; }

  highlight(obj) {
    this.hlTarget = obj;
    this.hl.visible = !!obj;
  }

  tween(dur, fn, ease = easeIO) {
    return new Promise((res) => {
      this.tweens.push({ t: 0, dur: Math.max(dur, 0.001), fn, ease, res });
    });
  }

  setCamera(name, dur = 1.1) {
    const c = typeof name === 'string' ? CAMS[name] : name;
    const p0 = this.camera.position.clone(), t0 = this.controls.target.clone();
    const p1 = new THREE.Vector3(...c.pos), t1 = new THREE.Vector3(...c.target);
    if (dur <= 0) { this.camera.position.copy(p1); this.controls.target.copy(t1); return Promise.resolve(); }
    this.camTween = true;
    return this.tween(dur, (k) => {
      this.camera.position.lerpVectors(p0, p1, k);
      this.controls.target.lerpVectors(t0, t1, k);
    }).then(() => { this.camTween = false; });
  }

  clearStage() {
    this.detachItems();
    while (this.stage.children.length) {
      const c = this.stage.children.pop();
      c.traverse?.((o) => { o.geometry?.dispose?.(); });
    }
    this.pickables = [];
    this.updaters = [];
    this.pickCb = null;
    this.hoverCb = null;
    this.highlight(null);
  }

  detachItems() {
    for (const s of ['r', 'l']) {
      const a = this.avatar.arms[s].anchor;
      [...a.children].forEach((c) => a.remove(c));
    }
    this.held = null;
  }

  /** רושם אובייקטים לבחירה בעכבר. האובייקט חייב לשאת userData.pick */
  addPickable(obj) { this.pickables.push(obj); }

  pickAt(cx, cy) {
    const rect = this.canvas.getBoundingClientRect();
    const ndc = new THREE.Vector2(((cx - rect.left) / rect.width) * 2 - 1, -((cy - rect.top) / rect.height) * 2 + 1);
    this.raycaster.setFromCamera(ndc, this.camera);
    const hits = this.raycaster.intersectObjects(this.pickables, true);
    const rootOf = (obj) => {
      let o = obj;
      while (o) { if (o.userData && o.userData.pick) return o; o = o.parent; }
      return null;
    };
    for (const h of hits) {
      const root = rootOf(h.object);
      if (!root) continue;
      // עדיפות לחלקים מסומנים (פיטם/עוקץ) גם אם הם מוסתרים מאחורי גוף הפרי
      const special = hits.find((x) => rootOf(x.object) === root && ['pitam', 'ukatz'].includes(x.object.userData.part));
      const hit = special || h;
      return { root, pick: root.userData.pick, part: hit.object.userData.part, point: hit.point };
    }
    return null;
  }

  onMove(e) {
    if (!this.pickables.length) { this.canvas.style.cursor = ''; return; }
    const p = this.pickAt(e.clientX, e.clientY);
    this.canvas.style.cursor = p ? 'pointer' : '';
    if (this.hoverCb) this.hoverCb(p);
  }

  // ---------- אחיזה ----------
  /** מצמיד את האגד ליד ימין ואת האתרוג ליד שמאל, ומשאיר במקום (משמר טרנספורם עולמי). */
  attach(obj, side) {
    const a = this.avatar.arms[side === 'r' ? 'r' : 'l'].anchor;
    a.attach(obj);
  }

  /** ממקם את האגד בתוך היד: בסיסו מתחת למרכז האגרוף */
  settleInHand(obj, side, dur = 0.5) {
    const p0 = obj.position.clone(), q0 = obj.quaternion.clone();
    const target = side === 'r' ? new THREE.Vector3(0, -0.075, 0) : new THREE.Vector3(0, 0, 0);
    const q1 = new THREE.Quaternion();
    if (side === 'l') q1.setFromEuler(new THREE.Euler(0, 0, this.etrogInverted ? Math.PI : 0));
    return this.tween(dur, (k) => {
      obj.position.lerpVectors(p0, target, k);
      obj.quaternion.slerpQuaternions(q0, q1, k);
    });
  }

  setEtrogInverted(v) { this.etrogInverted = v; }

  /** הפיכת האתרוג ביד שמאל: מסובב סביב מרכזו */
  async flipEtrog(toUp, dur = 0.7) {
    const e = this.held?.etrog;
    if (!e) return;
    const from = e.rotation.z, to = toUp ? 0 : Math.PI;
    await this.tween(dur, (k) => { e.rotation.z = from + (to - from) * k; e.rotation.x = Math.sin(k * Math.PI) * 0.6; });
    e.rotation.x = 0;
    this.etrogInverted = !toUp;
  }

  // ---------- תנוחות ----------
  async handsTo({ r, l, lean, gripR, gripL }, dur = 0.9) {
    const b = this.handBase;
    const r0 = b.r.clone(), l0 = b.l.clone(), n0 = b.lean;
    const g = this.avatar.arms;
    const gr0 = g.r.grip, gl0 = g.l.grip;
    await this.tween(dur, (k) => {
      if (r) b.r.lerpVectors(r0, new THREE.Vector3(...r), k);
      if (l) b.l.lerpVectors(l0, new THREE.Vector3(...l), k);
      if (lean !== undefined) b.lean = n0 + (lean - n0) * k;
      if (gripR !== undefined) g.r.grip = gr0 + (gripR - gr0) * k;
      if (gripL !== undefined) g.l.grip = gl0 + (gripL - gl0) * k;
    });
  }

  POSE = {
    rest:  { r: [0.27, 0.85, -0.02], l: [-0.27, 0.85, -0.02], lean: 0, gripR: 0.7, gripL: 0.7 },
    carry: { r: [0.11, 1.14, -0.4], l: [0.04, 1.2, -0.4], lean: 0.06, gripR: 1.05, gripL: 1.45 },
  };

  // ---------- נענועים ----------
  /** ביצוע נענוע בכיוון אחד: reps פעמים הלוך־וחזור */
  shake(dirKey, { reps = 3, dur = 1.6, amp = 0.3, rustle = false } = {}) {
    const v = DIRS[dirKey].v.clone();
    const amps = { east: 0.3, south: 0.3, west: 0.3, north: 0.3, up: 0.3, down: 0.3 };
    const A = (amp ?? 0.3) * (amps[dirKey] / 0.3);
    this.setArrow(dirKey);
    const token = ++this.shakeToken;
    return this.tween(dur, (k) => {
      if (token !== this.shakeToken) return;
      const s = Math.pow(Math.sin(Math.PI * reps * k), 2);
      if (dirKey === 'west') this.shakeOff.set(0.2, 0.12, 0.5).multiplyScalar(s); // אחורה — מעל הכתף
      else this.shakeOff.copy(v).multiplyScalar(A * s);
      this.rustle = rustle ? s : 0;
    }, (t) => t).then(() => {
      if (token !== this.shakeToken) return;
      this.shakeOff.set(0, 0, 0);
      this.rustle = 0;
      this.arrow.visible = false;
    });
  }

  async shakeSequence(dirs, opts = {}) {
    this.stopShake = false;
    for (const d of dirs) {
      if (this.stopShake) break;
      await this.shake(d, opts);
    }
  }

  setArrow(dirKey) {
    const v = DIRS[dirKey].v;
    this.arrow.visible = this.markers.visible;
    const base = new THREE.Vector3(0.06, 1.2, -0.4);
    this.arrow.position.copy(base).addScaledVector(v, 0.1);
    this.arrow.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), v);
    for (const k of Object.keys(this.dirLabels)) this.dirLabels[k].material.opacity = k === dirKey ? 1 : 0.45;
  }

  // ---------- לולאה ----------
  start() {
    const loop = () => {
      requestAnimationFrame(loop);
      const now = performance.now(); const dt = Math.min((now - this.last) / 1000, 0.05); this.last = now;
      this.tick(dt);
    };
    loop();
  }

  tick(dt) {
    this.update(dt);
    this.render();
  }

  /** קידום זמן מהיר לצורכי בדיקה (ללא רינדור) */
  ff(seconds, step = 0.05) {
    for (let t = 0; t < seconds; t += step) this.update(step);
    this.render();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  update(dt) {
    this.time += dt;
    // טוויינים
    for (let i = this.tweens.length - 1; i >= 0; i--) {
      const tw = this.tweens[i];
      tw.t += dt;
      const k = Math.min(tw.t / tw.dur, 1);
      tw.fn(tw.ease(k));
      if (k >= 1) { this.tweens.splice(i, 1); tw.res(); }
    }
    for (const u of this.updaters) u(dt, this.time);
    // ידיים
    const av = this.avatar;
    if (av.root.visible) {
      av.lean = this.handBase.lean;
      av.setHand('r', this.handBase.r.clone().add(this.shakeOff));
      av.setHand('l', this.handBase.l.clone().add(this.shakeOff));
      av.update();
      // רשרוש עלי הלולב (כִּסְכּוּס)
      const b = this.held?.bundle;
      if (b) {
        b.rotation.z = Math.sin(this.time * 70) * 0.05 * this.rustle;
        b.rotation.x = Math.cos(this.time * 61) * 0.03 * this.rustle;
      }
    }
    // הבהוב מסגרת
    if (this.hlTarget) {
      this.hl.box.setFromObject(this.hlTarget);
      this.hl.box.expandByScalar(0.012);
      this.hl.material.opacity = 0.55 + 0.45 * Math.sin(this.time * 6);
    }
    this.roof.visible = this.camera.position.y < 2.4;
    this.controls.update();
  }
}
