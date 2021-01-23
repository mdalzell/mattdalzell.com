import { graphql, Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import Tags from '../components/tags'

const BlogPost = ({
  data: {
    markdownRemark: {
      frontmatter: { date, title, tags, updatedOn },
      html,
    },
  },
}: {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        date: string
        tags: string[]
        updatedOn: string
      }
      html: string
    }
  }
}): JSX.Element => (
  <Layout>
    <div>
      <h1>{title}</h1>
      <h3>{date}</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <p>~ MAD</p>
      {updatedOn && <p className="italic">Last Updated On: {updatedOn}</p>}
      <Tags values={tags} />
      <Link to="/blog">Return to Blog</Link>
    </div>
  </Layout>
)

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        tags
        title
        updatedOn(formatString: "DD MMMM, YYYY")
      }
    }
  }
`

export default BlogPost
