module.exports = {
  siteMetadata: {
    title: `robots cooking`,
    description: ``,
    author: `robots.cooking`,
  },
  plugins: [
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyv9U7RZRkQmjJGj`,
        tables: [
          {
            baseId: `app8fDw1VfF3RiVyi`,
            tableName: `robots`,
            tableLinks: ["companies"]
          },
          {
            baseId: `app8fDw1VfF3RiVyi`,
            tableName: `companies`,
            tableLinks: ["robots"]
          }
        ]
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
