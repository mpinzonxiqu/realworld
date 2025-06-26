import { Actor } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';

export function createActor(page): Actor {
  return Actor.named('Tester').whoCan(BrowseTheWebWithPlaywright.using(page));
}
