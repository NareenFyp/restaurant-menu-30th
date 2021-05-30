import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class CheckoutForm extends Component {
  constructor() {
  super();

  this.publish = this.publish.bind(this);

  }


  publish(tableNoBox) {
    //alert(this.ref.topic.value);
    alert("Thank you, your order will be served in 7 minutes. Return to Home page!")
    
  }



  render() {
    return (

      <div className="container">
        <form>
    
           <div class="col-50">
                    <h3>Payment</h3>
                    <label for="fname">Accepted Cards</label>
                    <div class="icon-container">
                      <i class="fa fa-cc-visa" style={{ color: "red" }} ></i>
                      
                      <i class="fa fa-cc-amex" style={{ color: "blue" }}></i>
                      <br></br>
                      <i class="fa fa-cc-mastercard" style={{ color: "black" }}></i>
                      
                      <i class="fa fa-cc-discover" style={{ color: "orange" }}></i>
                    </div>
                    <div>
                    <label for="tno">TABLE NUMBER</label>
                    <input ref="topic" type="text" name="tableNoBox" id="cname"  placeholder="16" />
                    </div>
                    <label for="cname">Name on Card</label>
                    <input type="text" id="cname" name="cardname" placeholder="John Doe" />
                    <label for="ccnum">Credit card number</label>
                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                    <label for="expmonth">Exp Month</label>
                    <input type="text" id="expmonth" name="expmonth" placeholder="September" />

                    <label for="expyear">Exp Year</label>
                    <input type="text" id="expyear" name="expyear" placeholder="2018" />
                     
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="352" />
                      
                    </div>
                
                <Link to="/">
                <div>
                <input type="submit"  onClick={this.publish} value="Continue to checkout" class="btn" />
                </div>
                </Link>


             

        </form>
        
      </div>
   );

  
  
    }
}

 

