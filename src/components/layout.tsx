import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

import NavMenu from './nav-menu'

import '../styles/bootstrap-grid.min.css'
import '../styles/index.css'

interface IProps {
  children: React.ReactNode
}

const Layout = ({ children }: IProps) => (
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
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.element,
}

const Footer = () => (
  <div className="footer">
    <NavMenu />
    <div>&copy; {new Date().getFullYear()} Matt Dalzell</div>
  </div>
)

export default Layout
