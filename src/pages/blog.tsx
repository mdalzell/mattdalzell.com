import { graphql, Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import Tag from '../components/tag'

interface IBlogPageProps {
  data: {
    allMarkdownRemark: {
      edges: INode[]
      group: Array<{ fieldValue: string }>
    }
  }
  location: {
    search: string
  }
}

interface INode {
  node: {
    id: number
    fields: { slug: string }
    frontmatter: {
      tags: string[]
      title: string
      date: string
      draft?: boolean
    }
  }
}

const BlogPage = (props: IBlogPageProps) => {
  const {
    data: {
      allMarkdownRemark: { edges, group },
    },
    location: { search },
  } = props

  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        <h3>Recent Posts</h3>
        <ul className="no-list-style">
          {edges
            .slice(0, 5)
            .map(
              ({
                node: {
                  id,
                  fields: { slug },
                  frontmatter: { title, date },
                },
              }: INode) => (
                <li key={id}>
                  <Link to={'/blog' + slug}>{title + ' - ' + date}</Link>
                </li>
              )
            )}
          <li>
            <Link to="/blog/all">View all posts >>></Link>
          </li>
        </ul>
        <h3>Tags</h3>
        <p>
          {group.map(({ fieldValue }: { fieldValue: string }) => (
            <Tag value={fieldValue} key={fieldValue} />
          ))}
        </p>
        <Link to="/">Return Home</Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { collection: { eq: "blog" } }
        frontmatter: { draft: { ne: true } }
      }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            tags
            title
            date(formatString: "DD MMMM, YYYY")
            draft
          }
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default BlogPage
