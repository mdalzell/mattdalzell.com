import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import NavMenu from '../components/nav-menu'

import './bootstrap-grid.min.css';
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-3'>
          <NavMenu />
        </div>
        <div className='col-sm-9'>
          {children()}
        </div>
      </div>
    </div>
    <div className='footer'>
      &copy; {new Date().getFullYear()} Matt Dalzell
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
