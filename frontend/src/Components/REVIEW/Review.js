import React , { useState , useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useHistory , Link } from 'react-router-dom'
import { Avatar } from '@material-ui/core'

import moment from 'moment'

const Review = ({ review }) => {
    return (
        <div className = 'review'>
            
            <div className = 'review-creator_rating'>

                <div className = 'review-creator'>
                    <Link className = 'review-creator-image' to = {`/user-profile/${review.user}`}>
                        {/* <Avatar style = {{ width: '30px' , height: '30px' }} className = 'story-preview-info-author-image' src= {review.image} /> */}
                    </Link>                    
                    <Link className = ' review-creator-name' to = {`/user-profile/${review.user}`}>
                        {review.firstname} {review.lastname}

                    </Link>
                </div>
                <span className = 'review-rating'>
                    {/* <Rating/> */}

                </span>
            </div>

            <span className = 'review-comment'>
                {review.comment}
            </span>

            <span className = 'review-created-at'>
                {moment(review.createdAt).format('MMMM YYYY')}
            </span>
        
        
        </div>
    )
}

export default Review
