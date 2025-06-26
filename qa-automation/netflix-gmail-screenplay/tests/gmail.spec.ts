import { test } from '@playwright/test';
import { createActor } from '../actors/actor';
import { LoginGmail } from '../tasks/LoginGmail';

test('Gmail: validar mensaje de acceso exitoso', async ({ page }) => {
  const actor = createActor(page);
  await actor.attemptsTo(LoginGmail.perform());
});
