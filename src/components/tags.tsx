
import React from 'react'
import { Link } from 'gatsby'


interface IProps {
    values: string[]
}

const Tags = ({ values }: IProps) => <>
    <h3>Tags</h3>
    <ul className="tags">
        {values.map(value => (
            <li key={value}>
                <Link to={'/blog/all?tag=' + value}>
                    {'#' + value}
                </Link>
            </li>
        ))}
    </ul>
</>

export default Tags