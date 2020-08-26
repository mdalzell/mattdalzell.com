import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import bw_profile from "../assets/bw_profile.jpg"

const AboutPage = ({ data: { markdownRemark: { html } } }) =>
    <Layout>
        <h1>About Matt Dalzell</h1>
        <img src={bw_profile} />
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