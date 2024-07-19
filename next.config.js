// next.config.js

const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  runtimeCaching,
});

module.exports = {
  ...withPWA,
  reactStrictMode: false,
  rules: {
    '@next/next/no-async-client-component': 'off',
  },
};
