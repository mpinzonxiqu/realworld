import { Task } from '@serenity-js/core';
import { Page } from 'playwright';

export const CaptureTitles = {
  perform: () =>
    Task.where(`#actor extrae los títulos de suspenso`,
      async (actor) => {
        const page: Page = await actor.abilityTo(BrowseTheWebWithPlaywright).page();
        await page.goto('https://www.netflix.com');
        await page.setViewportSize({ width: 1280, height: 720 });

        console.log('URL actual:', page.url());

        const titles = await page.$$eval('.title-card-container .fallback-text', els =>
          els.slice(0, 3).map(el => el.textContent?.trim())
        );

        console.log('🎬 Títulos de películas de suspenso:');
        titles.forEach((title, i) => console.log(`${i + 1}. ${title}`));
      }
    )
};
