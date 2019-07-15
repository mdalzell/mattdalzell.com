import { graphql, StaticQuery } from 'gatsby'
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
        query SiteMetadataQuery {
          site {
            siteMetadata {
              description
              keywords
              title
            }
          }
        }
      `}
      render={({ site }) => {
        const {
          siteMetadata: { description, keywords, title },
        } = site

        return (
          <Helmet
            title={title}
            meta={[
              {
                content: description,
                name: 'description',
              },
              {
                content: keywords,
                name: 'keywords',
              },
            ]}
          ></Helmet>
        )
      }}
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

const Footer = () => (
  <div className="footer">
    <NavMenu />
    <div>&copy; {new Date().getFullYear()} Matt Dalzell</div>
  </div>
)

export default Layout
