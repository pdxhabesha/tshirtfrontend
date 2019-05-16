import React, {Component} from "react";
import SignIn from "./SignIn";
import SignUP from "./SignUp";
import {Link, Redirect, Route} from "react-router-dom";
import {FaArrowLeft, FaBars} from "react-icons/fa";
import "./auth.css"
class Auth extends Component {

    render() {
        // if (localStorage.getItem("token"))
        //     return <Redirect to={"/home"}/>;
        return (
            <div className="auth">
                <div className="auth__header">
                    <Link to="/"><FaArrowLeft/></Link>
                    <p>ShopMate</p>
                    <Link to="/"><FaBars/></Link>
                </div>
                <Route path="/auth/login" exact render={e => <SignIn {...e} logIn={this.props.logIn}/>}/>
                <Route path="/auth/register" exact render={e => <SignUP {...e} logIn={this.props.logIn}/>}/>
                <div className="auth__footer">
                    <Link to="/auth/register">Get an account</Link>
                    <Link to="/auth/register/forgot">Forgot password</Link>
                </div>
            </div>
        )
    }
}

export default Auth;
