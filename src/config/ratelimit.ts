import type * as RateLimit from "@fastify/rate-limit";

import { ERRORS } from "@/constants/errors.js";
import { HTTP_STATUS } from "@/constants/http-status.js";
import { redis } from "@/lib/redis.js";

const errorResponseBuilder: RateLimit.RateLimitPluginOptions["errorResponseBuilder"] = (
  request,
  context,
) => ({
  statusCode: HTTP_STATUS.TOO_MANY_REQUESTS,
  error: ERRORS.TOO_MANY_REQUESTS,
  message: ERRORS.RATE_LIMIT_EXCEEDED(context.after),
  requestId: request.id,
});

export const rateLimitMinute: RateLimit.RateLimitPluginOptions = {
  global: true,
  max: 100,
  timeWindow: "1 minute",
  redis,
  nameSpace: "rl:-minute:",
  continueExceeding: false,
  skipOnError: false,
  errorResponseBuilder,
};

export const rateLimitOptionsDay = {
  global: true,
  max: 2000,
  timeWindow: "1 day",
  redis,
  nameSpace: "rl-day:",
  skipOnError: false,
  errorResponseBuilder,
};
