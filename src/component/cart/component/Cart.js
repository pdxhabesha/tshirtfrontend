import React from "react";
import {IoIosCart} from "react-icons/io";
import {withRouter} from "react-router-dom";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {CustomInput, FormGroup, Label} from 'reactstrap';

import {Table} from 'reactstrap';

import "./Cart.css"

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    checkOut = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
        this.props.history.push('/checkout')
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

                <IoIosCart onClick={this.toggle}/>
                <p className="cart__floating">{total_items}</p>
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
                                <tr key={product.product_id}>
                                    <td>
                                        <img width="100%" src={`${process.env.REACT_APP_API_URL}static/img/${product.thumbnail}`} alt="Card cap" />
                                    </td>
                                    <td>
                                    <FormGroup>
                                        <Label for="exampleCustomSelect">Size</Label>
                                        <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                                            {product.attribute.map(atr => {
                                                if(atr.attribute.name === "Size"){
                                                    return <option key={atr.attribute_value_id.toString()}>{atr.value}</option>
                                                }else{
                                                    return null;
                                                }
                                            })}
                                        </CustomInput>
                                    </FormGroup>
                                    </td>
                                    <td>
                                        <FormGroup>
                                            <Label for="exampleCustomSelect">Quantity</Label>
                                            <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                                                {[0,1,2,3,4,5,6].map(atr =>{
                                                        return <option key={atr.toString()}>{atr}</option>
                                                    })}
                                            </CustomInput>
                                        </FormGroup>
                                    </td>
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

export default withRouter(Cart);