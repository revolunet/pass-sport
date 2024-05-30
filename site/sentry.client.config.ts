import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: '__DSN__',
  // Your Sentry configuration for the Browser...
});
