import { test } from '@playwright/test';
import { createActor } from '../actors/actor';
import { CaptureTitles } from '../tasks/CaptureTitles';

test('Netflix: extraer títulos de suspenso', async ({ page }) => {
  const actor = createActor(page);
  await actor.attemptsTo(CaptureTitles.perform());
});
