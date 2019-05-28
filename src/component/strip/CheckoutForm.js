import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from "../../config/axios"

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        // User clicked submit
        let {token} = await this.props.stripe.createToken({name: "Name"});
        console.log("token is!", token)
        let data = {
            token: token.id, total_amount: "100", status: 1,
            "tax": 1,
            "shipping": 1,
        };
        axios.post(`${process.env.REACT_APP_API_URL}api/charge`, data)
            .then(result => console.log("Purchase Complete!", result))
            .catch(error => console.log("Purchase error!", {error}));

    }

    render() {
        return (
            <div className="checkout">
                <p>Would you like to complete the purchase?</p>
                <CardElement/>
                <button onClick={this.submit}>Send</button>
            </div>
        );
    }
}

export default injectStripe(CheckoutForm);