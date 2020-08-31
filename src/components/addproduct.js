import React from 'react';
import axios from "axios";
import Navbar from './nav';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import addProductBroadcast from '../actions/addProductBroadcast';

class AddProduct extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            productid:'',
            productname:'',
            productprice:0,
            productquantity:0,
            productimage:'',
            productcategory:'',
            productbrand:''
            
        }
    }

    getName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productname: event.target.value})
    }

    getPrice=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productprice: event.target.value})
    }
    getQuantity=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productquantity: event.target.value})
    }

    getCategory=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productcategory: event.target.value})
    }
    getBrand=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productbrand: event.target.value})
    }
    getId=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productid: event.target.value})
    }

    addProduct=()=>{
        console.log('Add product via axios and post')
        let productRequestBody = {
            "id":this.state.productid,
            "name": this.state.productname,
            "price": this.state.productprice,
            "quantity": this.state.productquantity,
            "image":this.state.productimage,
            "category": this.state.productcategory,
            "brand": this.state.productbrand
        }
        axios.post('http://localhost:3000/allproducts', productRequestBody)
                .then(response=>{
                    this.props.addProducts(response)
                    this.props.history.push('/allproducts')
                }, error=>{
                    console.error(error);
                })
    }
    getImage=(event)=>{
        this.setState({productimage: event.target.value.substr(12)})
    }

    render() { 
        return ( 
            <div>
                <Navbar></Navbar>
            <h3>Add New Product!!!!</h3>
            <form>
                <div className="row">
                <label className="col addformLabel">Id: </label>
                <input className="col addformInput" type='text' id="productid" onChange={this.getId}></input>
                </div>
                <div className="row">
                <label className="col addformLabel">Name: </label>
                <input className="col addformInput" type='text' id="productname" onChange={this.getName}></input>
                </div>
                <div className="row">
                <label className="col addformLabel">Price: </label>
                <input  className=" col addformInput" type='number' id="productprice" onChange={this.getPrice}></input>
                </div>
                <div className="row">
                <label className="col addformLabel">Quantity: </label>
                <input  className="col addformInput" type='number' id="productquantity" onChange={this.getQuantity}></input>
                </div>
                <div className="row">
                <label className=" col addformLabel">Product Image: </label>
                <input type="file" onChange={this.getImage} multiple accept='image/*' className="col addformInput"/>
                </div>
                <div className="row">
                <label className=" col addformLabel">Category: </label>
                <input className=" col addformInput" type='text' id="productcategory" onChange={this.getCategory}></input>
                </div>
                <div className="row">
                <label className="col addformLabel">Brand: </label>
                <input className="col addformInput" type='text' id="productbrand" onChange={this.getBrand}></input>
                </div>
                <div className="row">
                <button type="button" onClick={this.addProduct} className="btn btn-primary loginBtn">Add Product</button>
                </div>
            </form>
        </div>
         );
    }
}
 
function convertFunctionToPropsToBroadcast(dispatch){
    return bindActionCreators({
        addProducts: addProductBroadcast

    }, dispatch)
}

export default withRouter (connect(null,convertFunctionToPropsToBroadcast) (AddProduct));