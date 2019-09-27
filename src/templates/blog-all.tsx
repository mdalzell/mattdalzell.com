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

const BlogAll = (props: IBlogPageProps) => {
  const {
    data: {
      allMarkdownRemark: { edges, group },
    },
    location: { search },
  } = props
  const urlParams = new URLSearchParams(search)
  const tag = urlParams.get('tag')

  return (
    <Layout>
      <h1>Blog</h1>
      <h3>{tag ? 'Posts featuring "' + tag + '"' : 'All Posts'}</h3>
      <ul className="no-list-style">
        {edges.map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter: { tags, title, date },
            },
          }: INode) =>
            (!tag || tags.indexOf(tag) !== -1) && (
              <li key={id}>
                <Link to={'/blog' + slug}>{title + ' - ' + date}</Link>
              </li>
            )
        )}
      </ul>
      {!tag && (
        <>
          <h3>Tags</h3>
          <p>
            {group.map(({ fieldValue }: { fieldValue: string }) => (
              <Tag value={fieldValue} key={fieldValue} />
            ))}
          </p>
        </>
      )}
      <Link to="/blog">Return to Blog Home</Link>
    </Layout>
  )
}

export const query = graphql`
  query AllBlogPostQuery {
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

export default BlogAll
