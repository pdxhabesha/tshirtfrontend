import React, {Component} from 'react';
import "./index.css"
import Step from "./Step";
import axios from "../../config/axios";

class Stepper extends Component {
    state = {
        guestCheckout: null,
        step: 1,
        step1: {
            address_1: "",
            address_2: "",
            city: "",
            postalCode: "",
            country: "",
        },
        step2: {
            shipping_region: 2,
            shipping_id: 3,
            tax_id: 1,
        },
        shipping: [],
        tax: [],
        shippingRegion: []
    };

    componentDidMount() {
        this.getShipping();
        this.getTax();
        this.getShippingRegion();
    }

    getShipping = () => {
        axios.get('/api/shipping')
            .then(result => {
                this.setState({shipping: result.data.results});
            }).catch(error => {
            console.log({error});
        })
    };
    getTax = () => {
        axios.get('/api/tax')
            .then(result => {
                this.setState({tax: result.data.results});
            }).catch(error => {
            console.log({error});
        })
    };
    getShippingRegion = () => {
        axios.get('/api/shipping-region/')
            .then(result => {
                this.setState({shippingRegion: result.data.results});
            }).catch(error => {
            console.log({error});
        })
    };

    onChangeHandler = name => (e) => {
        this.setState({[name]: {...this.state[name], [e.target.name]: e.target.value}})

    };
    onSubmit = e => {
        e.preventDefault();
        console.log("steper.js onsubmit event", this.state)
    };
    stepForward = () => {
        if (this.state.step < 2)
            this.setState(prevState => ({step: prevState.step + 1}))
    };
    stepBackward = () => {
        if (this.state.step > 1)
            this.setState(prevState => ({step: prevState.step - 1}))
    };

    render() {
        let steps;
        switch (this.state.step) {
            case 1:
                steps = <Step step={1} data={this.state.step1}
                              onChange={this.onChangeHandler}
                              onSubmit={this.onSubmit}
                />;
                break;
            case 2:
                steps = <Step step={2} data={this.state.step2}
                              shipping={this.state.shipping}
                              tax={this.state.tax}
                              shippingRegion={this.state.shippingRegion}
                              onChange={this.onChangeHandler}
                              onSubmit={this.onSubmit}
                />;
                break;
            default:
                steps = <Step/>;
                break;
        }
        return (
            <div className={"stepper"}>
                {steps}
                {this.state.step < 2 && <button onClick={this.stepForward}>Forward</button>}
                {this.state.step > 1 && <button onClick={this.stepBackward}>Backward</button>}
                {this.state.step === 2 && <button onClick={this.onSubmit}>Confirm</button>}
            </div>
        )
    }
}

Stepper.propTypes = {};

export default Stepper;
