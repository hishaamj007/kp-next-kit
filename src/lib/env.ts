import { createEnv } from "@t3-oss/env-nextjs";
import z from "zod";

export const env = createEnv({
  client: {},
  server: {
    DATABASE_URL: z.url(),
    POSTGRES_USER: z.string().default("postgres"),
    POSTGRES_PASSWORD: z.string().default("postgres"),
    POSTGRES_DB: z.string().default("postgres"),
    POSTGRES_PORT: z.string().default("5432"),
    REDIS_PORT: z.string().default("6379"),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_DB: process.env.POSTGRES_DB,
    POSTGRES_PORT: process.env.POSTGRES_PORT,
    REDIS_PORT: process.env.REDIS_PORT,
  },
});
