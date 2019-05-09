import React, {Component} from "react";
import "./App.css";
import Nav from "./component/nav/Nav.js";
import Auth from "./component/auth";
import {Route} from "react-router-dom";



class App extends Component {
    state={
        isLogedIn: false
    };
    componentDidMount() {
        if(localStorage.token)
            this.setState({isLogedIn: true})
    }
    logOut = () =>{
        localStorage.removeItem("token");
        this.setState({isLogedIn: false})
    };
    logIn =()=>{
        this.setState({isLogedIn: true})
    };
    render() {
        return (
            <div className="App">
                <Nav isLogedIn={this.state.isLogedIn} logOut={this.logOut}/>
                <Route path={"/auth"} render={e => <Auth {...e} logIn={this.logIn}/>}/>
            </div>
        );
    }
}

export default App;
