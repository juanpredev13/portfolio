const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Sites with animations that need longer delay
const projects = [
  { name: 'dieresis', url: 'https://dieresis.io/' },
  { name: 'hoclatam', url: 'https://www.hoclatam.com/' },
];

const OUTPUT_DIR = path.join(__dirname, '../public/projects');
const ANIMATION_DELAY = 10000; // 10 seconds

const VIEWPORTS = {
  desktop: { width: 1920, height: 1080 },
  mobile: { width: 390, height: 844 },
};

async function takeScreenshots() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const project of projects) {
    console.log(`\n📸 Processing: ${project.name} (waiting ${ANIMATION_DELAY / 1000}s for animations)`);

    for (const [device, viewport] of Object.entries(VIEWPORTS)) {
      const page = await browser.newPage();

      await page.setViewport(viewport);

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

        // Wait for animations
        await page.evaluate((ms) => new Promise(resolve => setTimeout(resolve, ms)), ANIMATION_DELAY);

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
  console.log('\n🎉 Done!');
}

takeScreenshots().catch(console.error);
