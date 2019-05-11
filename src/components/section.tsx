import React from 'react'

const Section = props => {
  const { sectionTitle, subsections } = props
  return (
    <div>
      <div className="page-header">
        <h2>{sectionTitle}</h2>
        {subsections.map(subsection => (
          <Subsection {...subsection} />
        ))}
      </div>
    </div>
  )
}

const Subsection = props => {
  const { heading, content } = props
  return (
    <div key={heading}>
      <h3>{heading}</h3>
      <p>{content}</p>
    </div>
  )
}

export default Section
