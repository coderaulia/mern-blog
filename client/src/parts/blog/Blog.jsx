import React from 'react'
import './blog.css'
import Post from '../post/Post';

export default function Blog({posts}) {
   return (
      <div className="blog">
         {posts.map(p=>(
            <Post post={p}/>
         ))}
    </div>
   )
}
