import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import NavMenu from '../components/nav-menu'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/bootstrap-grid.min.css';
import '../styles/index.css'

const Layout = ({ children }) => (
  <div>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }`}
      render={(data) => 
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Matt Dalzell is a software engineer based out of Chicago, IL.' },
            { name: 'keywords', content: 'Matt Dalzell, software engineer, blog' },
          ]}
        />
      }
    />
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-3'>
          <NavMenu />
        </div>
        <div className='col-sm-9'>
          {children}
        </div>
      </div>
    </div>
    <div className='footer'>
      &copy; {new Date().getFullYear()} Matt Dalzell
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.element
}

export default Layout