import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Story.css"
function Story(props) {
  return (
    <div className="story">
      <Avatar src={props.src} className="avatar"/>
      {/* <img src={props.Imagesrc} alt=""/> */}
      <p>{props.name}</p>

    </div>
  )
}

export default Story
