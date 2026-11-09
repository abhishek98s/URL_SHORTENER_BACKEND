import rateLimit from "@fastify/rate-limit";
import Fastify from "fastify";

import { rateLimitMinute, rateLimitOptionsDay } from "@/config/ratelimit.js";
import { MESSAGES } from "@/constants/messages.js";
import { getLoggerSetup } from "@/helpers/logger.js";

export function buildApp() {
  const app = Fastify({
    logger: getLoggerSetup(),
  });

  app.register(rateLimit, rateLimitMinute);
  app.register(rateLimit, rateLimitOptionsDay);

  app.get("/health", async () => ({ status: MESSAGES.HEALTH_OK }));

  return app;
}
