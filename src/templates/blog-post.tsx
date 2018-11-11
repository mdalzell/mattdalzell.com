import React from "react";
import { Link, graphql } from "gatsby";
import Layout from '../components/layout'

const BlogPost = ({ data }) => {
    const post = data.markdownRemark;
    return ( 
      <Layout>
        <div>
            <h1>{post.frontmatter.title}</h1>
            <h4>{post.frontmatter.date}</h4>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <p>
              ~ MAD
            </p>
            <p>
              {post.frontmatter.tags.map((tag) => (
                <a className="tag">{"#" + tag}</a>
              ))}
            </p>
            <Link to="/blog">Return to Blog</Link>
        </div>
      </Layout>
    );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        tags
        title
      }
    }
  }
`;

export default BlogPost