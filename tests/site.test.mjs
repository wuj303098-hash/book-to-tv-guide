import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const siteUrl = "https://book-to-tv-guide.vercel.app";

const pages = [
  { slug: "", title: "Book to TV Guide", minWords: 180 },
  { slug: "every-year-after", title: "Every Year After Guide", minWords: 550 },
  { slug: "every-year-after-season-2", title: "Every Year After Season 2", minWords: 650 },
  { slug: "every-year-after-ending-explained", title: "Every Year After Ending Explained", minWords: 700 },
  { slug: "does-charlie-die-in-every-year-after", title: "Does Charlie Die in Every Year After", minWords: 600 },
  { slug: "what-did-percy-do-in-every-year-after", title: "What Did Percy Do in Every Year After", minWords: 600 },
  { slug: "every-year-after-cast", title: "Every Year After Cast", minWords: 650 },
  { slug: "every-year-after-vs-every-summer-after", title: "Every Year After vs Every Summer After", minWords: 650 },
  { slug: "every-year-after-episodes", title: "Every Year After Episodes", minWords: 650 },
  { slug: "about", title: "About Book to TV Guide", minWords: 140 },
  { slug: "privacy", title: "Privacy Policy", minWords: 140 },
  { slug: "contact", title: "Contact", minWords: 100 }
];

function fileFor(slug) {
  return slug ? join(root, slug, "index.html") : join(root, "index.html");
}

function textOf(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function wordCount(html) {
  return textOf(html).split(/\s+/).filter(Boolean).length;
}

for (const page of pages) {
  const path = fileFor(page.slug);
  assert.equal(existsSync(path), true, `${page.slug || "home"} page exists`);
  const html = readFileSync(path, "utf8");
  const canonical = `${siteUrl}${page.slug ? `/${page.slug}/` : "/"}`;

  assert.match(html, /<!doctype html>/i, `${page.slug || "home"} has doctype`);
  assert.match(html, new RegExp(`<title>[^<]*${page.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i"), `${page.slug || "home"} title targets query`);
  assert.match(html, /<meta name="description" content=".{90,220}">/i, `${page.slug || "home"} has useful meta description`);
  assert.ok(html.includes(`<link rel="canonical" href="${canonical}">`), `${page.slug || "home"} canonical is correct`);
  assert.match(html, /application\/ld\+json/i, `${page.slug || "home"} has structured data`);
  assert.ok(wordCount(html) >= page.minWords, `${page.slug || "home"} has enough visible text`);
  assert.doesNotMatch(html, /TBD|TODO|lorem ipsum|coming soon/i, `${page.slug || "home"} has no placeholder copy`);
  assert.doesNotMatch(textOf(html), /[\u2013\u2014]/, `${page.slug || "home"} avoids en and em dashes`);
}

const topicHtml = readFileSync(fileFor("every-year-after"), "utf8");
for (const page of pages.filter((p) => p.slug.startsWith("every-year-after") || p.slug.startsWith("does-") || p.slug.startsWith("what-"))) {
  assert.ok(topicHtml.includes(`href="/${page.slug}/"`), `topic hub links to ${page.slug}`);
}

const sitemapPath = join(root, "sitemap.xml");
assert.equal(existsSync(sitemapPath), true, "sitemap exists");
const sitemap = readFileSync(sitemapPath, "utf8");
for (const page of pages) {
  assert.ok(sitemap.includes(`${siteUrl}${page.slug ? `/${page.slug}/` : "/"}`), `sitemap includes ${page.slug || "home"}`);
}

const robotsPath = join(root, "robots.txt");
assert.equal(existsSync(robotsPath), true, "robots exists");
const robots = readFileSync(robotsPath, "utf8");
assert.ok(robots.includes(`${siteUrl}/sitemap.xml`), "robots points to sitemap");

const cssPath = join(root, "styles.css");
assert.equal(existsSync(cssPath), true, "stylesheet exists");
const css = readFileSync(cssPath, "utf8");
assert.doesNotMatch(css, /#[0-9a-f]{3,8}.*#[0-9a-f]{3,8}.*#[0-9a-f]{3,8}.*#[0-9a-f]{3,8}/i, "CSS avoids noisy one-note color dumping");

console.log(`Verified ${pages.length} pages, sitemap, robots, and SEO structure.`);
