import React, { useEffect, useState } from 'react'
import "./Feed.css"
import Message from './Message'
import StoryReel from './StoryReel'
import Post from "./Post"
import db from "./firebase"

function Feed() {

  const [Posts,setPosts]=useState([])

  useEffect(() => {
   
    db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>setPosts(snapshot.docs.map(doc=>({id:doc.id,data:doc.data()}))))}, [])

    console.log(Posts)
  return (

    
    <div className="feed">
      <StoryReel/>
      <Message/>

      {Posts.map(post=>(
          <Post
          key={post.id}
          picture={post.data.picture}
          image={post.data.image}
          username={post.data.username}
          message={post.data.message}
          
          />

      ))}


      {/* <Post 
      picture="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" 
      username="jas"
       time="10"
        message="hey"
        image="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"/> */}
    </div>
  )
}

export default Feed
