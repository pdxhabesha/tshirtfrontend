import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./component/Nav.js";
import Signin from "./component/Signin";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <h1> Welcome to ShopMate </h1>
        <Signin />
        <h2> </h2>
      </div>
    );
  }
}

export default App;
