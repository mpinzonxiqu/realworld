import { BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium, Browser } from 'playwright';

let browser: Browser;

BeforeAll(async () => {
  browser = await chromium.launch();
});

AfterAll(async () => {
  await browser?.close();
});

export { browser };
