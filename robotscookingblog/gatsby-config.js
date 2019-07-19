require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `robots cooking`,
    description: `all the robots cooking stuff`,
    keywords: `robots, cooking`,
    author: `https://robots.cooking`,
    lang: `en`,
    url: `https://robots.cooking`,
    image: `https://robots.cooking/img.jpg`
  },
  plugins: [
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `site`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: "robots",
            tableLinks: ["company"]
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: "companies",
            tableLinks: ["robots"]
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Space Mono`,
          `Roboto`,
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_TRACKIKNG_ID
      }
    },
    {
      resolve: `gatsby-plugin-facebook-analytics`,
      options: {
        appId: process.env.FACEBOOK_APP_ID,
        // Include facebook analytics in development.
        // Defaults to false meaning the library will only be loaded in production.
        includeInDevelopment: false,
        // Include debug version of sdk
        // Defaults to false meaning the library will load sdk.js
        debug: false,
        // Can select your language, default will load english
        language: "en_US"
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/robot-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
