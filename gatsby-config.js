const description = `Matt Dalzell is a software engineer based out of Chicago, IL, with six years of professional experience in full stack web application development. Over the course of his career, he's worked on everything from distributed microservices to single page applications for businesses across a variety of industries.`

const keywords = 'Matt Dalzell, software engineer, programmer, blog'

const title = 'Matt Dalzell - Ace Programmer'

module.exports = {
  siteMetadata: {
    description,
    keywords,
    title,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer"
            }
          }
        ]
      }
    }
  ],
}
