import { Link } from 'gatsby'
import React from 'react'
import { NavItem } from '../settings/navItem'

const NavMenu = ({ navItems }: { navItems: NavItem[] }): JSX.Element => {
  return (
    <ul className="nav nav-list">
      {navItems.map(({ external, title, url }) => {
        return (
          <li key={title + url}>
            {external ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            ) : (
              <Link to={url}>{title}</Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default NavMenu
