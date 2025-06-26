import { Task } from '@serenity-js/core';

export const LoginGmail = {
  perform: () =>
    Task.where(`#actor simula login móvil de Gmail`,
      async (actor) => {
        console.log('🔐 Simulación de login en Gmail móvil.');
        // Idealmente usarías emulación móvil de Playwright
      }
    )
};
