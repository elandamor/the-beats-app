// tslint:disable:no-magic-numbers
const puppeteer = require('puppeteer');

let browser: any;
let page: any;

beforeAll(async () => {
  browser = await puppeteer.launch({
    // headless: false, // No audio in headless
  });

  page = await browser.newPage();

  await page.goto('http://localhost:3000');
});

describe('Player', async () => {
  test('can play a track', async () => {
    await page.waitFor(1000);
    await page.click('.c-btn--play');
  }, 5000);

  test('can pause a track', async () => {
    await page.waitFor(5000);
    await page.click('.c-btn--pause');
  }, 9000);

  test('can replay a paused track', async () => {
    await page.waitFor(2000);
    await page.click('.c-btn--play');
  }, 6000);

  test('can mute a track', async () => {
    await page.waitFor(5000);
    await page.click('.c-btn--mute');
  }, 9000);

  test('Can unmute a track', async () => {
    await page.waitFor(2500);
    await page.click('.c-btn--mute');
  }, 6500);

  test('Can adjust track volume', async () => {
    const volumeBar = await page.$('.c-volume__bar');
    const volumeBarRect = await volumeBar.boundingBox();
    const offsetX = 3;
    const startOfBar = volumeBarRect.x + offsetX;
    const endOfBar = startOfBar + volumeBarRect.width - offsetX;

    await page.waitFor(2000);
    // Decrease volume
    await page.mouse.move(endOfBar, volumeBarRect.y);
    await page.mouse.down();
    await page.mouse.move(startOfBar, volumeBarRect.y, { steps: 10 });
    await page.mouse.up();
    await page.waitFor(2000);
    // Increase volume
    await page.mouse.move(startOfBar, volumeBarRect.y);
    await page.mouse.down();
    await page.mouse.move(endOfBar, volumeBarRect.y, { steps: 10 });
    await page.mouse.up();
  }, 19000);
});

afterAll(async () => {
  await page.waitFor(3000);
  browser.close();
});
