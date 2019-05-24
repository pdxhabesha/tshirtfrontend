import React from "react";
import { IoIosCart } from "react-icons/io";
import {withRouter} from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'reactstrap';

import "./Cart.css"
class Cart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }
    checkOut = () =>{
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
        this.props.history.push('/cart')
    };

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    render() {
        // let {product_id, total_items, total_amount, added_on, cart_id} = this.props.data;
        let {total_items, products} = this.props.data;
       return (
            <div className="cart">
                {/*<div>product_id:  {product_id.map(id => <span>{id},</span>)}</div>*/}
                {/*<Link to="/cart">*/}
                <IoIosCart  onClick={this.toggle}/>
                {/*</Link>*/}
                <p className="cart__floating">{total_items}</p>
                {/*<p>{total_amount.toFixed(2)}</p>*/}
                {/*<p>added_on: {added_on}</p>*/}
                {/*<p>cart_id: {cart_id}</p>*/}
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{total_items} items in your cart</ModalHeader>
                    <ModalBody>
                        <Table hover>
                            <thead>
                            <tr>
                                <th>Item</th>
                                <th>Size</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {products.map(product => (
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{product.size}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.price}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.checkOut}>checkout</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
export  default withRouter(Cart);