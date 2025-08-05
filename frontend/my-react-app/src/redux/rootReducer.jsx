import { combineReducers } from "redux";
import productReducer from "./products/productReducer";
import productDetailsReducer from "./products/prodDetailsReducer";
import cartReducer from "./cart/cartReducer";
import userLoginReducer from "./user/userLoginReducer";

const reducer = combineReducers({products: productReducer, prodDetails: productDetailsReducer, 
    cart: cartReducer, userLogin: userLoginReducer})

export default reducer