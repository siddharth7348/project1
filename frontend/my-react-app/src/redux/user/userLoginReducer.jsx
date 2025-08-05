import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED } from "./userTypes";

const initialState = {
    loading: false,
    userInfo: localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{},
    error: '',
    userLoggedIn: false
}


const userLoginReducer = (state=initialState, action) => {
    switch(action.type) {
        case USER_LOGIN_REQUEST: return {
            ...state,
            loading: true
        }

        case USER_LOGIN_SUCCESS: return {
            loading: false,
            userInfo: action.payload,
            error: '',
            userLoggedIn: true

        }

    case USER_LOGIN_FAILED: return {

            loading: false,
            userInfo: {},
            error: action.payload,
            userLoggedIn: false


        }

    default: return state    



    }
}

export default userLoginReducer