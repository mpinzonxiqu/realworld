import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';
import assert from 'assert';

let browser: Browser;
let page: Page;

Before(async () => {
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  page = await context.newPage();
});

After(async () => {
  await browser.close();
});

Given('el usuario abre la página de login', async () => {
  await page.goto('https://demo.realworld.io/#/login');
});

When('ingresa su email y contraseña válidos', async () => {
  await page.fill('input[type="email"]', 'demo@example.com');  // usa datos válidos de test
  await page.fill('input[type="password"]', 'demo123');
  await page.click('button:has-text("Sign in")');
});

Then('debería ver su feed personal', async () => {
  await page.waitForSelector('text=Your Feed', { timeout: 5000 });
  const url = page.url();
  assert.ok(url.includes('#/'), 'No se redirigió correctamente después del login');
});
