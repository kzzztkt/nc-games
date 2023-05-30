import React from 'react'
import { useState, useEffect } from 'react'
import { getReviews } from '../utils/utils';

function Reviews() {
    const[page, setPAge] = useState(true)
    const [reviews, setReviws] = useState(
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
        getReviews()
        .then((data) => {
            setReviws(data)
            
        })

    }, [])
    console.log(reviews);

  return (
    <section className="reviewContainer">
        {reviews.map((review) =>{
            return(
        <div className="reviewCard">
            <h3>Game: {review.title}</h3>
            <h4>Designer {review.designer}</h4>
            <img src={review.review_img_url}></img>
            <p>Review by: {review.owner}</p>
            <p>Comments: {review.comment_count}</p>
        </div>

            )
        })}

    </section>
  )
}



export default Reviews