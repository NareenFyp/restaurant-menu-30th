import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import CartAdder from './CartAdder'

/**********************************************************************************
 * This class displays the content of the user's cart after selecting some meals
 * The add and subtract quantity functions, including the remove item function 
 * is passed as props to ensure that new state is received and can be passed and 
 * accesed by the reducer through mapStateToProps function.
 * and if thee are no items in the cart, conditional rendering handles display of 
 * items accordingly
 * 
 **********************************************************************************/


class Cart extends Component{
    //function to deal with adding the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //function handling removing the item from the cart completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //remove from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
        //conditional rendering of items
        //if added items length is passed display all the items
        //with their individual images, title/description
        const addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" 
                                   key={item.id}>
                                    
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Amt: £{item.price}</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        
                                        {/* Increment and Decrement icons/button and Remove Item button */}
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                                        </div>
                                        <button className="btn-floating btn-large waves-effect waves-light red - " onClick={()=>{this.handleRemove(item.id)}}>-</button>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):
             //if empty, prompt user to select a meal to add to cart
             (
                <p>Add some items</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You are having:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                <CartAdder />          
            </div>
       )
    }
}

//make available to reducer handling the state of addedItems action
const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)