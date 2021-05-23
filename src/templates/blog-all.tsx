import URLSearchParams from '@ungap/url-search-params'
import { graphql, Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import Tags from '../components/tags'

interface IBlogPageProps {
  data: {
    allMarkdownRemark: {
      group: { fieldValue: string }[]
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

// TODO: See if this grouping can be made in the initial query
const buildPostsByYear = (posts: INode[]) => {
  const postsByYear: Record<string, INode[]> = {}

  posts.map(post => {
    const {
      node: {
        frontmatter: { date },
      },
    } = post

    const year = new Date(date).getFullYear()

    if (year in postsByYear) {
      postsByYear[year].push(post)
    } else {
      postsByYear[year] = [post]
    }
  })

  return postsByYear
}

const BlogAll = (props: IBlogPageProps): JSX.Element => {
  const {
    data: {
      allMarkdownRemark: { group, posts },
    },
    location: { search },
  } = props
  const urlParams = new URLSearchParams(search)
  const tag = urlParams.get('tag')
  const postsByYear = buildPostsByYear(posts)

  return (
    <Layout>
      <h1>Blog - {tag ? 'Posts featuring "' + tag + '"' : 'All Posts'}</h1>
      <ul className="no-list-style">
        {Object.keys(postsByYear)
          .sort((first, second) => (Number(first) < Number(second) ? 1 : -1))
          .map(year => {
            const postsInYear = postsByYear[year].filter(
              post => !tag || post.node.frontmatter.tags.indexOf(tag) !== -1
            )

            if (postsInYear.length === 0) {
              return <></>
            }

            return (
              <div key={year}>
                <h3>{year}</h3>
                {postsInYear.map(
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
              </div>
            )
          })}
      </ul>
      {!tag && <Tags values={group.map(({ fieldValue }) => fieldValue)} />}
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
