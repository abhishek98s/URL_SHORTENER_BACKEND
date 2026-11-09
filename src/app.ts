import Fastify, { type FastifyInstance } from "fastify";

import { getLoggerSetup } from "@/helpers/logger.js";

export function buildApp(): FastifyInstance {
  const app = Fastify({
    logger: getLoggerSetup(),
  });

  app.get("/health", async () => ({ status: "ok" }));

  return app;
}
