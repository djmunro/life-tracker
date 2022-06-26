import * as trpc from '@trpc/server';
import superjson from 'superjson';
import { itemRouter } from './item';

/**
 * Create your application's root router
 * If you want to use SSG, you need export this
 * @link https://trpc.io/docs/ssg
 * @link https://trpc.io/docs/router
 */
export const appRouter = trpc
  .router()
  /**
   * Add a health check endpoint to be called with `/api/trpc/healthz`
   */
  .query('healthz', {
    async resolve() {
      return 'yay!';
    },
  })
  .merge('item.', itemRouter);

export type AppRouter = typeof appRouter;
