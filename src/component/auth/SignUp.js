import React, {Component} from "react";
import axios from "../../config/axios";
import Form from "./Form";
import * as zxcvbn from "zxcvbn";
import {Redirect} from "react-router-dom";
const PASSWORD_LENGTH= 6;
const PASSWORD_STRENGTH= 3;
class SignUp extends Component {
    state = {
        username: {
            type: "text",
            username:"",
            name: "username",
            placeholder: "Username",
            required: true,
            error: "",
        },
        password: {
            type: "password",
            password:"",
            name: "password",
            placeholder: "Password",
            required: true,
            touch: false,
            error: "",
            valid: false,
            validation: {
                strength: 0,
                minLength: PASSWORD_LENGTH
            }
        },
        password2: {
            type: "password",
            password2:"",
            name: "password2",
            placeholder: "Confirm Password",
            required: true,
            touch: false,
            error: "",
            valid: false,
            validation: {
                strength: 0,
                minLength: PASSWORD_LENGTH
            }
        },
        email: {
            type: "email",
            email:"",
            name: "email",
            placeholder: "Email",
            required: true,
            error: "",
        },
        error: "",
        formValid: false,
        loading: false
    };
    reset = () =>{
        this.setState({
            username: {
                type: "text",
                username:"",
                name: "username",
                placeholder: "Username",
                required: true,
                error: "",
            },
            password: {
                type: "password",
                password:"",
                name: "password",
                placeholder: "Password",
                required: true,
                touch: false,
                error: "",
                valid: false,
                validation: {
                    strength: PASSWORD_STRENGTH,
                    minLength: PASSWORD_LENGTH
                }
            },
            password2: {
                type: "password",
                password2:"",
                name: "password2",
                placeholder: "Confirm Password",
                required: true,
                touch: false,
                error: "",
                valid: false,
                validation: {
                    strength: PASSWORD_STRENGTH,
                    minLength: PASSWORD_LENGTH
                }
            },
            email: {
                type: "email",
                email:"",
                name: "email",
                placeholder: "Email",
                required: true,
                error: "",
                touch: false,
                valid: false,
            },
            error: "",
            formValid: false,
        })
    };
    handleSubmit = (e) => {
        e.preventDefault(); // prevent page refresh
        this.setState({loading: true});

        let data = JSON.parse(JSON.stringify(this.state));
        let user = {
            username: data["username"]["username"],
            email: data["email"]["email"],
            password: data["password"]["password"],
        };
        axios.post("/signup/customer/", user) //chain method
            .then((response) => {
                localStorage.setItem("token", response.data);
                this.reset();
                this.setState({loading: false});
                this.props.logIn();
            })
            .catch((error) => {
                this.setState({error: error.response.data.slice(0, 100) || error.response.data.error_msg})
                this.setState({loading: false});
            });
    };
    passwordValidator=(password) => {
        const isEmpity = password.length === 0;
        let score = zxcvbn(password).score;
        let error = "";
        if (isEmpity) {
            error="Password is required";
        } else if (password.length < PASSWORD_LENGTH) {
            error="Length should be more than "+PASSWORD_LENGTH;
        } else if (score < PASSWORD_STRENGTH) {
            error=`Password is weak : ${score}`;
        } else if (score >= PASSWORD_STRENGTH) {
            error = "";
        }
        return {error, score};
    };
    handleChange = (event) => {
        let stateName = event.target.name;
        let updateState = JSON.parse(JSON.stringify(this.state));
        updateState[stateName].touch = true;
        updateState[stateName][stateName] = event.target.value;
        updateState = this.updateStateHelper(updateState, stateName, event);
        // validate each input based on its type

        this.setState({...updateState})
    };
    updateStateHelper = (updateState, stateName, event) =>{
        let isValid = true;
        if (stateName === "password" || stateName === "password2") {
            // check the strength of the input value, and update the validation
            let result = this.passwordValidator(updateState[stateName][stateName]);
            if (result.score >= PASSWORD_STRENGTH) {
                updateState[stateName].valid = true;
                updateState[stateName].error = "";
                isValid = true;
            } else {
                updateState[stateName].error = result.error;
                updateState[stateName].valid = false;
                isValid = false;
            }
            //update strength of the password
            updateState[stateName].validation.strength = result.score;
        }
        if (stateName === "password2") {
            // handle miss match passwords
            if (updateState.password.password !== event.target.value) {
                updateState[stateName].error = "miss match password";
                isValid = false;
                updateState[stateName].valid = false;
            } else {
                isValid = true;
                updateState[stateName].valid = true;
                updateState[stateName].error = "";
            }
        }
        if (stateName === "email") {
            // validate email
            if (this.validateEmail(event.target.value)) {
                isValid = true;
                updateState[stateName].valid = true;
                updateState[stateName].error = "";
            } else {
                updateState[stateName].error = ("Please Enter valid Email address");
                isValid = false;
                updateState[stateName].valid = false;
            }
        }
        updateState.formValid =
            isValid &&
            updateState.email.touch &&
            updateState.password.touch &&
            updateState.username.touch &&
            updateState.password2.touch;
        return updateState
    };
    validateEmail = value => {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
    };

    render() {
        if (localStorage.getItem("token"))
            return <Redirect to={"/home"}/>;
        return (
                <Form
                    username={this.state.username}
                    email={this.state.email}
                    password={this.state.password}
                    password2={this.state.password2}
                    error={this.state.error}
                    submit={"Sign Up"}
                    loading={this.state.loading}
                    formValid={this.state.formValid}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />

        );
    }
}

export default SignUp;
