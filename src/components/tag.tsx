import React from 'react'
import { Link } from 'gatsby'

const Tag = ({ value }) => (
  <Link to={'/blog?tag=' + value} className="tag">
    {'#' + value}
  </Link>
)

export default Tag
