import React, { useEffect } from 'react'
import Like from './Like'
import { useState } from 'react'

function Votes({votes}) {
    const [vote, setVote] = useState(votes)
  return (
    <>
    <p>{vote}</p>
    <Like vote={vote} setVote={setVote}/>
    </>
 
  )
}
export default Votes