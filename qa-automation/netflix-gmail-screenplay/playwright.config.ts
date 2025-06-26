import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true,
    viewport: { width: 375, height: 667 }, // iPhone 8 dimensions (móvil)
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
