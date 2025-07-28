import { FETCH_PRODUCT_DETAILS_REQUEST, FETCH_PRODUCT_DETAILS_SUCCESS, FETCH_PRODUCT_DETAILS_FAILED } from "./productTypes";

import axios from 'axios';

export const prodDetailsAction = (id) => async (dispatch, getState) =>{
    try {

        const config = {
            Headers: {
                'Content-type': 'application/json'
            }
        }

        dispatch({
            type: FETCH_PRODUCT_DETAILS_REQUEST
        })

        await axios.get(`http://127.0.0.1:8001/api/${id}/`, config).then((res)=>{

            dispatch({
                type: FETCH_PRODUCT_DETAILS_SUCCESS,
                payload: res.data
            })
        })

    }
    catch(error){
             
        const errMsg = error.response && error.response.text.data ? error.response.text.data : error
        
        dispatch({
            type: FETCH_PRODUCT_DETAILS_FAILED,
            payload: errMsg
        })

    }
}
