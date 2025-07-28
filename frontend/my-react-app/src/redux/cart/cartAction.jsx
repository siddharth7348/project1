import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "./cartTypes";

import axios from "axios";


export const cartAction = (id, qty) => async (dispatch, getState) => {
     try {

        const config = {
            Headers: {
                'Content-type': 'application/json'
            }
        }

        await axios.get(`http://127.0.0.1:8001/api/${id}/`, config).then((res)=>{
            
            const { data } = res

            dispatch({
                type: ADD_CART_ITEM,
                payload: {
                    id: data._id,
                    name: data.name,
                    image: data.image,
                    price: data.price,
                    countInStock: data.countInStock,
                    qty
                }
            })

            console.log("action", getState().cart.cartItems )

            localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))

        })

        

     }

     catch(error){

                console.log(error)

     }

}

export const removeCartItem = (id) => async (dispatch, getState) => {

    dispatch({
        type: REMOVE_CART_ITEM,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

} 