/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        printRejected: true,
        purgeCSSOptions: {
          safelist: [],
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    "gatsby-plugin-postcss",
  ],
}
