import React from 'react'
import AboutMeSection from '../components/about-me-section'
import Layout from '../components/layout'

const yearsOfExperience = new Date().getFullYear() - 2013 // I started way back in 2012 as an intern, I'm ancient

const IndexPage = () => (
  <Layout>
    <div>
      {/* Background */}
      <div className="page-header">
        <h1>About Me</h1>
      </div>
      <p>
        I am a software engineer based out of Chicago, IL, with{' '}
        {yearsOfExperience} years of professional experience in both frontend
        and backend web application development. Over the course of my career,
        I've worked on everything from large SaaS platforms to smaller sites for
        businesses across a wide variety of industries. Recently, I've been
        focusing on JavaScript development, with both React web apps as well as
        native apps using frameworks such as Electron.
      </p>
      <p>
        My philosophy for software development is that the code is always
        improving, or it is always getting worse; there is no such thing as
        staying the same. I treat refactoring, bug fixing, and testing with the
        same care as I do writing new code. I enjoy the challenge of
        constructing code that is not only functional, but maintainable in the
        long run.
      </p>
      {/* Technical Skills */}
      <AboutMeSection
        sectionTitle="Technical Skills"
        subsections={[
          { heading: 'Languages', content: 'TypeScript, JavaScript, C#' },
          { heading: 'Frameworks', content: 'React, Electron, Node.js, .NET' },
          { heading: 'Tools', content: 'Visual Studio Code, npm, git' },
          {
            heading: 'Software Architecture',
            content: 'REST, SOLID Principles',
          },
        ]}
      />
      {/* Professional Experience */}
      <AboutMeSection
        sectionTitle="Professional Experience"
        subsections={[
          {
            heading: 'Inspire11 - Chicago, IL',
            content: 'Frontend Engineer - (January 2019 - Present)',
          },
          {
            heading: 'VelocityEHS - Chicago, IL',
            content: 'Software Engineer II - (November 2015 - December 2018)',
          },
          {
            heading: 'Azavar Technologies - Chicago, IL',
            content: 'Web Developer - (June 2013 - November 2015)',
          },
          {
            heading: 'Chicago Architecture Foundation - Chicago, IL',
            content: 'Web Intern - (May 2012 - June 2013)',
          },
        ]}
      />
      {/* Education */}
      <AboutMeSection
        sectionTitle="Education"
        subsections={[
          {
            heading: 'Northwestern University - Evanston, IL',
            content: 'B.S. in Computer Science - Class of 2013',
          },
        ]}
      />
      {/* Other Honors */}
      <AboutMeSection
        sectionTitle="Other Honors"
        subsections={[
          {
            heading: 'Eagle Scout',
            content: 'Troop 652, Boy Scouts of America - 2009',
          },
        ]}
      />
    </div>
  </Layout>
)

export default IndexPage
