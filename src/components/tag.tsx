import { Link } from 'gatsby'
import React from 'react'

interface IProps {
  value: string
}

const Tag = ({ value }: IProps) => (
  <Link to={'/blog?tag=' + value} className="tag">
    {'#' + value}
  </Link>
)

export default Tag
