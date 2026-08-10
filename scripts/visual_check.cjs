const { chromium } = require("playwright");
const fs = require("node:fs");
const path = require("node:path");

const BASE_URL = "http://127.0.0.1:5173";
const ARTIFACTS = path.resolve("test-artifacts");
const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const VIEWPORTS = [
  ["desktop", 1440, 1000],
  ["tablet", 1024, 900],
  ["mobile", 390, 844]
];

const hasHorizontalOverflow = (page) =>
  page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);

const revealPage = async (page) => {
  await page.evaluate(async () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const step = Math.max(240, Math.floor(window.innerHeight * 0.72));
    for (let y = 0; y <= max; y += step) {
      window.scrollTo(0, y);
      await new Promise((resolve) => window.setTimeout(resolve, 70));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(180);
};

(async () => {
  fs.mkdirSync(ARTIFACTS, { recursive: true });
  const failures = [];
  const consoleMessages = [];
  const browser = await chromium.launch({
    headless: true,
    ...(fs.existsSync(EDGE_PATH) ? { executablePath: EDGE_PATH } : {})
  });

  for (const [name, width, height] of VIEWPORTS) {
    const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });

    page.on("console", (message) => {
      if (message.type() === "error" || message.type() === "warning") {
        consoleMessages.push(`${name}: ${message.type()}: ${message.text()}`);
      }
    });

    await page.goto(BASE_URL, { waitUntil: "networkidle" });
    if (!(await page.title()).includes("Santiago Valenti")) {
      failures.push(`${name}: home title did not include Santiago Valenti`);
    }
    if ((await page.locator("#featured-projects .project-card").count()) !== 3) {
      failures.push(`${name}: expected 3 featured project cards`);
    }
    if (await hasHorizontalOverflow(page)) {
      failures.push(`${name}: home has horizontal overflow`);
    }
    await revealPage(page);
    await page.locator("#about").scrollIntoViewIfNeeded();
    await page.waitForTimeout(180);
    const aboutHasVisibleReveal = await page.evaluate(() =>
      Array.from(document.querySelectorAll("#about .reveal")).some((element) => element.classList.contains("is-visible"))
    );
    if (!aboutHasVisibleReveal) {
      failures.push(`${name}: about reveal did not become visible after scroll`);
    }
    await page.screenshot({ path: path.join(ARTIFACTS, `about-${name}.png`), fullPage: false });
    await page.locator("#projects").scrollIntoViewIfNeeded();
    await page.waitForTimeout(180);
    await page.screenshot({ path: path.join(ARTIFACTS, `selected-projects-${name}.png`), fullPage: false });
    for (const sectionId of ["education", "technologies", "contact"]) {
      await page.locator(`#${sectionId}`).scrollIntoViewIfNeeded();
      await page.waitForTimeout(180);
      const sectionHasVisibleReveal = await page.evaluate((id) =>
        Array.from(document.querySelectorAll(`#${id} .reveal`)).some((element) => element.classList.contains("is-visible")),
      sectionId);
      if (!sectionHasVisibleReveal) {
        failures.push(`${name}: ${sectionId} reveal did not become visible after scroll`);
      }
      await page.screenshot({ path: path.join(ARTIFACTS, `${sectionId}-${name}.png`), fullPage: false });
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: path.join(ARTIFACTS, `home-${name}.png`), fullPage: true });

    await page.goto(`${BASE_URL}/proyectos.html`, { waitUntil: "networkidle" });
    if ((await page.locator("#all-projects .project-card").count()) < 4) {
      failures.push(`${name}: expected all project cards on projects page`);
    }
    const filterButtons = page.locator("#project-filters button");
    if ((await filterButtons.count()) < 2) {
      failures.push(`${name}: expected project filter buttons`);
    } else {
      await filterButtons.nth(1).click();
      await page.waitForTimeout(120);
    }
    if (await hasHorizontalOverflow(page)) {
      failures.push(`${name}: projects page has horizontal overflow`);
    }
    await revealPage(page);
    await page.locator("#all-projects").scrollIntoViewIfNeeded();
    await page.waitForTimeout(180);
    await page.screenshot({ path: path.join(ARTIFACTS, `projects-grid-${name}.png`), fullPage: false });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: path.join(ARTIFACTS, `projects-${name}.png`), fullPage: true });

    await page.goto(`${BASE_URL}/proyectos/sonrie-plus.html`, { waitUntil: "networkidle" });
    const caseTitle = await page.locator("#case-study-root h1").first().innerText();
    if (!caseTitle.includes("SONRIE+")) {
      failures.push(`${name}: case study did not render SONRIE+`);
    }
    if (await hasHorizontalOverflow(page)) {
      failures.push(`${name}: case study has horizontal overflow`);
    }
    await revealPage(page);
    await page.locator(".case-detail-grid").scrollIntoViewIfNeeded();
    await page.waitForTimeout(180);
    await page.screenshot({ path: path.join(ARTIFACTS, `case-details-${name}.png`), fullPage: false });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: path.join(ARTIFACTS, `case-sonrie-${name}.png`), fullPage: true });

    await page.close();
  }

  await browser.close();

  if (consoleMessages.length > 0) {
    failures.push(...consoleMessages);
  }

  if (failures.length > 0) {
    console.error(failures.join("\n"));
    process.exit(1);
  }

  console.log("Visual check passed for desktop, tablet, and mobile.");
})();
