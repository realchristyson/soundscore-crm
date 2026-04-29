// Headlessly screenshot the three cover routes to PNG.
const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const OUT_DIR = path.resolve(__dirname, "../public/cover-renders");
fs.mkdirSync(OUT_DIR, { recursive: true });

const TARGETS = [
  { id: "a", url: "http://localhost:3000/covers/a" },
  { id: "b", url: "http://localhost:3000/covers/b" },
  { id: "c", url: "http://localhost:3000/covers/c" },
];

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
    ],
  });

  // 2:3 ebook ratio at 1200×1800 — Claude can ingest this comfortably
  const W = 1200;
  const H = 1800;

  for (const { id, url } of TARGETS) {
    const page = await browser.newPage();
    await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });

    // Wait for fonts to load
    await page.evaluate(async () => {
      if (document.fonts && document.fonts.ready) await document.fonts.ready;
    });
    await new Promise((r) => setTimeout(r, 800));

    // Find the cover element (the rounded aspect-[2/3] container)
    const handle = await page.$('div[class*="aspect-[2/3]"]');
    if (!handle) throw new Error(`Cover element not found on ${url}`);

    // Force the cover to fill viewport precisely so the screenshot is the cover only
    await page.evaluate(() => {
      const el = document.querySelector('div[class*="aspect-[2/3]"]');
      if (!el) return;
      el.style.width = "1200px";
      el.style.height = "1800px";
      el.style.aspectRatio = "auto";
      el.style.position = "fixed";
      el.style.top = "0";
      el.style.left = "0";
      el.style.borderRadius = "0";
      el.style.boxShadow = "none";
      document.documentElement.style.overflow = "hidden";
      document.body.style.margin = "0";
      document.body.style.padding = "0";
      document.body.style.background = "#000";
    });
    await new Promise((r) => setTimeout(r, 400));

    const out = path.join(OUT_DIR, `cover-${id}.png`);
    await page.screenshot({
      path: out,
      clip: { x: 0, y: 0, width: W, height: H },
    });
    console.log(`✓ wrote ${out}`);
    await page.close();
  }

  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
