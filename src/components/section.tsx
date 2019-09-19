import React from 'react'

const Section = props => {
  const { sectionTitle, subsections } = props
  return (
    <div>
      <div className="page-header">
        <h2>{sectionTitle}</h2>
        <dl>
          {subsections.map(subsection => (
            <Subsection {...subsection} />
          ))}
        </dl>
      </div>
    </div>
  )
}

const Subsection = props => {
  const { heading, content } = props
  return (
    <React.Fragment key={heading}>
      <dt>{heading}</dt>
      <dd>{content}</dd>
    </React.Fragment>
  )
}

export default Section
