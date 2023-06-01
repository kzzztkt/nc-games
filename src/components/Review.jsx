import React from 'react'
import { useState, useEffect } from 'react'
import { getReviews } from '../utils/utils';
import { Link, useParams } from 'react-router-dom';
import { getReviewById, getComments } from '../utils/utils';
import Comments from './Comments';
import Votes from './Votes';




function Review() {
    const [loading, setLoading] = useState(true);
    const [voted, setVoted] = useState(false);
    const { review_id } = useParams();
    const [review, setReview] = useState(
        [{
            category: "strategy",
            comment_count: "4",
            created_at: "1970-01-10T02:56:38.400Z",
            designer: "Emerson Matsuuchi",
            owner: "tickle122",
            review_body: "This game reminds me of the stress-free environment described in a song sung by a crab in the famous film about a mermaid. Plenty of coral collecting, and reef building to keep you entertained ",
            review_id: 18,
            review_img_url: "https://images.pexels.com/photos/6333894/pexels-photo-6333894.jpeg?w=700&h=700",
            title: "Reef",
            votes: 6
        }]
    );

    useEffect(()=>{
        setLoading(true);
        getReviewById(review_id)
        .then((data) => {
            setReview(data)
            
        })
        .then(() => {
            setLoading(false)
        })
    }, [])



  return (
   <>
   {loading ? <div id="loadingScreen">
    <h2>Loading...</h2>
   </div> : 
   
    <section className="reviewContainer">
        <div key={`${review.created_at}`} className="reviewCard">
            <h3>Game: {review.title}</h3>
            <h4>Designer {review.designer}</h4>
            <img src={review.review_img_url}></img>
            <p>{review.review_body}</p>
            <p>Review by: {review.owner}</p>
            <p>Comments: {review.comment_count}</p>
            <Votes votes={Number(review.votes)} review={{...review}} review_id={review.review_id} voted={voted} setVoted={setVoted}/>

        </div>
    </section>
}
    <Comments review_id={review_id}/>
    
  
    </>
  )
}



export default Review