import React from 'react';
import axios from "axios";
import Navbar from './nav';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from "redux";
import editProductBroadcast from "../actions/editProductBroadcast";

class EditProduct extends React.Component {

    constructor(props){
        super(props)
        console.log(this.props);
        console.log(this.props.location);
        console.log(this.props.location.state);
        //console.log(this.props.location.state.myid);
        this.state={
            name:'',
            price:0,
            quantity:0,
            image:'',
            category:'',
            brand:'',
            id:0
        }

    }

    componentWillMount(){
        if(this.props.location.state !== undefined){
            axios.get('http://localhost:3000/allproducts/'+this.props.location.state.myid)
                .then(response=>{
                    console.log(response);
                    this.setState({
                        name: response.data.name,
                        price:response.data.price,
                        quantity:response.data.quantity,
                        category:response.data.category,
                        brand:response.data.brand,
                        id: response.data.id
                    })
                }, error=>{
                    console.error(error);
                })
        }
    }
    getName=(event)=>{
        this.setState({name: event.target.value})
    }

    getPrice=(event)=>{
        this.setState({price: event.target.value})
    }
    getQuantity=(event)=>{
        this.setState({quantity: event.target.value})
    }

    getCategory=(event)=>{
        this.setState({category: event.target.value})
    }
    getBrand=(event)=>{
        this.setState({brand: event.target.value})
    }
    getImage=(event)=>{
        this.setState({image: event.target.value.substr(12)})
    }

    editProduct=()=>{
        console.log('Edit product via axios and put')
        let productRequestBody = {
            "name":this.state.name,
            "price":this.state.price,
            "quantity":this.state.quantity,
            "image":this.state.image,
            "category":this.state.category,
            "brand":this.state.brand,
            "id":this.state.id
        }
        axios.put('http://localhost:3000/allproducts/'+this.state.id, productRequestBody)
                .then(response=>{
                    this.props.editProductbroadcast(response)
                    this.props.history.push('/allproducts')
                }, error=>{
                    console.error(error);
                })
    }

    render() { 
        return (  
            <div>
                <Navbar></Navbar>
            <h3>Edit Product!!!!</h3>
            <form>
                <div className="row">
                <label className="col addformLabel">Name: </label>
                <input  className="col addformInput" type='text' id="productname"  value={this.state.name} onChange={this.getName}></input>
                </div>
                <div className="row">
                <label  className="col addformLabel">Price: </label>
                <input  className="col addformInput" type='number' id="productprice" value={this.state.price} onChange={this.getPrice}></input>
                </div>
                <div className="row">
                <label className="col addformLabel">Quantity: </label>
                <input  className="col addformInput" type='number' id="productquantity" value={this.state.quantity} onChange={this.getQuantity}></input>
                </div>
                <div className="row">
                <label className=" col addformLabel">Product Image: </label>
                <input type="file" onChange={this.getImage} multiple accept='image/*' className="col addformInput"/>
                </div>
                <div className="row">
                <label className="col addformLabel">Category: </label>
                <input  className="col addformInput" type='text' id="productcategory" value={this.state.category} onChange={this.getCategory}></input>
                </div>
                <div className="row">
                <label className="col addformLabel">Brand: </label>
                <input  className="col addformInput" type='text' id="productbrand" value={this.state.brand} onChange={this.getBrand}></input>
                </div>
                <div className="row">
                <button className="btn btn-primary loginBtn" type="button" onClick={this.editProduct}>Update Product</button>
                </div>
            </form>
        </div>
        );
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({
       editProductbroadcast: editProductBroadcast
    },dispatch);
    
}

function mapStatesToProps(store) {
   console.log(store.allProducts);
   return {
     products: store.allProducts
   };
 }
 
 export default withRouter (connect(mapStatesToProps, matchDispatchToProps)(EditProduct));
