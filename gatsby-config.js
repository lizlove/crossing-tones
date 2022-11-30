module.exports = {
  siteMetadata: {
    title: `Crossing Tones`,
    description: `An intermediary custodian for significant collections of Jazz music and related items. We gather essential source materials and prepare them for acquisition, preservation, and educational initiatives.`,
    author: `@lizlove`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -50,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#210124`,
        theme_color: `#210124`,
        display: `minimal-ui`,
        icon: `src/images/ct-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
  ],
};
