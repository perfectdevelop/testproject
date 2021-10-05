import React from 'react'
import moment from 'moment'


const MyStory = ({ onDelete , story }) => {

    return (
        <div className = 'my-story'>

            <div className = 'my-story-title'>
                {story.title}
            </div> 
            <span className = 'my-story-released'>
                {moment(story.released).format("MMMM YYYY")}
            </span>
            <button className = 'btn' onClick = {() => onDelete(story._id)}>Delete</button>
        </div>
    )
}

export default MyStory
