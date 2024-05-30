// instrumentation.ts

import * as Sentry from '@sentry/nextjs';

export function register() {
  if (!!process.env.SENTRY_DSN) {
    Sentry.init({
      environment: process.env.ENV,
      dsn: process.env.SENTRY_DSN,
      tracesSampleRate: 1.0,
      attachStacktrace: true,
      // Your Node.js Sentry configuration...
    });
    console.info('Sentry initialized for ' + process.env.NEXT_RUNTIME);
  }
}
