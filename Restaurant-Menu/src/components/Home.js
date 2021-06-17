import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

 class Home extends Component{
    
    //handle the add button press
    handleClick = (id)=>{
        this.props.addToCart(id); 
        alert("Added. Continue Shopping or Checkout.")
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light yellow" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: £{item.price}</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
               
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}

// Create function to pass the state of the items 
// and make accessible to th
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)