/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  publicRuntimeConfig: {
    ENV: 'UAT',
    API_URL_DEV: 'https://api-auth-dev.vespa.co.th',
    API_URL_UAT: 'https://api-auth-uat.vespa.co.th',
    OAUTH_URL_DEV: 'https://vespistiid-dev.vespa.co.th/sign-in',
    OAUTH_URL_UAT: 'https://vespistiid-uat.vespa.co.th/sign-in',
    OAUTH_REDIRECT_URI_DEV: 'https://vespiariothailand.github.io/example.vespistiid/profile',
    OAUTH_REDIRECT_URI_UAT: 'https://vespiariothailand.github.io/example.vespistiid/profile',
    OAUTH_CLIENT_ID_UAT: '33982395862270600365',
    OAUTH_CLIENT_SECRET_UAT: '02be2931be96b5692478',
    OAUTH_CLIENT_ID_DEV: '28160065853605221092',
    OAUTH_CLIENT_SECRET_DEV: '13e980a693b0e3888f2f',
  },
  output: 'export',
  // Add basePath
  basePath: '/example.vespistiid', // github pages
}

module.exports = nextConfig
