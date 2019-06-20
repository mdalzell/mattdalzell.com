module.exports = {
  siteMetadata: {
    title: 'Matt Dalzell - Ace Programmer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-typescript`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
  ],
}
