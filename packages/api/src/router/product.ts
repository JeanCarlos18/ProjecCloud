import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const productRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.product.findMany();
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.product.findFirst({ where: { id: input } });
  }),
});
