import React from 'react';
import axios  from "axios";
import Navbar from './nav';
import ProductDetail from './productdetail';
import { withRouter } from 'react-router-dom';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import listProductsBroadcasting from '../actions/listProductBroadcast'
import searchProductBroadcasting from "../actions/searchProductBroadcast";


class AllProducts extends React.Component {

    constructor(props){
        super(props)
        this.state={
            products:[],
            duplicateproducts:[],
            deleteSuccess: false,
            myid: 0,
            searchValue:''
        }
    }

    componentWillMount(){
        this.getAllProducts()
    }

    getAllProducts=()=>{
        axios.get('http://localhost:3000/allproducts')
                .then(response=>{
                    this.props.sendAllProducts(response.data)
                    this.setState({products: this.props.allProducts,
                                   duplicateproducts:this.props.allProducts})
                }, error=>{
                    console.error(error);
                })
    }

    deleteProductWithId=(id)=>{
        console.log('delete product for received id: ' + id);
        axios.delete('http://localhost:3000/allproducts/' + id)
                .then(response=>{
                     console.log(response)
                     //show deleteSuccess message
                     this.setState({deleteSuccess: true})
                     this.getAllProducts()
                     //remove deleteSuccess message after 2000 millisecond
                     //this.intializeState()
                }, error=>{
                    console.error(error)
                })
    }
    
    renderAllProducts=()=>{
        let imgStyle ={
            width:'100px',
            borderRadius:'10px'
        }
        console.log(this.props.allProducts)
        return this.props.allProducts.map(product=>{
            return(
                
              
                    <ProductDetail
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        quantity={product.quantity}
                        profile={product.image}
                        category={product.category}
                        brand={product.brand}
                        deleteId={this.deleteProductWithId}
                        editId={this.editProductWithId}
                    ></ProductDetail>
                
            )
        })
    }

    editProductWithId=(id)=>{
        this.setState({myid: id})
        console.log('Edit product with id: ' + id);
        this.props.history.push({
                                    pathname: '/editproduct', 
                                    state: {myid: id}
                                })
    }
    getSearch=(e)=>{
        let searchString = e.target.value
        if(searchString===''){
            this.getAllProducts()
        }
        this.setState({searchValue: searchString})
        let searchF = this.state.duplicateproducts.filter(product=>{
                                return (product.name.toLowerCase().match(searchString.toLowerCase())||(product.category.toLowerCase().match(searchString.toLowerCase())))
                            })
        console.log(searchF);
        this.props.searchedProducts(searchF)                   
    }
    
    render() { 
        return (
            <div> 
            <Navbar></Navbar>
            <div style={{marginTop: 2+'%'}}>
                  
                       <label>Search: </label>
                       <input type="text" value={this.state.searchValue} onChange={this.getSearch}></input>
                       <br></br>
                   </div>
            <table style={{marginLeft: 4 +'%',marginTop: 5 +'%',marginRight: 4 +'%'}}>
                <thead>
                    <tr>
                        <th className="column1">Image</th>
                        <th className="column1">Id</th>
                        <th className="column2">Name</th>
                        <th className="column3">Price</th>
                        <th className="column4">Quantity</th>
                        <th className="column5">Category</th>
                        <th className="column6">Brand</th>
                        <th colSpan="2" className="column7">Action</th>
                </tr>
                </thead>
                
                    {this.renderAllProducts()}
                

            </table>
            </div>
         );
    }
}

function convertStoreToProps(store){
    console.log("store created")
    return{
        allProducts:store.allProducts
    }
}

function convertFunctionToPropsToBroadcast(dispatch){
    return bindActionCreators({
        sendAllProducts: listProductsBroadcasting,
        searchedProducts:searchProductBroadcasting
    }, dispatch)
}
 
export default withRouter( connect(convertStoreToProps,convertFunctionToPropsToBroadcast) (AllProducts));