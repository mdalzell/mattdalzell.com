import React from 'react'
import Helmet from 'react-helmet'

import { DateUtil } from '../util'
import NavMenu from './nav-menu'
import { Settings } from '../settings/settings'
import settings from '../settings/settings.json'

import '../styles/index.css'
import { NavItem } from '../settings/navItem'

interface IProps {
  children: React.ReactNode
}

const Layout = ({ children }: IProps): JSX.Element => {
  const { description, keywords, title, menu } = settings as Settings
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
          <NavMenu navItems={menu} />
        </div>
        <div>{children}</div>
      </div>
      <Footer navItems={menu} />
    </>
  )
}

const Footer = ({ navItems }: { navItems: NavItem[] }) => (
  <footer>
    <NavMenu navItems={navItems} />
    <div>&copy; {DateUtil.getCurrentYear()} Matt Dalzell</div>
  </footer>
)

export default Layout
