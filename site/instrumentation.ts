// instrumentation.ts

import * as Sentry from '@sentry/nextjs';

export function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs' && process.env.SENTRY_DSN) {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      // Your Node.js Sentry configuration...
    });
  }

  if (process.env.NEXT_RUNTIME === 'edge' && process.env.SENTRY_DSN) {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      // Your Edge Runtime Sentry configuration...
    });
  }
}
