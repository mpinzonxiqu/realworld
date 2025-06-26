import { test, expect } from '@playwright/test';

test('Login UI: RealWorld', async ({ page }) => {
  await page.goto('https://demo.realworld.io/#/login');
  await page.fill('input[type="email"]', 'demo@example.com');
  await page.fill('input[type="password"]', 'demo123');
  await page.click('button:has-text("Sign in")');

  await expect(page.locator('text=Your Feed')).toBeVisible();
});
