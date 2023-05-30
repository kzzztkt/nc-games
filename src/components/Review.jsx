import React from 'react'
import { useState, useEffect } from 'react'
import { getReviews } from '../utils/utils';
import { Link, useParams } from 'react-router-dom';
import { getReviewById, getComments } from '../utils/utils';




function Review() {
    const [loading, setLoading] = useState(true);
    const { review_id } = useParams();
    const [comments, setComments] = useState(
        [
            {
                "comment_id": 41,
                "body": "Ex id ipsum dolore non cillum anim sint duis nisi anim deserunt nisi minim. Fugiat sint et proident ex do consequat est. Nisi minim laboris mollit cupidatat.",
                "review_id": 18,
                "author": "jessjelly",
                "votes": 9,
                "created_at": "2021-03-27T14:15:31.110Z"
                }
        ]

    )
 function deleteComments(id){
}

    
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
            getComments(review_id)
            .then((data) => {
                // console.log(data);
                setComments(data)
      
            })
        })
        .then(() => {
            setLoading(false)
        })
    }, [])


    
    


    
    useEffect(() => {
        if(loading === true){
            document.getElementById('loadingScreen').style.display = 'block';
        } else {
            document.getElementById('loadingScreen').style.display = 'none';
        }
    }, [loading])

  return (
   <>
   <div id="loadingScreen">
    <h2>Loading...</h2>
   </div>
    <section className="reviewContainer">
        <div key={`${review.created_at}`} className="reviewCard">
            <h3>Game: {review.title}</h3>
            <h4>Designer {review.designer}</h4>
            <img src={review.review_img_url}></img>
            <p>Review by: {review.owner}</p>
            <p>Comments: {review.comment_count}</p>

        </div>
    </section>
    <section className='commentSection'>
        {comments.map((comment) =>{
            return(
        <div key={`${comment.created_at}`} className="commentCard">
            <h3>{comment.author}</h3>
            <h4>{comment.body}</h4>
            <p>{comment.created_at.slice(0, 10)}</p>
            <p>Votes: {comment.votes}</p>
            <button onClick={() => deleteComments(comment.comment_id)}>Delete</button>
        </div>
            )
        })}

    </section>
    </>
  )
}



export default Review