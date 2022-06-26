import { Prisma } from '@prisma/client';
import * as trpc from '@trpc/server';
import { prisma } from '~/server/prisma';

const defaultItemSelect = Prisma.validator<Prisma.ItemSelect>()({
  id: true,
  category: true,
  body: true,
  updateAt: true,
});

export const itemRouter = trpc.router().query('all', {
  async resolve() {
    /**
     * For pagination you can have a look at this docs site
     * @link https://trpc.io/docs/useInfiniteQuery
     */

    return prisma.item.findMany({
      select: defaultItemSelect,
    });
  },
});
