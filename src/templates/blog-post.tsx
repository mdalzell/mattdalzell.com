import { graphql, Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import Tags from '../components/tags'

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleString('default', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  })

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
      <h3>{formatDate(date)}</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <p>~ MAD</p>
      {!!updatedOn && (
        <p className="italic">Last Updated On: {formatDate(updatedOn)}</p>
      )}
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
        date
        tags
        title
        updatedOn
      }
    }
  }
`

export default BlogPost
