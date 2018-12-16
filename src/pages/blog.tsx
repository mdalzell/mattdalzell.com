import React from 'react'
import { Link, graphql } from "gatsby";
import Layout from '../components/layout'

const BlogPage = ({ 
  data: {
    allMarkdownRemark: { edges, group }
  } 
}) => (
  <Layout>
    <div>
        <h1>Blog</h1>
        <h4>Recent Posts</h4>
        <ul className="no-list-style">
          {edges.map(({ node }) => (
              <li key={node.id}>
                  <Link to={"/blog" + node.fields.slug}>{node.frontmatter.title + " - " + node.frontmatter.date}</Link>
              </li>
          ))}
        </ul>
        <h4>Tags</h4>
        <p>
          {
            group.map((tag) => (<a className="tag">{"#" + tag.fieldValue}</a>))
          }
        </p>
        <Link to="/">Return Home</Link>
    </div>
  </Layout>
)

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
`;

export default BlogPage