const { chromium } = require("playwright");
const fs = require("node:fs");

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const BASE_URL = "http://127.0.0.1:5173";

(async () => {
  const failures = [];
  const browser = await chromium.launch({
    headless: true,
    ...(fs.existsSync(EDGE_PATH) ? { executablePath: EDGE_PATH } : {})
  });
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 }, deviceScaleFactor: 1 });

  await page.goto(`${BASE_URL}/proyectos.html`, { waitUntil: "networkidle" });
  const projectCount = await page.locator("#all-projects .project-card").count();
  if (projectCount !== 5) failures.push(`Expected 5 projects, got ${projectCount}`);

  for (const [slug, title] of [
    ["electrodentalnea", "ElectrodentalNea"],
    ["denttech", "DentTech"]
  ]) {
    await page.goto(`${BASE_URL}/proyectos/${slug}.html`, { waitUntil: "networkidle" });
    const renderedTitle = await page.locator("#case-study-root h1").first().innerText();
    if (!renderedTitle.includes(title)) failures.push(`${slug} did not render ${title}`);
    const screenshotCount = await page.locator(".gallery-item img").count();
    if (screenshotCount < 1) failures.push(`${slug} did not render gallery screenshots`);
  }

  await browser.close();

  if (failures.length > 0) {
    console.error(failures.join("\n"));
    process.exit(1);
  }

  console.log("New project routes passed.");
})();
