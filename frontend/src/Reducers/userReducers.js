
import { 
    
    USERS_LIST_REQUEST,
    USERS_LIST_SUCCESS,
    USERS_LIST_FAIL,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_ACTIVATE_REQUEST,
    USER_ACTIVATE_SUCCESS,
    USER_ACTIVATE_FAIL,

    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    
    USER_UPDATE_FAIL,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_REQUEST,

    USER_UPDATE_IMAGE_REQUEST,
    USER_UPDATE_IMAGE_SUCCESS,
    USER_UPDATE_IMAGE_FAIL,
    USER_UPDATE_IMAGE_RESET,

    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,

    USER_FOLLOW_REQUEST,
    USER_FOLLOW_SUCCESS,
    USER_FOLLOW_FAIL,

    USER_UNFOLLOW_REQUEST,
    USER_UNFOLLOW_SUCCESS,
    USER_UNFOLLOW_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,

    USER_RESET_PASSWORD_REQUEST,
    USER_RESET_PASSWORD_SUCCESS,
    USER_RESET_PASSWORD_FAIL,

    USER_NEW_PASSWORD_REQUEST,
    USER_NEW_PASSWORD_SUCCESS,
    USER_NEW_PASSWORD_FAIL

} from '../Constants/userConstants' 


export const usersListReducer = (state = { users: [] } , action) => {
    switch (action.type) {
        case USERS_LIST_REQUEST: 
            return { loading: true , users: [] }
        case USERS_LIST_SUCCESS: 
            return { loading: false , users: action.payload }
        case USERS_LIST_FAIL: 
            return { loading: false , error: action.payload }
        default: 
            return state
    }
}

export const userDetailsReducer = (state = { user: {} } , action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST: 
            return { loading: true , user: {} }
        case USER_DETAILS_SUCCESS: 
            return { loading: false , user: action.payload }
        case USER_DETAILS_FAIL: 
            return { loading: false , error: action.payload }
        default: 
            return state
    }
}

export const userLoginReducer = (state = {} , action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST: 
            return { loading: true }
        case USER_LOGIN_SUCCESS: 
            return { loading: false , userInfo: action.payload }
        case USER_LOGIN_FAIL: 
            return { loading: false , error: action.payload }
        default: 
            return state
    }
}

export const userRegisterReducer = (state = {} , action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST: 
            return { loading: true }
        case USER_REGISTER_SUCCESS: 
            return { loading: false , success: true , message: action.payload }
        case USER_REGISTER_FAIL: 
            return { loading: false , error: action.payload }
        default: 
            return state
    }
}
export const userActivateReducer = (state = {} , action) => {
    switch (action.type) {
        case USER_ACTIVATE_REQUEST: 
            return { loading: true }
        case USER_ACTIVATE_SUCCESS: 
            return { loading: false , userInfo: action.payload}
        case USER_ACTIVATE_FAIL: 
            return { loading: false , error: action.payload }
        default: 
            return state
    }
}

export const userDeleteReducer = (state = {} , action) => {
    switch (action.type) {
        case USER_DELETE_REQUEST: 
            return { loading: true }
        case USER_DELETE_SUCCESS: 
            return { loading: false , message: action.payload }
        case USER_DELETE_FAIL: 
            return { loading: false , error: action.payload }
        default: 
            return state
    }
}

export const userUpdateReducer = (state = {} , action) => {
    switch (action.type) {
        case USER_UPDATE_REQUEST: 
            return { ...state , loading: true }
        case USER_UPDATE_SUCCESS: 
            return { ...state , loading: false , userInfo: action.payload}
        case USER_UPDATE_FAIL: 
            return { loading: false , error: action.payload }
        default: 
            return state
    }
}


export const userFollowReducer = (state = { success: false } , action) => {
    switch (action.type) {
        case USER_FOLLOW_REQUEST: 
            return { loading: true }
        case USER_FOLLOW_SUCCESS: 
            return { loading: false , success: true , message: action.payload }
        case USER_FOLLOW_FAIL:
            return { loading: false , error: action.payload }
        default: 
            return state
    }
}

export const userUnfollowReducer = (state = { success: true } , action) => {
    switch (action.type) {
        case USER_UNFOLLOW_REQUEST: 
            return { loading: true }
        case USER_UNFOLLOW_SUCCESS: 
            return { loading: false , success: false , message: action.payload }
        case USER_UNFOLLOW_FAIL: 
            return { loading: false , error: action.payload }
        default: 
            return state
    }
}

export const userResetPasswordReducer = (state = {} , action) => {
    switch (action.type) {
        case USER_RESET_PASSWORD_REQUEST: 
            return { loading: true }
        case USER_RESET_PASSWORD_SUCCESS: 
            return { loading: false , message: action.payload }
        case USER_RESET_PASSWORD_FAIL: 
            return { loading: false , error: action.payload }
        default: 
            return state
    }
}

export const userNewPasswordReducer = (state = {} , action) => {
    switch (action.type) {
        case USER_NEW_PASSWORD_REQUEST: 
            return { loading: true }
        case USER_NEW_PASSWORD_SUCCESS: 
            return { loading: false , message: action.payload }
        case USER_NEW_PASSWORD_FAIL: 
            return { loading: false , error: action.payload }
        default: 
            return state
    }
}