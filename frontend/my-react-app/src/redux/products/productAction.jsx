import { FETCH_PRODUCT_LIST_REQUEST, FETCH_PRODUCT_LIST_SUCCESS, FETCH_PRODUCT_LIST_FAILED } from "./productTypes";

import axios from 'axios';


export const productAction = () => async (dispatch, getState) =>{
    try {

        const config = {
            Headers: {
                'Content-type': 'application/json'
            }
        }

        dispatch({
            type: FETCH_PRODUCT_LIST_REQUEST
        })

        await axios.get("http://127.0.0.1:8001/api/", config).then((res)=>{

            dispatch({
                type: FETCH_PRODUCT_LIST_SUCCESS,
                payload: res.data
            })
        })

    }
    catch(error){
             
        const errMsg = error.response && error.response.text.data ? error.response.text.data : error
        
        dispatch({
            type: FETCH_PRODUCT_LIST_FAILED,
            payload: errMsg
        })

    }
}