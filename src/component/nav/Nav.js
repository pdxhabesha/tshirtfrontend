import React, {Component} from "react";
import {Link} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <Link to="/home">ShopMate</Link>
                <Link to="/women/">Women</Link>
                <Link to="/men/">Men</Link>
                <Link to="/kids/">Kids</Link>
                {!this.props.isLogedIn && <Link to="/auth/login/">Sign in</Link>}
                {!this.props.isLogedIn && <Link to="/auth/register/">SignUp</Link>}
                {this.props.isLogedIn && <button onClick={this.props.logOut}>Logout</button>}
            </nav>
        );
    }
}

export default Nav;
