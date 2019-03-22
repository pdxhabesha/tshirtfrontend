import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav">
          <a href="#"> ShopMate </a>

          <a href="#"> Women </a>

          <a href="#"> Men </a>

          <a href="#"> Kids </a>
        </nav>{" "}
        <h1> Welcome to Habesha geniuses ShopMate </h1>
      </div>
    );
  }
}

export default App;
