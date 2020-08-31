import React from 'react';
import { Link } from "react-router-dom";


class Navbar extends React.Component {
    render() { 
        return ( 
            <div className="sidenav">
                
                <Link to='/home' className="navlink">Dashboard</Link>
                <Link to='/Addproduct' className="navlink">Add Product</Link>    
                <Link to='/AllProducts' className="navlink">All Products</Link>
                <Link to='/' className="navlink">Logout</Link>
            </div>
         );
    }
}
 
export default Navbar;