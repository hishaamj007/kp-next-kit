import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import z, { ZodError } from "zod";
import { db, redis } from "../db/database";

export function createTRPCContext(opts: { headers: Headers }) {
  return {
    db,
    redis,
    ...opts,
  };
}

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? z.treeifyError(error.cause) : null,
      },
    };
  },
});

export const createCallerFactory = t.createCallerFactory;
export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
