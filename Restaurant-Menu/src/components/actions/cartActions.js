import { ADD_TO_CART,REMOVE_ITEM,ADD_QUANTITY,SUB_QUANTITY,ADD_VAT,SUB_VAT}  from './action-types/cart-actions'



/************
 * This class is responsible for carrying information to the (redux) store.
 * The addToCart, removeItem, addQuantity, addVAT and subtractVAT actions on the cart are 
 * declared in this class using types
 */



//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}

//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}

//add quantity action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

//subtract quantity action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}

//add VAT action
export const addVAT=(id)=>{
    return{
        type: ADD_VAT,
        id
    }
}
//subtract VAT action
export const subtractVAT=(id)=>{
    return{
        type: SUB_VAT,
        id
    }
}

