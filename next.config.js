/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    scope: '/app',
    sw: 'service-worker.js',
})

module.exports = withPWA({
    reactStrictMode: true,
});