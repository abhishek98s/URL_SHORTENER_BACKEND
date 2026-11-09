import { config } from "@/config/env.js";

export const getLoggerSetup = () => {
  const developmentConfig = {
    level: config.LOG_LEVEL ?? "debug",
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "SYS:HH:MM:ss.l",
        ignore: "pid,hostname",
        singleLine: false,
      },
    },
  };
  const productionConfig = {
    level: config.LOG_LEVEL ?? "info",
  };

  return config.isDevelopment ? developmentConfig : productionConfig;
};
