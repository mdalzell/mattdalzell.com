import React from 'react'

const AboutMeSection = props => {
  return (
    <div>
      <div className="page-header">
        <h2>{props.sectionTitle}</h2>
        {props.subsections.map((subsection, index) => {
          return (
            <div key={index}>
              <h3>{subsection.heading}</h3>
              <p>{subsection.content}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AboutMeSection
