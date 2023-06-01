import React from 'react'
import { useState } from 'react';
import { patchReview } from '../utils/utils'



function Like({vote, setVote, review_id, voted, setVoted}) {
    

    function handleLike () {
        if(voted){
            setVoted(false);
            setVote(vote - 1) 
            patchReview(review_id, {inc_vote:-1})
            .then(() => {
            })
            .catch(() => {
              alert('Like failed please try again later');
            })
        } else {
            setVoted(true);
            setVote(vote + 1) 
            patchReview(review_id, {inc_vote:1})
           .then(() => {
        })
        .catch(() => {
          alert('Like failed please try again later');
        })
      }
    }

  return (
    <>
    {voted ? 
    <p onClick={handleLike}><span className="material-symbols-outlined material-symbols-outlined-blue">
    thumb_up
    </span></p> 
    :
    <p onClick={handleLike}><span className="material-symbols-outlined">
    thumb_up
    </span></p>
    }
  </>
  )
}

export default Like
