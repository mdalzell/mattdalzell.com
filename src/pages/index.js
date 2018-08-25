import React from 'react'
import AboutMeSection from '../components/about-me-section.js'

const yearsOfExperience = new Date().getFullYear() - 2012; // I started way back in 2012, I'm ancient

const IndexPage = () => (
  <div>
    {/* Background */}
    <div className="page-header">
      <h1>Profile</h1>
    </div>
    <p>
      I am a software engineer based out of Chicago, IL, with {yearsOfExperience} years of professional experience in both frontend and
      backend web application development.  My background primarily lies within the Microsoft stack (C#/.NET/SQL Server) and
      various javascript frameworks, most recently React.  Over the course of my career, I've worked on everything from large SaaS applications to smaller
      web apps for businesses across a wide variety of industries.
    </p>
    <p>
      My philosophy for software development is that the code is always improving, or it is always getting worse; there is no such thing
      as staying the same.  I treat refactoring, bug fixing, and testing with the same care as I do writing new code. I enjoy the
      challenge of constructing code that is not only functional, but maintainable in the long run.
    </p>
    {/* Technical Proficiencies */}
    <AboutMeSection 
      sectionTitle="Technical Proficiencies"
      subsections={[
        { heading: "Languages", content: "C#, Typescript, Javascript, HTML5, CSS/SASS/LESS, SQL" },
        { heading: "Frameworks", content: "React, .NET (MVC, Core, Webforms), Electron" },
        { heading: "Tools", content: "Visual Studio, Webpack, npm" },
        { heading: "Servers and Cloud Platforms", content: "Microsoft Azure, Amazon EC2, Windows Server (2008R2 and 2012)" },
      ]}
    />
    {/* Professional Experience */}
      <AboutMeSection
        sectionTitle="Professional Experience"
        subsections={[
          { heading: "Velocity EHS - Chicago, IL", content: "Software Engineer II - (November 2015 - Present)" },
          { heading: "Azavar Technologies - Chicago, IL", content: "Web Developer - (June 2013 - November 2015)" },
          { heading: "Chicago Architecture Foundation - Chicago, IL", content: "Web Intern - (May 2012 - June 2013)" },
        ]}
      />
      {/* Education */}
      <AboutMeSection
        sectionTitle="Education"
        subsections={[
          { heading: "Northwestern University - Evanston, IL", content: "B.S. in Computer Science - Class of 2013" },
          { heading: "St. Laurence High School - Burbank, IL", content: "Valedictorian - Class of 2009" }
        ]}
      />
      {/* Other Honors */}
      <AboutMeSection
        sectionTitle="Other Honors"
        subsections={[
          { heading: "Eagle Scout", content: "Boy Scouts of America - 2009" }
        ]}
      />
  </div>
)

export default IndexPage
