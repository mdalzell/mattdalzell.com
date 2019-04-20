import React from 'react'
import AboutMeSection from '../components/about-me-section'
import Layout from '../components/layout'

const yearsOfExperience = new Date().getFullYear() - 2013 // I started way back in 2012 as an intern, I'm ancient

const IndexPage = () => (
  <Layout>
    <div>
      {/* Background */}
      <div className="page-header">
        <h1>Hi, I'm Matt Dalzell</h1>
      </div>
      <p>
        I am a software engineer based out of Chicago, IL, with
        {` ${yearsOfExperience}`} years of professional experience in both
        frontend and backend web application development. Over the course of my
        career, I've worked on everything from large SaaS platforms to smaller
        sites for businesses across a variety of industries. Recently, I've been
        focusing on JavaScript development, primarily React web apps and native
        apps using frameworks such as Electron.
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
          { content: 'TypeScript, JavaScript/ES6, C#', heading: 'Languages' },
          {
            content: 'React, Electron, .NET',
            heading: 'Libraries & Frameworks',
          },
          { content: 'Visual Studio Code, npm, git', heading: 'Tools' },
          {
            content: 'REST, SOLID Principles',
            heading: 'Software Architecture',
          },
        ]}
      />
      {/* Professional Experience */}
      <AboutMeSection
        sectionTitle="Professional Experience"
        subsections={[
          {
            content: 'Frontend Engineer - (January 2019 - Present)',
            heading: 'Inspire11 - Chicago, IL',
          },
          {
            content: 'Software Engineer II - (November 2015 - December 2018)',
            heading: 'VelocityEHS - Chicago, IL',
          },
          {
            content: 'Web Developer - (June 2013 - November 2015)',
            heading: 'Azavar Technologies - Chicago, IL',
          },
          {
            content: 'Web Intern - (May 2012 - June 2013)',
            heading: 'Chicago Architecture Foundation - Chicago, IL',
          },
        ]}
      />
      {/* Education */}
      <AboutMeSection
        sectionTitle="Education"
        subsections={[
          {
            content: 'B.S. in Computer Science - Class of 2013',
            heading: 'Northwestern University - Evanston, IL',
          },
        ]}
      />
      {/* Other Honors */}
      <AboutMeSection
        sectionTitle="Other Honors"
        subsections={[
          {
            content: 'Troop 652, Boy Scouts of America - 2009',
            heading: 'Eagle Scout',
          },
        ]}
      />
    </div>
  </Layout>
)

export default IndexPage
