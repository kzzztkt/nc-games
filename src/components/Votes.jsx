import React, { useEffect } from 'react'
import Like from './Like'
import { useState } from 'react'


//VOTES IS THE NUMBER COMING THROUGH
function Votes({votes, review, review_id, voted, setVoted}) {
    const [vote, setVote] = useState(votes)
    // console.log(updatedReview);

  return (
    <>
    <p>{vote}</p>
    <Like vote={vote} setVote={setVote} review_id={review_id} voted={voted} setVoted={setVoted}/>
    </>
 
  )
}
export default Votes