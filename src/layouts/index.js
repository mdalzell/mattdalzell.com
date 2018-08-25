import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

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
    <div className="container-fluid">
      <div className='row'>
        <div className='col-sm-3'>
        </div>
        <div className='col-sm-9'>
          {children()}
        </div>
      </div>
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
