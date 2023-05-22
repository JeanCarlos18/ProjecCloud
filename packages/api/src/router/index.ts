import { router } from "../trpc";
import { productRouter } from "./product";
import { authRouter } from "./auth";

export const appRouter = router({
  product: productRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
