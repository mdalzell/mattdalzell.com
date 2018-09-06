import React from "react";
import Link from "gatsby-link";

const BlogPost = ({ data }) => {
    const post = data.markdownRemark;
    return ( 
        <div>
            <h1>{post.frontmatter.title}</h1>
            <h4>{post.frontmatter.date}</h4>
            <Link to="/blog">Return to Blog</Link>
        </div>
    );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
      }
    }
  }
`;

export default BlogPost