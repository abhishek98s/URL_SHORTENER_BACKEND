import "dotenv/config";

import { buildApp } from "@/app.js";
import { config } from "@/config/env.js";

const app = buildApp();

const start = async () => {
  try {
    await app.listen({ port: config.APP_PORT, host: config.APP_HOST });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
