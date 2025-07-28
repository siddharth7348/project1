import { combineReducers } from "redux";
import productReducer from "./products/productReducer";
import productDetailsReducer from "./products/prodDetailsReducer";
import cartReducer from "./cart/cartReducer";

const reducer = combineReducers({products: productReducer, prodDetails: productDetailsReducer, cart: cartReducer})

export default reducer