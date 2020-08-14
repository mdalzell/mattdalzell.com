import URLSearchParams from '@ungap/url-search-params'
import { graphql, Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import Tags from '../components/tags'

interface IBlogPageProps {
  data: {
    allMarkdownRemark: {
      group: { fieldValue: string }[],
      posts: INode[]
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
      allMarkdownRemark: { group, posts },
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
        {posts.map(
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
        <Tags values={group.map(({ fieldValue }) => fieldValue)} />
      )}
      <Link to="/blog">Return to Blog</Link>
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
      posts: edges {
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
      }
    }
  }
`

export default BlogAll
