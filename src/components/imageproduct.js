import React from 'react';

class Imageproduct extends React.Component {
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
            <div>
                <div><img src={"images/" + this.props.profile} style={imgStyle} alt=""></img></div>
                <span>{this.props.id}</span>
                <span>{this.props.name} </span>
                <div><span>{this.props.price}</span>
                <span>{this.props.quantity}</span></div>
                <div><span>{this.props.category}</span>
                <span>{this.props.brand}</span></div>
                <div>
                    <button onClick={this.editProductWithId}>Edit</button>
                    <button onClick={this.deleteCurrentProduct}>Del</button>
                </div>
                
                </div>
          );
    }
}
 
export default Imageproduct;