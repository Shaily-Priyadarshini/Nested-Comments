import React, { useState } from 'react'
import Comment from './Comment'
import '../index.css'
import { useCommentTree } from '../hooks/useCommentTree';

export default function NestedComment ({data}) {
  const[comment,setComment]=useState('')
  const{comments:commentData,insertComment}=useCommentTree(data);

  const handleReply=(commentId,content)=>{
    insertComment(commentId, content);
    
  }

  const handleChange=(e)=>{
    setComment(e.target.value);

  }

  const handleSubmit=()=>{
    if (comment) {
      handleReply(undefined, comment);
      setComment("");
    }
  }



  return (
    <div>
      <div className='container'>
        <textarea className="commentbox " 
        value={comment}
        onChange={handleChange}
        rows={3} cols={50} placeholder='Please add your comment...'/>
        <button className='submit-btn'
        onClick={handleSubmit}
        >Submit</button>
        </div>
        
        {data.map((comment)=><Comment 
        key={comment.id} 
        content={comment.content} 
        votes={comment.votes}
        timestamp={comment.timestamp}
        replies={comment.replies}
        onSubmitComment={handleReply}
        />)
            }
    </div>
    
  )
}
