import { readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDir = fileURLToPath(new URL("../dist/", import.meta.url));
const base = "/dyfmaweb/";
const textExtensions = new Set([".html", ".js", ".css"]);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((entry) => {
        const path = join(directory, entry.name);
        return entry.isDirectory() ? walk(path) : path;
      }),
    )
  ).flat();
}

for (const file of await walk(outputDir)) {
  if (!textExtensions.has(extname(file))) continue;

  let content = await readFile(file, "utf8");

  // Public assets and internal links use root paths in the Hostinger build.
  // GitHub project pages live below /dyfmaweb/, so prefix only quoted root paths.
  content = content
    .replaceAll('"/', `"${base}`)
    .replaceAll("'/", `'${base}`)
    .replaceAll("url(/", `url(${base}`)
    .replaceAll(
      'content="index, follow, max-image-preview:large"',
      'content="noindex, nofollow"',
    );

  await writeFile(file, content);
}

await writeFile(
  join(outputDir, "robots.txt"),
  "User-agent: *\nDisallow: /\n",
  "utf8",
);

console.log(`GitHub Pages preview prepared for ${base}`);
