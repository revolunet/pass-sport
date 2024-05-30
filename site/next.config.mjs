/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // The instrumentation hook is required for Sentry to work on the serverside
    instrumentationHook: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.woff2$/,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
