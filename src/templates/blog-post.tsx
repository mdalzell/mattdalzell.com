import { graphql, Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import Tag from '../components/tag'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h3>{post.frontmatter.date}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <p>~ MAD</p>
        <p>
          {post.frontmatter.tags.map(tag => (
            <Tag value={tag} key={tag} />
          ))}
        </p>
        <Link to="/blog">Return to Blog</Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        tags
        title
      }
    }
  }
`

export default BlogPost
