import React from 'react'

import Layout from '../components/layout'
import Section from '../components/section'

const Home = ({ data }) => {
  const {
    html,
    frontmatter: { skills, title },
  } = data.markdownRemark

  const subsections = skills.sections.map(section => {
    return {
      content: section.skills.map(({ skill }) => skill).join(', '),
      heading: section.title,
    }
  })

  return (
    <Layout>
      <div className="page-header">
        <h1>{title}</h1>
      </div>
      <div className="intro" dangerouslySetInnerHTML={{ __html: html }} />
      <Section title={skills.title} subsections={subsections} />
    </Layout>
  )
}

export const query = graphql`
  query IndexPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        skills {
          title
          sections {
            title
            skills {
              skill
            }
          }
        }
        title
      }
    }
  }
`

export default Home
