export const config = {
  APP_HOST: process.env.APP_HOST || "0.0.0.0",
  APP_PORT: Number(process.env.APP_PORT ?? 3000),
};
