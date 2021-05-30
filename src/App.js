import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Hero from './components/Hero'
import Footer from './components/Footer'
import CheckoutForm from './components/Check-out.js'
//import //// TO DO - REFACTOR HOME TO HERO

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
              <Hero/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/CheckoutForm" component={CheckoutForm}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
                  
                  <Footer/>
             </div>
             
       </BrowserRouter>
      
    );
  }
}

export default App;
