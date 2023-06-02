import React from 'react'
import { deleteComment } from '../utils/utils'


function DeleteComment({comment_id, setComments}) {

function delayRemove(){
  setComments((currComments) => {
    document.getElementById('confirmationMessage').style.display = 'none'
    return ([...currComments].filter(comment => comment.comment_id != comment_id))
  })
}
function handleDelete(){
  document.getElementById(`deleteButton${comment_id}`).disabled = true;
  document.getElementById('confirmationMessage').style.display = 'block'
  deleteComment(comment_id)
  .then(() => {
    setTimeout(delayRemove, 2000)
  })

}

  return (
    <>
    <div id="confirmationMessage"><p>Comment Deleted</p></div>
    <button id={`deleteButton${comment_id}`} onClick={handleDelete}>Delete comment</button>
    </>
  )
}

export default DeleteComment