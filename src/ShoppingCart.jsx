import React, {Component} from 'react';
import Product from './Product'

class ShoppingCart extends Component{
    state = {
        products:[
            {id:1, productName:"IPhone", price:250000, quantity:0},
            {id:2, productName:"Sony Camera", price:200000, quantity:0},
            {id:3, productName:"Samsung QLED TV", price:150000, quantity:0},
            {id:4, productName:"IPad pro", price: 120000, quantity:0},
            {id:5, productName:"Xbox", price: 100000, quantity:0},
            {id:6, productName:"Dell Monitor", price: 210000, quantity:0},
        ]
    }
    render(){
        return(
            <div className="container-fluid">
                <h4>Shopping Cart</h4>
                <div className="row">
                    
                        {this.state.products.map((prod)=>{
                            return (
                                    <div className="col-10 col-md-6 col-lg-6">
                                        <Product key={prod.id} id={prod.id} product={prod}>
                                            <button className="btn btn-primary">Buy Now</button>
                                        </Product>
                                    </div>);
                        })}
                   
                    
                </div>
            </div>
        );
    }   
}

export default ShoppingCart;