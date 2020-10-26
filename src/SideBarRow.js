import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SideBarRow.css"
function SideBarRow(props) {
  return (
    <div className="sidebarRow">
        {props.src && <Avatar src={props.src}/>}
        {props.Icon}
      <p>{props.title}</p>
    </div>
  )
}

export default SideBarRow
