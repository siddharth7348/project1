import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED } from "./userTypes";

import axios from "axios";

export const userLoginAction = (username, password) => async (dispatch, getState) => {
    try{

        const config = {
            Headers: {
                'Content-type': 'application/json'
            }
        }

        dispatch({
            type: USER_LOGIN_REQUEST
        })

        await axios.post("http://127.0.0.1:8001/api/users/login/", {username: username, password: password}, config).then((res)=>{
            console.log(res)
            const { data } = res

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data
            })

            localStorage.setItem("userInfo", JSON.stringify(getState().userLogin.userInfo))


        })

    }

    catch (error) {

        const errMsg = error.response && error.response.data.detail ? error.response.data.detail : error.message

        dispatch({
            type: USER_LOGIN_FAILED,
            payload: errMsg
        })

    }
} 