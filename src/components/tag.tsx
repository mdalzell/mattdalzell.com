import { Link } from 'gatsby'
import React from 'react'

const Tag = ({ value }) => (
  <Link to={'/blog?tag=' + value} className="tag">
    {'#' + value}
  </Link>
)

export default Tag
