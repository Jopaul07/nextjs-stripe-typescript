// next.config.js
module.exports = {
    async headers() {
        return [
            {
                // Apply these headers to all routes in your application.
                source: '/(.*)',
                headers: securityHeaders,
            },
        ];
    }
};

// Define Content Security Policy
const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' https://pzenterprise-templates.s3.amazonaws.com https://generation-sessions.s3.amazonaws.com data:;
    media-src 'none';
    connect-src 'self' https://cognito-idp.us-east-1.amazonaws.com;
    font-src 'self';
    frame-src 'self' https://js.stripe.com;
  `;

// Define the set of headers
const securityHeaders = [
    {
        key: 'Content-Security-Policy',
        value: ContentSecurityPolicy.replace(/\n/g, ''), // remove newlines
    },
    {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin',
    },
    {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
    },
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
    },
    {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=()',
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
    },
];
