import { drizzle } from "drizzle-orm/postgres-js";
import Redis from "ioredis";
import postgres from "postgres";
import { env } from "@/lib/env";
// biome-ignore lint/performance/noNamespaceImport: This is required.
import * as schema from "./schema";

export const pg = postgres(env.DATABASE_URL);
export const db = drizzle(pg, { schema });
export const redis = new Redis(env.REDIS_PORT);
