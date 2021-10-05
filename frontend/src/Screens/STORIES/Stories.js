import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getStories } from "../../Actions/storyActions";
import AllStory from "../../Components/STORY-FRAMES/ALL-STORY/AllStory";
import Paginate from "../../Components/Paginate";

const Stories = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1;
  const keyword = match.params.keyword;

  const dispatch = useDispatch();
  const history = useHistory();

  const storiesList = useSelector((state) => state.storiesList);
  const { stories, pages, page } = storiesList;

  useEffect(() => {                                                                                                                                                                                                                             
    dispatch(getStories(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <div className="stories">
      <div className="stories-list">
        {<h2 className="nostory">No Story</h2>}
        {stories &&
          stories.map((story, index) => <AllStory story={story} key={index} />)}
      </div>
      <Paginate pages={pages} page={page} />
    </div>
  );
};

export default Stories;
