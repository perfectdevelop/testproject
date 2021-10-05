import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../../Rating'
import { Avatar } from '@material-ui/core'

const TopStory = ({ story }) => {
    return (
        <div className = 'top-story'>
            <Link className = 'btn top-story-title' to = {`/preview/${story._id}`}>
                {story.title}
            </Link>
            <Rating className = 'top-story-rating' value = {story.rating} />
            <Link className = 'btn top-story-author' to = {`/user-profile/${story.user}`} >
                {/* <Avatar style = {{ width: '100px' , height: '100px' }} className = 'top-story-author-image'alt="Remy Sharp" src= {story.author.image} /> */}
                <span className = 'top-story-author-name'>
                    {story.author.firstname} {story.author.lastname}
                </span>
            </Link>
            <Link className = 'btn top-story-link-read' to = {`/reader/${story._id}`}>
                Read
            </Link>
        </div>
    )
}

export default TopStory
