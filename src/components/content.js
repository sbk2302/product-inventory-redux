import React from 'react';
import { Switch,Route } from "react-router-dom";

import  Dashboard  from "./dashboard";
import AllProducts from './allproducts';
import AddProduct from './addproduct';
import EditProduct from './editproduct';
import Login from './login';
import SignUp from './signup';

class Content extends React.Component{

    render(){
        return(
            <Switch>
                <Route path='/' exact component={Login}></Route>
                <Route path='/signup' component={SignUp}></Route>
                <Route path='/home' component={Dashboard}></Route>
                <Route path='/allproducts'component={AllProducts}></Route>
                <Route path='/addproduct' component={AddProduct}></Route>
                <Route path='/editproduct' component={EditProduct}></Route>
            </Switch>
        )
    }
}export default Content