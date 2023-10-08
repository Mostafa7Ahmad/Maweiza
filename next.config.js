/** @type {import('next').NextConfig} */

const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development', 
    register: true,
    skipWaiting: true,
    runtimeCaching,
});

const nextConfig = withPWA({
    reactStrictMode: false, 
});

module.exports = nextConfig;
