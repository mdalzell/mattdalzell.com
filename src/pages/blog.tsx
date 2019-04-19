import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Tag from '../components/tag'
import URLSearchParams from '@ungap/url-search-params'

interface IBlogPageProps {
  data: {
    allMarkdownRemark: {
      edges
      group
    }
  }
  location
}

const BlogPage = (props: IBlogPageProps) => {
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
      <div>
        <h1>Blog</h1>
        <h3>{tag ? 'Posts featuring "' + tag + '"' : 'Recent Posts'}</h3>
        <ul className="no-list-style">
          {edges.map(
            ({
              node: {
                id,
                fields: { slug },
                frontmatter: { tags, title, date },
              },
            }) =>
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
              {group.map(({ fieldValue }) => (
                <Tag value={fieldValue} key={fieldValue} />
              ))}
            </p>
            <Link to="/">Return Home</Link>
          </>
        )}
        {tag && <Link to="/blog">Return to Blog</Link>}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
