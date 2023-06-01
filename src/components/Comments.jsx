import React, { useEffect } from 'react'
import { useState } from 'react'
import { getComments } from '../utils/utils'


function Comments({review_id}) {
    const [comments, setComments] = useState([])
useEffect(() => {
    getComments(review_id)
            .then((data) => {
                setComments(data.comments)
            }).catch((err) => {
                console.log(err);
            })
},[])

  return (
    <section className='commentSection'>
        {comments.map((comment) =>{
            return(
        <div key={`${comment.comment_id}`} className="commentCard">
            <h3>{comment.author}</h3>
            <h4>{comment.body}</h4>
            <p>{comment.created_at.slice(0, 10)}</p>
            <p>{comment.votes}</p>
        </div>
            )
        })}

    </section>
  )
}


export default Comments;