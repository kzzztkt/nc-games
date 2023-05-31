import React from 'react'
import { useState } from 'react';



function Like({vote, setVote}) {
    const [voted, setVoted] = useState(false)
    // console.log(comments);

    function handleLike (id) {
        if(voted){
            setVoted(false);
            setVote(vote - 1) 
        } else {
            setVoted(true);
            setVote(vote + 1) 
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
