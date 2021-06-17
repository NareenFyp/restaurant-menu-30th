import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';

 const Navbar = ()=>{

    return(
            <nav className="color-nav"
            // className="nav-wrapper" style={{ color: "black" }}
            >
                <div className="color-nav">
                    <Link to="/" className="brand-logo">Nareen's Menu Specials</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Food</Link> </li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons"><Badge 
                        //badgeContent={1} 
                        //{items.length} include cart length to update cart
                        color="secondary">
                        </Badge>shopping_cart</i>
                        
                        </Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}



export default Navbar;