import React from 'react';
import Navbar from './nav';
import {Chart} from 'react-google-charts';
import axios from 'axios'


class Dashboard extends React.Component {

    constructor(props){
        super(props)
        this.state={
            products:[],
            chatdata:[["name","quantity"]]
        }

    }

    componentWillMount(){
        this.getAllProducts()
    }

    getAllProducts=()=>{
        axios.get('http://localhost:3000/allproducts')
                .then(response=>{
                    this.setState({products: response.data})
                    this.state.products.map(pr=>{
                        return this.state.chatdata.push([pr.name,parseInt(pr.quantity)])
                    })
                }, error=>{
                    console.error(error);
                })
    }


    render() { 
        return (
            <div> 
            <Navbar></Navbar>
            <div>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                //loader={<div>Loading Chart</div>}
                data={this.state.chatdata}
                options={{
                    title: 'Current Stock',
                    is3D:false
                    }}
                // For tests
                rootProps={{ 'data-testid': '1' }}
                ></Chart>  
            </div>
            </div>
         );
    }
}
 
export default Dashboard
