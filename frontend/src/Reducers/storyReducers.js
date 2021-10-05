import {
    STORIES_LIST_REQUEST,
    STORIES_LIST_SUCCESS,
    STORIES_LIST_FAIL,
    STORIES_LIST_RESET,

    STORIES_TOP_REQUEST,
    STORIES_TOP_SUCCESS,
    STORIES_TOP_FAIL,
    STORIES_TOP_RESET,

    STORIES_LATEST_REQUEST,
    STORIES_LATEST_SUCCESS,
    STORIES_LATEST_FAIL,
    STORIES_LATEST_RESET,

    STORY_DETAILS_REQUEST,
    STORY_DETAILS_SUCCESS,
    STORY_DETAILS_FAIL,
    STORY_DETAILS_RESET,

    STORY_WRITE_DETAILS_REQUEST,
    STORY_WRITE_DETAILS_SUCCESS,
    STORY_WRITE_DETAILS_FAIL,
    STORY_WRITE_DETAILS_RESET,

    STORY_WRITE_CONTENT_REQUEST,
    STORY_WRITE_CONTENT_SUCCESS,
    STORY_WRITE_CONTENT_FAIL,
    STORY_WRITE_CONTENT_RESET,

    MY_STORIES_REQUEST,
    MY_STORIES_SUCCESS,
    MY_STORIES_FAIL,

    STORY_DELETE_REQUEST,
    STORY_DELETE_SUCCESS,
    STORY_DELETE_FAIL,

    STORY_ADD_REVIEW_REQUEST,
    STORY_ADD_REVIEW_SUCCESS,
    STORY_ADD_REVIEW_FAIL,

    STORY_REPORT_REQUEST,
    STORY_REPORT_SUCCESS,
    STORY_REPORT_FAIL,
    STORY_DELETE_RESET,


} from '../Constants/storyConstants'

export const storiesListReducer = (state = { stories: [] } , action) => {
    switch (action.type) {
        case STORIES_LIST_REQUEST:
            return { loading: true , stories: [] }
        case STORIES_LIST_SUCCESS:
            return { 
                loading: false , 
                stories: action.payload.stories,
                pages: action.payload.pages,
                page: action.payload.page,
            }
        case STORIES_LIST_FAIL:
            return { loading: false , error: action.payload }
        default:
            return state
    }
}


export const storiesTopListReducer = (state = { topStories: [] } , action) => {
    switch (action.type) {
        case STORIES_TOP_REQUEST:
            return { loading: true , topStories: [] }
        case STORIES_TOP_SUCCESS:
            return { loading: false , topStories: action.data }
        case STORIES_TOP_FAIL:
            return { loading: false , error: action.payload }
        default:
            return state
    }
}

export const storiesLatestListReducer = (state = { latestStories: [] } , action) => {
    switch (action.type) {
        case STORIES_LATEST_REQUEST:
            return { loading: true , latestStories: [] }
        case STORIES_LATEST_SUCCESS:
            return { loading: false , latestStories: action.data }
        case STORIES_LATEST_FAIL:
            return { loading: false , error: action.payload }
        default:
            return state
    }
}

export const myStoriesListReducer = (state = { myStories: [] } , action) => {
    switch (action.type) {
        case MY_STORIES_REQUEST:
            return { loading: true , myStories: [] }
        case MY_STORIES_SUCCESS:
            return { loading: false , myStories: action.payload }
        case MY_STORIES_FAIL:
            return { loading: false , error: action.payload }
        default:
            return state
    }
}
export const storyDetailsReducer = (state = { story: { reviews: [] , author: {} } } , action) => {
    switch (action.type) {
        case STORY_DETAILS_REQUEST:
            return { loading: true , story: { reviews: [] , author: {} } }
        case STORY_DETAILS_SUCCESS:
            return { loading: false , story: action.payload }
        case STORY_DETAILS_FAIL:
            return { loading: false , error: action.payload }
        default:
            return state
    }
}

export const storyWriteDetailsReducer = (state = { storyInfo: {} } , action) => {
    switch (action.type) {
        case STORY_WRITE_DETAILS_REQUEST:
            return { loading: true , storyInfo: {} }
        case STORY_WRITE_DETAILS_SUCCESS:
            return { loading: false , storyInfo: action.payload }
        case STORY_WRITE_DETAILS_FAIL:
            return { loading: false , error: action.payload }
        
        default:
            return state
    }
}

export const storyWriteContentReducer = (state = { story: {} } , action) => {
    switch (action.type) {
        case STORY_WRITE_CONTENT_REQUEST:
            return { loading: true , story: {} }
        case STORY_WRITE_CONTENT_SUCCESS:
            return { loading: false , story: action.payload , success: true }
        case STORY_WRITE_CONTENT_FAIL:
            return { loading: false , error: action.payload }
        default:
            return state
    }
}

export const storyDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case STORY_DELETE_REQUEST:
            return { loading: true }
        case STORY_DELETE_SUCCESS:
            return { loading: false , success: true }
        case STORY_DELETE_FAIL:
            return { loading: false , error: action.payload }
    
        default:
            return state
    }
  }


export const storyAddReviewReducer = (state = {} , action) => {
    switch (action.type) {
        case STORY_ADD_REVIEW_REQUEST:
            return { loading: true }
        case STORY_ADD_REVIEW_SUCCESS:
            return { loading: false , message: action.payload , success: true }
        case STORY_ADD_REVIEW_FAIL:
            return { loading: false , error: action.payload }
        default:
            return state
    }
}