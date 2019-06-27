import React, {Component} from "react";
import "./App.css";
import Nav from "./component/nav/Nav.js";
import Auth from "./component/auth";
import {Route} from "react-router-dom";
import Products from "./component/products";
import Steper from "./component/strip/Steper";

class App extends Component { //classed based &&& inherit from React.Component

    state={
        isLogedIn: false,
        cart_products: [],
        total_items: 0,
        total_amount: 0,
        added_on: Date.now(),
        cart_id: Math.floor(Math.random() * 100)
    };
    addItem = (item) =>{
        let new_total_amount = (item.price * 1) + this.state.total_amount;
        let total_items = this.state.total_items+ 1;
        this.setState({
            cart_products: [...this.state.cart_products, item],
            total_items: total_items,
            total_amount: new_total_amount,
        })
    };
    componentDidMount() { //lifecycle
        if(localStorage.token)
            this.setState({isLogedIn: true})
    } //lifecycle
    logOut = () =>{
        localStorage.removeItem("token");
        this.setState({isLogedIn: false})
    };
    logIn =()=>{
        this.setState({isLogedIn: true})
    };
    render() { // must have
        return (
            <div className="App">
                <Nav isLogedIn={this.state.isLogedIn} logOut={this.logOut} data={this.state}/>
                <Route path={"/auth"} render={e => <Auth {...e} logIn={this.logIn}/>}/>
                <Route path={"/home"} exact render={e => <Products {...e} addItem={this.addItem} />} />
                <Route path={"/checkout"} exact render={e => <Steper {...e}  />} />
            </div>
        );
    }
}

export default App;
