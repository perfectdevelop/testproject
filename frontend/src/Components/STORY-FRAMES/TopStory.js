import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../../Components/Rating'

const TopStory = ({ story }) => {
    return (
        <div className = 'top-story'>

            <div className = 'top-story-title_rating'>
                <div >
                    <Link className = 'top-story-title' to = {`/preview/${story._id}`}>
                        {story.title}
                    </Link>
                </div>

                <div className = 'top-story-rating'>
                    <Rating 
                    value = {story.rating}
                    />
                </div>  
            </div>

            <div className = 'top-story-author_links'>
                
                <Link  to = {`/user-profile/${story.user}`} className = 'btn top-story-author'>

                    <img src = {story.author.image} className = 'top-story-author-image'/>
                    <span className = 'top-story-author-name'>
                        {story.author.firstname} {story.author.lastname}
                    </span>
                </Link>

                <Link to = {`/reader/${story._id}`} className = 'btn top-story-author_links-read'>
                    Read
                </Link>
               
            </div>
            
            
     
        </div>
    )
}

export default TopStory
