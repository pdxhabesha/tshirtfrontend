import React, {Component} from "react";
import {Link} from "react-router-dom";
import Cart from "../cart/component/Cart";
import { Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import Search from "./Search";
import "./Nav.css"

export default class  extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        return (
            <Nav tabs>
                <Dropdown pills="true" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle nav caret to="/home" className="logo" >
                        {/*<Link to="/home" className="logo">ShopMate</Link>*/}
                        ShopMate
                    </DropdownToggle>
                    <DropdownMenu>
                        {!this.props.isLogedIn && <DropdownItem> <Link to="/auth/login/">Sign in</Link> </DropdownItem>}
                        {!this.props.isLogedIn && <DropdownItem>  <Link to="/auth/register/">SignUp</Link> </DropdownItem>}
                            {this.props.isLogedIn && <button onClick={this.props.logOut}>Logout</button>}
                            <DropdownItem divider />

                    </DropdownMenu>
                </Dropdown>
                <Link to="/women/">Women</Link>
                <Link to="/men/">Men</Link>
                <Link to="/kids/">Kids</Link>
                <Link to="/shoes/">Shoes</Link>
                <Link to="/brands/">Brands</Link>
                <Search />
                <Cart data={this.props.data}/>
            </Nav>
        );
    }
}
