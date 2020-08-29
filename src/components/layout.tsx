import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import { DateUtil } from '../util'
import NavMenu from './nav-menu'

import '../styles/index.css'

interface IProps {
  children: React.ReactNode
}

interface ISiteMetaData {
  site: {
    siteMetadata: {
      description: string;
      keywords: string;
      title: string;
    };
  };
}

const Layout = ({ children }: IProps): JSX.Element => (
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
      render={({ site }: ISiteMetaData) => {
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
    <div className="container">
      <div className="hidden-sm">
        <NavMenu />
      </div>
      <div>{children}</div>
    </div>
    <Footer />
  </div>
)

const Footer = () => (
  <footer>
    <NavMenu />
    <div>&copy; {DateUtil.getCurrentYear()} Matt Dalzell</div>
  </footer>
)

export default Layout
