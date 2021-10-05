import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../../Rating'
import { Avatar } from '@material-ui/core'

const TopStoryCarousel = () => {

    const storiesTopList = useSelector((state) => state.storiesTopList)
    const { topStories } = storiesTopList

    return (
        <Carousel pause='hover' className='top-story-carousel'>
            {topStories && topStories.map((story) => (
                <Carousel.Item className='top-story-carousel-item' key = {story._id}>
                    <Link className = ' top-story-carousel-title' to = {`/preview/${story._id}`}>{story.title}</Link>
                    <span><Rating value = {story.rating} /></span>
                    <Link className = 'btn top-story-carousel-author' to = {`/user-profile/${story.user}`} >
                        <img src={story.author.image}/>
                        <span className = 'top-story-carousel-author-name'>
                            {story.author.firstname} {story.author.lastname}
                        </span>
                    </Link>
                    <Link className = 'btn top-story-carousel-link-read' to = {`/reader/${story._id}`}>
                        Read
                    </Link>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default TopStoryCarousel
