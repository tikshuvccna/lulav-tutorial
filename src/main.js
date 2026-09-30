import { World } from './world.js';
import { Game } from './game.js';
import { buildChapters } from './chapters.js';

function boot() {
  const canvas = document.getElementById('c');
  let world;
  try {
    world = new World(canvas);
  } catch (e) {
    document.body.insertAdjacentHTML('beforeend', '<div class="fatal">הדפדפן שלך אינו תומך ב‑WebGL, ולכן לא ניתן להציג את המשחק התלת־ממדי.</div>');
    console.error(e);
    return;
  }
  const game = new Game(world);
  game.chapters = buildChapters();
  const fit = () => {
    const panel = document.getElementById('panel');
    const r = panel.getBoundingClientRect();
    const wide = innerWidth > 820;
    world.setViewShift(wide ? Math.round(r.width / 2 + 8) : 0, wide ? 0 : Math.round(r.height / 2));
  };
  addEventListener('resize', fit);
  fit();
  world.start();
  world.setCamera('hero', 0);
  game.updateChrome();
  game.showMenu();
  window.__game = game; // לצורכי בדיקה
  window.__world = world;
}
boot();
