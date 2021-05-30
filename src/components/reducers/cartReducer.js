import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import Item7 from '../../images/item7.jpg'
import Item8 from '../../images/item8.jpg' 
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from '../actions/action-types/cart-actions'


/********************************************************
 * This is the class that handles the state of the app.
 * It returns the next state of the app
 ********************************************************/

const initState = {
    items: [
        {id:1,title:'', desc: "Chargrilled Mackerel With Sweet And Sour Beetroot", price:10,img:Item1},
        {id:2,title:'', desc: "Charred Spring Onions & Romesco", price:14,img: Item2},
        {id:3,title:'', desc: "Jack Daniels Glazed Burger served with fries.",price:12,img: Item3},
        {id:4,title:'', desc: "Spaghetti Bolognese with Pancettas.", price:16,img:Item4},
        {id:5,title:'', desc: "Tripple Cheese & Tarragon-Stuffed Mushroom Pizza", price:15,img: Item5},
        {id:6,title:'', desc: "Chilled-Marinated Pork With Vietnamese Brussels Sprouts.",price:13,img: Item6},
        {id:7,title:'', desc: "Belgian White choc Chip Cookie Dough",price:7,img: Item7},
        {id:8,title:'', desc: "Victorian Chocolatey Gateuax with salted carmel sauce",price:8,img: Item8}
    
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        const itemToRemove= state.addedItems.find(item=> action.id === item.id)
        const new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        const newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== 'ADD_VAT'){
          return{
              ...state,
              total: state.total + 2
          }
    }

    if(action.type=== 'SUB_VAT'){
        return{
            ...state,
            total: state.total - 2
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
