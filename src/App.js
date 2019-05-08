import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./component/Nav.js";
import Signin from "./component/Signin";
import { Route } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {headline: ""};
  }
  componentWillMount() {
    console.log("[app.js] componentWillMount")
  }
  componentDidMount() {
    this.setState ( {headline: "Welcome to ShopMate"});
    
    console.log("[app.js] componentDidMount")
  }

  render() {
      console.log("[app.js] render")
    return (
      <div className="App">
        <Nav />
        <h1> {this.state.headline} </h1>
         <Route path="/signin/" component={Signin} />

      </div>
    );
  }
}

export default App;
