import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "./cartTypes";

const cartItemsStorage = localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]

const initialState = {
    cartItems: cartItemsStorage
}


const cartReducer = (state=initialState, action) => {
    
    switch(action.type){

    case ADD_CART_ITEM:{    
    
        
    const existItem = state.cartItems.find(x=>x.id===action.payload.id)

    console.log("existItem", existItem, state.cartItems, action.payload)

    if (existItem){
        return {
            ...state,
            cartItems: state.cartItems.map(x=>x.id===existItem.id?action.payload:x)
        }

    }
    else{
        console.log("hello", action.payload, [...state.cartItems, action.payload])
        return {
            ...state,
            cartItems: [...state.cartItems, action.payload]
        }

    }
}

    case REMOVE_CART_ITEM: return {
        ...state,
        cartItems: state.cartItems.filter(x=>x.id !== action.payload)
        
    }

    default: return state




    }
    }


export default cartReducer
