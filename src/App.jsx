import React, {Component} from 'react';
import NavBar from './NavBar';
// import CustomersList from './CustomersList';
import ShoppingCart from './ShoppingCart';

class App extends Component{
    render(){
        return(
            <React.Fragment>
            <NavBar />
            {/* <CustomersList /> */}
            <ShoppingCart />
            </React.Fragment>
        );
    }
}

export default App;