const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const projects = [
  { name: 'ticobot', url: 'https://ticobot.xyz/' },
  { name: 'cofiblocks', url: 'https://www.cofiblocks.com/' },
  { name: 'pickdawgz', url: 'https://pickdawgz.com/' },
  { name: 'abcislands', url: 'https://abcislands.ag/' },
  { name: 'bhr', url: 'https://bhr.ag/' },
  { name: 'looselines', url: 'https://looselines.ag/casino/' },
  { name: 'jazzsports', url: 'https://jazzsports.ag/' },
  { name: 'moosecafe', url: 'https://moosecafe.com/' },
  { name: 'electroautoscr', url: 'https://electroautoscr.com/' },
  { name: 'caia', url: 'https://caia.cr/' },
  { name: 'espavel', url: 'https://espavel.cr/' },
  { name: '506factoreo', url: 'https://506factoreo.com/' },
  { name: 'undecimoentremets', url: 'https://undecimoentremets.com/' },
  { name: 'avantier', url: 'https://avantier.pa/' },
  { name: 'kbeautystop', url: 'https://kbeautystop.com/' },
  { name: 'genderandenvironment', url: 'https://genderandenvironment.org/' },
];

const OUTPUT_DIR = path.join(__dirname, '../public/projects');

const VIEWPORTS = {
  desktop: { width: 1920, height: 1080 },
  mobile: { width: 390, height: 844 }, // iPhone 14 Pro
};

async function takeScreenshots() {
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const project of projects) {
    console.log(`\n📸 Processing: ${project.name}`);

    for (const [device, viewport] of Object.entries(VIEWPORTS)) {
      const page = await browser.newPage();

      await page.setViewport(viewport);

      // Set mobile user agent for mobile viewport
      if (device === 'mobile') {
        await page.setUserAgent(
          'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'
        );
      }

      try {
        console.log(`  → ${device} (${viewport.width}x${viewport.height})...`);

        await page.goto(project.url, {
          waitUntil: 'networkidle2',
          timeout: 30000,
        });

        // Wait for animations/lazy loading (custom delay for animated sites)
        const waitTime = project.delay || 2000;
        await page.evaluate((ms) => new Promise(resolve => setTimeout(resolve, ms)), waitTime);

        const filename = device === 'desktop'
          ? `${project.name}.webp`
          : `${project.name}-mobile.webp`;

        await page.screenshot({
          path: path.join(OUTPUT_DIR, filename),
          type: 'webp',
          quality: 85,
        });

        console.log(`  ✅ Saved: ${filename}`);
      } catch (error) {
        console.error(`  ❌ Failed: ${project.name} (${device}) - ${error.message}`);
      }

      await page.close();
    }
  }

  await browser.close();
  console.log('\n🎉 Done! Screenshots saved to public/projects/');
}

takeScreenshots().catch(console.error);
