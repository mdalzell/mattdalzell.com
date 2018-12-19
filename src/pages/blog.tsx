import React from 'react'
import { Link, graphql } from "gatsby";
import Layout from '../components/layout';
import URLSearchParams from '@ungap/url-search-params';

interface IBlogPageProps{
  data: { 
    allMarkdownRemark: {
      edges,
      group
    }
  },
  location
}

class BlogPage extends React.Component<IBlogPageProps> {

  render() {
    const urlParams = new URLSearchParams(this.props.location.search);
    const tag = urlParams.get('tag');

    return (
      <Layout>
        <div>
            <h1>Blog</h1>
            <h4>{tag ? "Posts featuring \"" + tag + "\"" : "Recent Posts"}</h4>
            <ul className="no-list-style">
              {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
                (!tag || node.frontmatter.tags.indexOf(tag) !== -1) &&
                  <li key={node.id}>
                      <Link to={"/blog" + node.fields.slug}>{node.frontmatter.title + " - " + node.frontmatter.date}</Link>
                  </li>
              ))}
            </ul>
            {!tag &&
              <>
                <h4>Tags</h4>
                <p>
                  {
                    this.props.data.allMarkdownRemark.group.map((tag) => (<Link to={"/blog?tag=" + tag.fieldValue} className="tag">{"#" + tag.fieldValue}</Link>))
                  }
                </p>
                <Link to="/">Return Home</Link>
              </>
            }
            {tag &&
              <Link to="/blog">Return to Blog</Link>
            }
        </div>
      </Layout>
    );
  }
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
`;

export default BlogPage