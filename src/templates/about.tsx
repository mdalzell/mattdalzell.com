import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import bw_profile from "../assets/bw_profile.jpg"

interface IAboutData {
  data: {
    markdownRemark: {
      html: string
    }
  }
}

const AboutPage = ({ data: { markdownRemark: { html } } }: IAboutData): JSX.Element =>
  <Layout>
    <h1>About Me</h1>
    <img src={bw_profile as string} />
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout >

export const query = graphql`
  query AboutPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`

export default AboutPage