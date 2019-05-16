import React, {Component} from "react";
import axios from "../../config/axios";

import Form from "./Form";
import {Redirect} from "react-router-dom";

class SignIn extends Component {
    state = {
        username: {
            type: "text",
            username: "",
            name: "username",
            placeholder: "Username",
            required: true,
        },
        password: {
            type: "password",
            password: "",
            name: "password",
            placeholder: "Password",
            required: true,
        },
        error: "",
        remember: {
            type: "checkbox",
            remember: true,
            name: "remember",
            required: false,
            id:"remember"
        },
        formValid: true,
        loading: false,
    };
    handleSubmit = (e) => {
        e.preventDefault(); // prevent page refresh
        this.setState({loading: true});
        let user = {
            username: this.state.username.username,
            password: this.state.password.password,
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET,
            grant_type: "password"
        };
        axios.post('/o/token/', user) //chain method
            .then((response) => {
                localStorage.setItem("token", response.data.access_token);
                this.reset();
                this.setState({loading: false});
                this.props.logIn();
            })
            .catch((error) => {
                console.log({error});
                this.setState({loading: false, error: error.response.data.error_description });
            });
    };
    reset = () => {
        this.setState({
            username: {
                type: "text",
                username: "",
                name: "username",
                placeholder: "Username",
                required: true,
            },
            password: {
                type: "password",
                password: "",
                name: "password",
                placeholder: "Password",
                required: true,
            },
            error: "",
            remember: {
                type: "checkbox",
                remember: true,
                name: "remember",
                required: false,
                id:"remember"
            },
            formValid: true,
            loading: false,
        })
    };
    handleChange = (e) => {
        let name = e.target.name;
        let updateState = JSON.parse(JSON.stringify(this.state));
        updateState[name][name] = e.target.value;
        this.setState({...updateState})
    };

    render() {
        if (localStorage.getItem("token"))
            return <Redirect to={"/home"}/>;
        return (
            <Form
                username={this.state.username}
                password={this.state.password}
                remember={this.state.remember}
                submit={"Sign In"}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                signIn={true}
                formValid={this.state.formValid}
                loading={this.state.loading.toString()}
                error={this.state.error}

            />
        );
    }
}

export default SignIn;
