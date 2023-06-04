import React, { useEffect, useState } from 'react'
import { postComment } from '../utils/utils';
import { useContext } from 'react';
import { UserContext } from '../utils/context';

function PostingForm({setComments, review_id}) {
  const [validForm, setValidForm] = useState(false);
  const {username, setUsername} = useContext(UserContext)
  const [comment, setComment] = useState('')
  const [commentToSend, setCommentToSend] = useState(
    {
      username: username,
      body: comment
    }
  )
  useEffect(() =>{
    if(comment !== ''){
      // document.getElementById("submitButton").disabled = "false";
      setValidForm(true)
      setCommentToSend({
        username: username,
        body: comment
      })
    } else {
      setValidForm(false);
    }
  },[comment])


  function handleFormSubmit(event){
    event.preventDefault();
    if(validForm){
      document.getElementById("submitButton").disabled = true;
      postComment(review_id, commentToSend)
            .then((data) => {
                document.getElementById("submitButton").disabled = false;
                document.getElementById('positiveInputValidation').style.display = 'block'
                document.getElementById('negativeInputValidation').style.display = 'none'
                document.getElementById('commentArea').value ='';
                setComment('')
                setComments((currComments) => {
                  return ([{author: username, body: comment, created_at: `${String(new Date())}`, votes:"0"}, ...currComments])
                })
            }).catch((err) => {
                console.log(err);
                alert('Oops something went wrong')
            })
    } else {
      document.getElementById('positiveInputValidation').style.display = 'none'
      document.getElementById('negativeInputValidation').style.display = 'block'
    }
  }

 function commentSetter(event){
  setComment(event.target.value)
 }

  return (
    <div className="commentCard">
      <p id='negativeInputValidation'>*Missing feilds - please fill in username and comment*</p>
      <p id='positiveInputValidation'>Comment submitted!</p>
    <p>Post a comment</p>
    <form onSubmit={handleFormSubmit} id="commentForm">
        <textarea id="commentArea" onChange={commentSetter} placeholder='Write your comment here'  className='inputsOnForm'>
        </textarea>
        <button id="submitButton" type="submit">Post comment</button>
    </form>
    </div>
  )
}

export default PostingForm