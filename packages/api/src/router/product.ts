import { router, publicProcedure } from "../trpc";
import { z } from "zod";
// TODO: Make proper router to display products from the db
export const productRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.product.findMany();
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.product.findFirst({ where: { id: input } });
  }),
});
