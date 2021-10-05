import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../Rating";
import { Avatar } from "@material-ui/core";

const AllStory = ({ story }) => {
  return (
    <div className="all-story">
      <div className="all-story-title_rating">
        <Link className="btn all-story-title" to={`/preview/${story._id}`}>
          {story.title}
        </Link>

        <div className="all-story-rating">
          <Rating value={story.rating} />
        </div>
      </div>

      <Link
        to={`/user-profile/${story.user}`}
        className="btn all-story-author-image_name"
      >
        <Avatar alt="Remy Sharp" src={story.author.image} />
        <span className="all-story-author-name">
          {story.author.firstname} {story.author.lastname}
        </span>
      </Link>

      <div className="all-story-details">
        <div>
          <span>GENRE</span>
          <span>{story.genre}</span>
        </div>
        <div>
          <span>INTERESET AGE</span>
          <span>{story.interestAge}</span>
        </div>
      </div>
      <Link
        to={`/reader/${story._id}`}
        className="btn all-story-author_links-read"
      >
        Read
      </Link>
    </div>
  );
};

export default AllStory;
