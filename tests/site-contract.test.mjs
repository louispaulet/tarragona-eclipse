import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

const projectUrl = new URL("../", import.meta.url);

async function projectFile(path) {
  return readFile(new URL(path, projectUrl));
}

async function projectText(path) {
  return projectFile(path).then((contents) => contents.toString("utf8"));
}

async function pathExists(path) {
  try {
    await access(new URL(path, projectUrl));
    return true;
  } catch {
    return false;
  }
}

async function loadTypeScriptModule(path) {
  const source = await projectText(path);
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
    fileName: path,
  }).outputText;
  const encoded = Buffer.from(output).toString("base64");
  return import(`data:text/javascript;base64,${encoded}`);
}

function shapeOf(value) {
  if (Array.isArray(value)) {
    return { kind: "array", length: value.length, item: shapeOf(value[0]) };
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([key, child]) => [key, shapeOf(child)]),
    );
  }
  return typeof value;
}

test("static export contains the production metadata contract", async () => {
  const html = await projectText("out/index.html");
  assert.match(html, /<html lang="es">/i);
  assert.match(html, /<title>Eclipse Andalucía 2027<\/title>/i);
  assert.match(
    html,
    /<meta name="description" content="Guía para vivir el eclipse total de Sol del 2 de agosto de 2027 en el sur de España\."\s*\/?>/i,
  );
  assert.match(
    html,
    /<meta property="og:image" content="https:\/\/eclipse-2026\.thefrenchartist\.dev\/og\.png"\s*\/?>/i,
  );
  assert.doesNotMatch(html, /codex-preview/i);
});

test("2027 facts and every localized content structure stay intact", async () => {
  const { defaultLocale2027, translations2027 } = await loadTypeScriptModule(
    "app/locales/eclipse-2027.ts",
  );

  assert.equal(defaultLocale2027, "es");
  assert.deepEqual(Object.keys(translations2027).sort(), ["ca", "en", "es", "fr"]);

  const spanishShape = shapeOf(translations2027.es);
  for (const [locale, copy] of Object.entries(translations2027)) {
    assert.deepEqual(shapeOf(copy), spanishShape, `${locale} content structure changed`);
    assert.match(copy.meta.title, /2027/);
    assert.equal(copy.hero.date, "02 · 08 · 27");
    assert.equal(copy.timeline.events.length, 4);
    assert.equal(copy.viewing.cards.length, 3);
    assert.equal(copy.about.articles.length, 3);
    assert.ok(copy.nav.archive, `${locale} archive navigation is missing`);
    assert.ok(copy.footer.archive, `${locale} archive footer link is missing`);
  }

  const es = translations2027.es;
  assert.equal(es.timeline.totalBadge, "4 M 48 S");
  assert.deepEqual(
    es.timeline.events.map(({ title }) => title),
    [
      "Cádiz · 2 min 54 s",
      "Ceuta · 4 min 48 s",
      "Málaga · 1 min 48 s",
      "Melilla · 4 min 34 s",
    ],
  );
  for (const place of ["Cádiz", "Málaga", "Granada", "Almería"]) {
    assert.match(es.hero.intro, new RegExp(place));
  }
});

test("current and archive routes remain wired to their correct content", async () => {
  const page = await projectText("app/page.tsx");
  for (const route of ["/", "/about", "/archive/2026", "/archive/2026/about"]) {
    const escaped = route.replaceAll("/", "\\/");
    assert.match(page, new RegExp(`path=\\"${escaped}\\"`), `${route} route is missing`);
  }
  assert.match(page, /translations2027\[locale\]/);
  assert.match(page, /archiveTranslations\[locale\]/);
  assert.match(page, /2027-08-02T10:45:00\+02:00/);
  assert.match(page, /eclipse-total-sol-de-2-de-agosto-2027\.html/);
});

test("share image and custom domain match the published metadata", async () => {
  const png = await projectFile("public/og.png");
  assert.equal(png.subarray(1, 4).toString("ascii"), "PNG");
  assert.equal(png.readUInt32BE(16), 1733);
  assert.equal(png.readUInt32BE(20), 908);
  assert.equal((await projectText("public/CNAME")).trim(), "eclipse-2026.thefrenchartist.dev");
});

test("the repository has no OpenAI Sites or Cloudflare hosting path", async () => {
  for (const path of [
    ".openai/hosting.json",
    "vite.config.ts",
    "worker/index.ts",
    "build/sites-vite-plugin.ts",
    "app/chatgpt-auth.ts",
    "drizzle.config.ts",
  ]) {
    assert.equal(await pathExists(path), false, `${path} must stay removed`);
  }

  const packageJson = JSON.parse(await projectText("package.json"));
  const packages = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  };
  for (const dependency of [
    "@cloudflare/vite-plugin",
    "drizzle-kit",
    "drizzle-orm",
    "vinext",
    "vite",
    "wrangler",
  ]) {
    assert.equal(packages[dependency], undefined, `${dependency} must stay removed`);
  }
});
