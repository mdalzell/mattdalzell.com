import React from 'react'

const AboutMeSection = (props) => {
    return (
        <div>
            <div className="page-header">
                <h1>{props.sectionTitle}</h1>
                {
                    props.subsections.map((subsection, index) => {
                        return (
                            <div key={index}>
                                <h4><strong>{subsection.heading}</strong></h4>
                                <p>{subsection.content}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default AboutMeSection