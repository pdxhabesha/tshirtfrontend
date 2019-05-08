import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
import {FaBars} from "react-icons/fa";

import "./auth.css";

class SignUp extends Component {
  state = {
    username: "",
    password:"",
    password2: "",
    email: ""

  };
handleSubmit= (e) =>{
  e.preventDefault(); // prevent page refresh
  let URL = "https://pdxtshirtdev.herokuapp.com/signup/customer/";
  axios.post(URL, this.state) //chain method
  .then(function (response) {
    console.log({response});
  })
  .catch(function (error) {
    console.log({error});
  });
}
   handleChange  = (e) =>{
     let name = e.target.name;
     // console.log("onChange event listener just fired ",name);

    this.setState({
      [name]: e.target.value
    })
  }

  render() {
    // console.log(this.props)
    return (
      <div className="auth">
        <div className="auth__header">
        <Link to="/"><FaArrowLeft /></Link>
          <p>ShopMate</p>
          <Link to="/"><FaBars /></Link>

        </div>
      <form className="signin" onSubmit={this.handleSubmit}>
          <input
            type="email"
            required
            className="text"
            placeholder={"Email"}
            name="email"
            value={this.state.email}
            onChange={this.handleChange }
          />
          <input
            type="text"
            required
            className="text"
            placeholder={"Username"}
            name="username"
            value={this.state.username}
            onChange={this.handleChange }
          />

          <input
            type="password"
            required
            className="password"
            placeholder={"Password"}
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input
            type="password"
            required
            className="password"
            placeholder={"Comfirm Password"}
            name="password2"
            value={this.state.password2}
            onChange={this.handleChange}
          />



          <input
          type="submit"
          value="SignUp"
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
export default SignUp;
