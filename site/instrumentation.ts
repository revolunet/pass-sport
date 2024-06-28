import * as Sentry from '@sentry/nextjs';

export function register() {
  // Sentry configuration for SSR (Nodejs)
  if (!!process.env.SENTRY_DSN && !!process.env.ENV) {
    Sentry.init({
      environment: process.env.ENV,
      dsn: process.env.SENTRY_DSN,
      tracesSampleRate: 0.1,
      attachStacktrace: true,
    });
    console.info('Sentry initialized for ' + process.env.NEXT_RUNTIME);
  }
}
