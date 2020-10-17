import { graphql, Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import Tags from '../components/tags'

interface IBlogPageProps {
  data: {
    allMarkdownRemark: {
      edges: INode[]
      group: { fieldValue: string }[]
    }
    featuredPosts: { edges: INode[] }
    markdownRemark: { html: string }
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

const buildBlogLinks = ({
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

const BlogPage = (props: IBlogPageProps): JSX.Element => {
  const {
    data: {
      allMarkdownRemark: { edges, group },
      featuredPosts: { edges: featuredPostLinks },
      markdownRemark: { html },
    },
  } = props

  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {featuredPostLinks && featuredPostLinks.length > 0 && (
          <>
            <h3>Featured Posts</h3>
            <ul className="no-list-style">
              {featuredPostLinks.map(buildBlogLinks)}
            </ul>
          </>
        )}

        <h3>Recent Posts</h3>
        <ul className="no-list-style">
          {edges.slice(0, 5).map(buildBlogLinks)}
        </ul>
        <p>
          <Link to="/blog/all">View all posts &gt;&gt;&gt;</Link>
        </p>
        <Tags values={group.map(({ fieldValue }) => fieldValue)} />
        <Link to="/">Return Home</Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPageQuery($slug: String!) {
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
    featuredPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { featured: { eq: true } } }
    ) {
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
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`

export default BlogPage
