import { FETCH_PRODUCT_LIST_REQUEST, FETCH_PRODUCT_LIST_SUCCESS, FETCH_PRODUCT_LIST_FAILED } from "./productTypes";

const initialState = {
    loading: false,
    prodList: [],
    error: ''
}


const productReducer = (state=initialState, action) =>{
    switch(action.type){
        case FETCH_PRODUCT_LIST_REQUEST: return {
            loading: true,
            ...state
        }

        case FETCH_PRODUCT_LIST_SUCCESS: return {

                loading: false,
                prodList: action.payload,
                error: ''


        }
        case FETCH_PRODUCT_LIST_FAILED: return {
                loading: false,
                prodList: [],
                error: action.payload

        }

        default: return state
    }
}

export default productReducer