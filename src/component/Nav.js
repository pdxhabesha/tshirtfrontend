import React, {Component} from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">

        <Link to="/">ShopMate</Link>
        <Link to="/women/">Women</Link>
        <Link to="/men/">Men</Link>
        <Link to="/kids/">Kids</Link>
        <Link to="/signin/">Sign in</Link>
      </nav>
    );
  }
}
export default Nav;
