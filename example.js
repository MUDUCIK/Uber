const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 10000,
    deviceScaleFactor: 1,
  });
  await page.goto('https://upbeat-torvalds-1387a7.netlify.app/');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();