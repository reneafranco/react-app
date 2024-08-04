import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    
    domains: ['images.unsplash.com'],
    unoptimized: true,
    },
    output: 'export',
    typescript: {
      ignoreBuildErrors: true,
    }
};

const sentryConfig = {
  org: "franco-c7",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
  // Descomentar si necesitas tunelización
  // tunnelRoute: "/monitoring",
};

export default withSentryConfig(nextConfig, sentryConfig);
