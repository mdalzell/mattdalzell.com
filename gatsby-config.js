const yearsOfExperience = new Date().getFullYear() - 2013 // I started way back in 2012 as an intern, I'm ancient

const description = `Matt Dalzell is a software engineer based out of Chicago, IL, with
 ${yearsOfExperience} years of professional experience in both
frontend and backend web application development. Over the course of my
career, I've worked on everything from large SaaS platforms to smaller
apps for businesses across a variety of industries, including workplace safety, fintech, and automotive technology.`

const keywords = 'Matt Dalzell, software engineer, blog'

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
  ],
}
