import React, { useEffect } from 'react'
import { useState } from 'react'
import { getComments } from '../utils/utils'
import PostingForm from './PostingForm'
import DeleteComment from './DeleteComment'
import { UserContext } from '../utils/context';
import { useContext } from 'react';

function Comments({review_id}) {
    const { username, setUsername } = useContext(UserContext)
    const [comments, setComments] = useState([])
useEffect(() => {
    getComments(review_id)
            .then((data) => {
                setComments(data.comments)
            }).catch((err) => {
                console.log(err);
            })
},[])

// console.log(comments);





  return (
    <section className='commentSection'>
        <PostingForm setComments={setComments} review_id={review_id}/>
        {comments.map((comment) =>{
            return(
        <div key={`${comment.comment_id}`} className="commentCard">
            <h3>{comment.author}</h3>
            <h4>{comment.body}</h4>
            <p>{comment.created_at.slice(0,10)}</p>
            <p>{comment.votes}</p>
            { comment.comment_id && comment.author === username ?
            <DeleteComment setComments={setComments} comment_id={comment.comment_id}/>
            :
            null
            }
        </div>
            )
        })}

    </section>
  )
}


export default Comments;