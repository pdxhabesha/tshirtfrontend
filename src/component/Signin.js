import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
import {FaBars} from "react-icons/fa";

import "./auth.css";
class Signin extends Component {
  state = {
    username: "",
    password:"",
    client_id: "test1",
    client_secret: "test1",
    grant_type: "password"
  };
handleSubmit= (e) =>{
  e.preventDefault(); // prevent page refresh
  let URL = "https://pdxtshirtdev.herokuapp.com/o/token/";
  axios.post(URL, this.state) //chain method
  .then(function (response) {
    console.log({response});
    this.setState({username: "",
    password:""})
  })
  .catch(function (error) {
    console.log({error});
  });
}
   handleChange  = (e) =>{
     let name = e.target.name;

    this.setState({
      [name]: e.target.value
    })
  }

  render() {
    return (
      <div className="auth">
        <div className="auth__header">
          <Link to="/"><FaArrowLeft /></Link>
          <p>ShopMate</p>
            <Link to="/"><FaBars /></Link>
        </div>
        <form className="signin" onSubmit={this.handleSubmit}>

            <input
              type="text"
              className="text"
              placeholder={"Username"}
              name="username"
              value={this.state.username}
              onChange={this.handleChange }
            />

            <input
              type="password"
              placeholder={"Password"}
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <input
            type="submit"
            value="Sign In"
            />

        </form>
        <div className="auth__footer">
          <Link to="/register">Get an account</Link>
          <Link to="/register/forgot">Forgot password</Link>
        </div>
      </div>
    );
  }
}
export default Signin;
