import { FETCH_PRODUCT_DETAILS_REQUEST, FETCH_PRODUCT_DETAILS_SUCCESS, FETCH_PRODUCT_DETAILS_FAILED } from "./productTypes";

const initialState = {
    loading: false,
    product: {},
    error: ''
}


const productDetailsReducer = (state=initialState, action) =>{
    switch(action.type){
        case FETCH_PRODUCT_DETAILS_REQUEST: return {
            loading: true,
            ...state
        }

        case FETCH_PRODUCT_DETAILS_SUCCESS: return {

                loading: false,
                product: action.payload,
                error: ''


        }
        case FETCH_PRODUCT_DETAILS_FAILED: return {
                loading: false,
                prodduct: {},
                error: action.payload

        }

        default: return state
    }
}

export default productDetailsReducer