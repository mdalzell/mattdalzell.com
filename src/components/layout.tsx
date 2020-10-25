import React from 'react'
import Helmet from 'react-helmet'

import { DateUtil } from '../util'
import NavMenu from './nav-menu'
import { Settings } from '../settings/settings'
import settings from '../settings/settings.json'

import '../styles/index.css'

interface IProps {
  children: React.ReactNode
}

const Layout = ({ children }: IProps): JSX.Element => {
  const { description, keywords, title } = settings as Settings
  return (
    <>
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
      <div className="container">
        <div className="hidden-sm">
          <NavMenu />
        </div>
        <div>{children}</div>
      </div>
      <Footer />
    </>
  )
}

const Footer = () => (
  <footer>
    <NavMenu />
    <div>&copy; {DateUtil.getCurrentYear()} Matt Dalzell</div>
  </footer>
)

export default Layout
