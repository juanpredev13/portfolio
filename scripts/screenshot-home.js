const puppeteer = require('puppeteer');
const path = require('path');

async function screenshotHome() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // Desktop viewport
  await page.setViewport({ width: 1920, height: 1080 });

  try {
    console.log('📸 Capturing localhost:3000 full page...');

    await page.goto('http://localhost:3000/', {
      waitUntil: 'networkidle2',
      timeout: 30000,
    });

    // Wait for animations
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));

    // Full page screenshot
    await page.screenshot({
      path: path.join(__dirname, '../public/home-screenshot.jpg'),
      type: 'jpeg',
      quality: 90,
      fullPage: true,
    });

    console.log('✅ Saved: public/home-screenshot.jpg');

  } catch (error) {
    console.error('❌ Failed:', error.message);
  }

  await browser.close();
  console.log('🎉 Done!');
}

screenshotHome().catch(console.error);
