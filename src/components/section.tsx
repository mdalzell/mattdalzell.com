import React from 'react'

interface ISectionProps {
  title: string
  subsections: {
    content: string
    heading: string
  }[]
}

const Section = (props: ISectionProps): JSX.Element => {
  const { title, subsections } = props
  return (
    <section>
      <h2>{title}</h2>
      <dl>
        {subsections.map(({ heading, content }) => (
          <React.Fragment key={heading}>
            <dt>{heading}</dt>
            <dd>{content}</dd>
          </React.Fragment>
        ))}
      </dl>
    </section>
  )
}

export default Section
