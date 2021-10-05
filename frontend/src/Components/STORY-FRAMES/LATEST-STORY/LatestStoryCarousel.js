import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../../Rating'
import { Avatar } from '@material-ui/core'

const LatestStoryCarousel = () => {

    const dispatch = useDispatch()
    const storiesLatestList = useSelector((state) => state.storiesLatestList)
    const { latestStories } = storiesLatestList

    return (
        <Carousel pause='hover' className='latest-story-carousel'>
            
            {latestStories&&latestStories.map((story) => (
                
                <Carousel.Item className='latest-story-carousel-item' key = {story._id}>
                    
                    <Link className = ' latest-story-carousel-title' to = {`/preview/${story._id}`}>{story.title}</Link>
                    <span><Rating value = {story.rating} /></span>
                    <Link className = 'btn latest-story-carousel-author' to = {`/user-profile/${story.user}`} >
                        {/* <Avatar alt="Remy Sharp" src= {story.author.image} /> */}
                        <span className = 'latest-story-carousel-author-name'>
                            {story.author.firstname} {story.author.lastname}
                        </span>
                    </Link>
                    <Link className = 'btn latest-story-carousel-link-read' to = {`/reader/${story._id}`}>
                        Read
                    </Link>
                </Carousel.Item>
            ))}
            
        </Carousel>
    )
}

export default LatestStoryCarousel
