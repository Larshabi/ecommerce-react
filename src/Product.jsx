import React, {Component} from 'react';

class Product extends Component{
    state={
        id:this.props.product.id,
        productName:this.props.product.productName,
        price:this.props.product.price,
    }
    render(){
        return(
            <div className="card"> 
                	<div className="card-body m-2">
                             <div className="text-muted">#{this.state.id}</div>
                             <h5 className="pt-2 border-top">{this.state.productName}</h5>
                             <div>#{this.state.price}</div>
                    </div>
                    <div className="card-footer text-right">
                        {this.props.children}
                    </div>
            </div>
            
        );
    }
}

export default Product;