import { Link } from 'gatsby'
import React from 'react'

const NavMenu = () => {
  return (
    <ul className="nav nav-list">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <a
          href={process.env.GATSBY_RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <span className="glyphicon glyphicon-list-alt" />
            Resume
          </span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/mdalzell"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <span className="glyphicon glyphicon-wrench" />
            GitHub
          </span>
        </a>
      </li>
      <li>
        <a
          href="https://stackoverflow.com/story/mattdalzell"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <span className="glyphicon glyphicon-console" />
            Stack Overflow
          </span>
        </a>
      </li>
      <li>
        <a href="mailto:contact@mattdalzell.com">Email</a>
      </li>
    </ul>
  )
}

export default NavMenu
