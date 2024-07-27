import React from 'react'
import Comment from './Comment'
import '../index.css'

export default function NestedComment ({data}) {
  return (
    <div>
      <div className='container'>
        <textarea className="commentbox " rows={3} cols={50} placeholder='Please add your comment...'/>
        <button className='submit-btn'>Submit</button>
        </div>
        
        {data.map((comment)=><Comment 
        key={comment.id} 
        content={comment.content} 
        votes={comment.votes}
        timestamp={comment.timestamp}
        replies={comment.replies}
        />)
            }
    </div>
    
  )
}
