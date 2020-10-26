import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./Message.css"
import { useStateValue } from './StateProvider';
import db from "./firebase"
import firebase from "./firebase"
function Message() {

  const [{user},dispatch]=useStateValue();

  const [Input, setInput] = useState("") ;
  const [Image, setImage] = useState("") ;
  

  // var newDate = new Date();
  // var datetime = "LastSync: " + newDate.today() + " @ " + newDate.timeNow();

 const ButtonHandler =e=>{
    e.preventDefault();
    db.collection('posts').add({
      message:Input,
      timestamp:"time",
      picture:user.photoURL,
      username:user.displayName,
      image:Image

    })
    setInput("");
    setImage("");
  }
  return (
    <div className="message">
      <div className="message__top">
        <Avatar src={user.photoURL}/> 
        <form>
        <input type="text" value={Input} 
        onChange={(e)=>setInput(e.target.value)}
        placeholder={`Whats on your mind, ${user.displayName} ?`} />

        <input type="text" placeholder="Image URL" value={Image}  
        onChange={(e)=>setImage(e.target.value)}/>
        <button onClick={ButtonHandler} type="submit">Submit</button>
        </form>
        
      </div>
      {/* <div className="message__bottom">
      </div> */}
    </div>
  )
}

export default Message
