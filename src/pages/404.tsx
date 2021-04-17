import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <div>
      <h1>{"This isn't the page you're looking for"}</h1>
      <Quote
        author="Buckaroo Banzai"
        quote="No where where you go, there you are."
        work="The Adventures of Buckaroo Banzai Across the 8th Dimension"
      />
      <Quote
        author="J.R.R. Tolkien"
        quote="All that is gold does not glitter,
        Not all those who wander are lost;
        The old that is strong does not wither,
        Deep roots are not reached by the frost.
        
        From the ashes a fire shall be woken,
        A light from the shadows shall spring;
        Renewed shall be blade that was broken,
        The crownless again shall be king."
        work="The Fellowship of the Ring"
      />
      <Quote
        author="Tommy Chong"
        quote="Dave's not here."
        work="Cheech and Chong"
      />
      <a href="/">Go Home</a>
    </div>
  </Layout>
)

const Quote = ({
  author,
  quote,
  work,
}: {
  author: string
  quote: string
  work: string
}): JSX.Element => (
  <div>
    <p>
      {`"${quote}" ~ ${author}, `}
      <em>{work}</em>
    </p>
  </div>
)

export default NotFoundPage
