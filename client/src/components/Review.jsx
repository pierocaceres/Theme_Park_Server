import React from 'react';
import { useState } from 'react'
import axios from 'axios'

function Review(props) {
    
    const [reviews, setReviews] = useState([])
    const [sendReviews, setSendReviews] = useState({comment: [...reviews]})
    const [userReview, setUserReview] = useState('')
    const getReviews = () => {
        if (userReview !== '') {
            let newReviews =  [...reviews, userReview]
            setReviews(newReviews)
            setSendReviews({comment: [...reviews]})
            console.log(sendReviews)
        }
    }

    const handleReview = (event) => {
        setUserReview(event.target.value)
    }

    return (
        <div>
            <input type="text" name="review" placeholder="Leave your review" value={userReview} onChange={(event) => handleReview(event)}/>
            <button onClick={() => getReviews()}>Submit</button>
        </div>
    );
}

export default Review;