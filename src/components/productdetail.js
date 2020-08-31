import React from 'react';

class ProductDetails extends React.Component {

    deleteCurrentProduct=()=>{
        console.log("delete product with id: " + this.props.id);
        this.props.deleteId(this.props.id)
    }

    editProductWithId=()=>{
        console.log("edit product with id: " + this.props.id);
        this.props.editId(this.props.id)
    }

    render() { 
        let imgStyle ={
            width:'100px',
            borderRadius:'10px'
        }
        return (
            <tr>
                <td><img src={"images/" + this.props.profile} style={imgStyle} alt=""></img></td>
                <td>{this.props.id} </td>
                <td>{this.props.name} </td>
                <td>{this.props.price}</td>
                <td>{this.props.quantity}</td>
                <td>{this.props.category}</td>
                <td>{this.props.brand}</td>
                <td>
                    <button className="btn btn-primary" onClick={this.editProductWithId}>Edit</button>
                </td>
                <td>
                    <button className="btn btn-info" onClick={this.deleteCurrentProduct}>Delete</button>
                </td>
                
            </tr>
          );
    }
}
 
export default ProductDetails;