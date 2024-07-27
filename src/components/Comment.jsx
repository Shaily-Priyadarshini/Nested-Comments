import React, { useState } from 'react'

const Comment = ({content,votes,timestamp,replies}) => {
const[expand,setExpand]=useState(false);
const [reply,setReply]=useState("");

const handleReply=()=>{
  setExpand(!expand);
}

const handleChange=(e)=>{
  setReply(e.target.value);


}

const handleReplySubmit=()=>{

  setReply("");
}

  return (
    <div className='box' >
   
        <p className='maincomment'>{content} </p>
        <p className='info'>Votes : {votes}</p>
        <p className='info'>{new Date(timestamp).toLocaleString()}</p>

        <div>

            <button onClick={handleReply}>{expand?"HideReplies":"Reply"}</button>
            <button>Edit</button>
            <button>Delete</button>
            
        </div>
        {expand &&
          <div className='expand'> 
          <div className='container'>
            <textarea className="commentbox " value={reply} onChange={handleChange} rows={3} cols={50} placeholder='Please add your comment...'/>
            <button className='submit-btn' onClick={handleReplySubmit}>Submit</button>
          </div>
        {replies?.map((reply)=>{
          return(
        <Comment 
          content={reply.content}
          votes={reply.votes}
          timestamp={reply.timestamp}
          replies={reply.replies}
          key={reply.id}
          />)
          
        })}
        </div>
        }
    </div>
  )
}
export default Comment;