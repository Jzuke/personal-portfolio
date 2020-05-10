import React from 'react'
import { Link } from 'react-router-dom'

const TitleCard = (props) => {
return(
<li className="project-entry-container">
    <Link to={`projects/${props.title}`}>
      <h2 className="project-title">{props.title.replace(/-/g, ' ')}</h2>
    </Link>
    <h3 className="project-info">{props.info}</h3>
</li>
)
}

export {TitleCard as default};