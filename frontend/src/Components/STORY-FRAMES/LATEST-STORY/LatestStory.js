import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../../Rating'
import { Avatar } from '@material-ui/core'

const LatestStory = ({ story }) => {
    return (
        <div className = 'latest-story'>
            <Link className = 'btn latest-story-title' to = {`/preview/${story._id}`}>
                {story.title}
            </Link>
            {/* <span > */}
            <Rating className = 'latest-story-rating' value = {story.rating} />
            {/* </span> */}
            <Link className = 'btn latest-story-author' to = {`/user-profile/${story.user}`} >
                {/* <Avatar style = {{ width: '100px' , height: '100px' }} className = 'latest-story-author-image'alt="Remy Sharp" src= {story.author.image} /> */}
                <span className = 'latest-story-author-name'>
                    {story.author.firstname} {story.author.lastname}
                </span>
            </Link>
            <Link className = 'btn latest-story-link-read' to = {`/reader/${story._id}`}>
                Read
            </Link>
        </div>    
    )
}

export default LatestStory
