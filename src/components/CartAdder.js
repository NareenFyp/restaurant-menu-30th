import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


/*****************CARTADDER.JS********************************************************

//  This class deals with the additional
//  manipulations to the cart amount, e.g. 
//  addition of tax; i.e. V.A.T., delivery fee, 
//  discount (subtraction of a percentage of 
//  total amount) etc, before the customer proceeds to 
//  the payment details screen.
//  This class has been implemented in form of a component to be nested
//  in the Cart component to displayed after contents of the user's cart 
//  is shown and before the checkout button.
//  Reducers is Redux's way of managing state

**********************************************************************************/

 

class CartAdder extends Component{
    
    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addVAT();
        }
        else{
            this.props.subtractVAT();
        }
    }

    render(){
  
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="vat" onChange= {this.handleChecked} />
                                <span>VAT(+£2)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: £{this.props.total} </b></li>
                    </div>
                    <Link to="/CheckoutForm">
                    <div className="checkout">
                        <button className="waves-effect waves-light btn">Checkout</button>
                    </div>
                    </Link>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addVAT: ()=>{dispatch({type: 'ADD_VAT'})},
        substractVAT: ()=>{dispatch({type: 'SUB_VAT'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartAdder)
