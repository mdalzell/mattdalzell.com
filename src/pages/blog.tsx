import React from 'react'
import { Link, graphql } from "gatsby";
import Layout from '../components/layout'

const BlogPage = ({ data }) => (
  <Layout>
    <div>
        <h1>Blog</h1>
        <ul className="no-list-style">
          {data.allMarkdownRemark.edges.map(({ node }) => (
              <li key={node.id}>
                  <Link to={"/blog" + node.fields.slug}>{node.frontmatter.title + " - " + node.frontmatter.date}</Link>
              </li>
          ))}
        </ul>
        <Link to="/">Return Home</Link>
    </div>
  </Layout>
);

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
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`;

export default BlogPage