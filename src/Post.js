import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Post.css"
function Post(props) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={props.picture} className="post__avatar"/>
      <div className="post__topInfo">
        <h3>{props.username}</h3>
        {/* <p>{props.time}</p> */}
      </div>
      </div>
      <div className="post__bottom">
     <p>{props.message}</p>
      </div>

      <div className="post__image">
      <img src={props.image} alt=""/>
      </div>

    </div>
  )
}

export default Post
