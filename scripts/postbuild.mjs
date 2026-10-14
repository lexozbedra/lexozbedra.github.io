// GitHub Pages отдаёт только статику, а у нас React Router.
// Чтобы /about/ и /cv/ открывались напрямую (с кодом 200, а не 404),
// копируем собранный index.html в папку каждого маршрута.
// 404.html показывается для любых неизвестных адресов, дальше всё решает роутер.
//
// ВАЖНО: список маршрутов должен совпадать с <Route> в src/App.tsx.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
const routes = ["about", "cv"];

for (const route of routes) {
  mkdirSync(join(dist, route), { recursive: true });
  copyFileSync(join(dist, "index.html"), join(dist, route, "index.html"));
}
copyFileSync(join(dist, "index.html"), join(dist, "404.html"));

console.log(`postbuild: copied index.html to ${routes.map((r) => `/${r}/`).join(", ")} and 404.html`);
