import React from 'react'
import Link from "gatsby-link";

const BlogPage = ({ data }) => (
    <div>
        <h1>Blog</h1>
        <ul>
          {data.allMarkdownRemark.edges.map(({ node }) => (
              <li key={node.id}>
                  <Link to={"/blog" + node.fields.slug}>{node.frontmatter.title + " - " + node.frontmatter.date}</Link>
              </li>
          ))}
        </ul>
        <Link to="/">Return Home</Link>
    </div>
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