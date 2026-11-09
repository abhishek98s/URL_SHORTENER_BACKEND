export const ERRORS = {
  TOO_MANY_REQUESTS: "Too Many Requests",
  RATE_LIMIT_EXCEEDED: (after: string) => `Rate limit exceeded. Try again in ${after}.`,
} as const;
