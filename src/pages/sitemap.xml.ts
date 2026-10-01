import type { APIRoute } from "astro";
import { machines } from "../data/machines";
import { fruitSolutions } from "../data/fruitSolutions";

const staticRoutes = ["", "maquinas/", "plan-canje/", "nosotros/", "contacto/"];

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL("https://www.dyfma.ar");
  const routes = [
    ...staticRoutes,
    ...fruitSolutions.map((solution) => `${solution.slug}/`),
    ...machines.map((machine) => `maquinas/${machine.id}/`),
  ];
  const urls = routes
    .map((route) => `  <url><loc>${new URL(`/${route}`, origin).href}</loc></url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
