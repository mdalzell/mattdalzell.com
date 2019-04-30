import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

import NavMenu from './nav-menu'

import '../styles/bootstrap-grid.min.css'
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
        }
      `}
      render={data => (
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              content:
                'Matt Dalzell is a software engineer based out of Chicago, IL.',
              name: 'description',
            },
            {
              content: 'Matt Dalzell, software engineer, blog',
              name: 'keywords',
            },
          ]}
        >
          <link
            rel="stylesheet"
            media="screen"
            href="https://fontlibrary.org/face/fantasque-sans-mono"
            type="text/css"
          />
          <link
            rel="stylesheet"
            media="screen"
            href="https://fontlibrary.org/face/xolonium"
            type="text/css"
          />
        </Helmet>
      )}
    />
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3 hidden-sm">
          <NavMenu />
        </div>
        <div className="col-sm-9">{children}</div>
      </div>
    </div>
    <div className="footer">
      <div>&copy; {new Date().getFullYear()} Matt Dalzell</div>
      <NavMenu />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.element,
}

export default Layout
