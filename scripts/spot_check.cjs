const { chromium } = require("playwright");
const fs = require("node:fs");
const path = require("node:path");

const BASE_URL = "http://127.0.0.1:5173";
const ARTIFACTS = path.resolve("test-artifacts");
const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

(async () => {
  fs.mkdirSync(ARTIFACTS, { recursive: true });
  const browser = await chromium.launch({
    headless: true,
    ...(fs.existsSync(EDGE_PATH) ? { executablePath: EDGE_PATH } : {})
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  await page.goto(BASE_URL, { waitUntil: "networkidle" });

  for (const id of ["home", "about", "projects", "contact"]) {
    await page.evaluate((sectionId) => {
      const element = document.getElementById(sectionId);
      const top = element ? element.getBoundingClientRect().top + window.scrollY - 120 : 0;
      window.scrollTo(0, Math.max(0, top));
    }, id);
    await page.waitForTimeout(350);
    await page.screenshot({ path: path.join(ARTIFACTS, `spot-${id}.png`), fullPage: false });
  }

  await browser.close();
  console.log("Spot screenshots captured.");
})();
