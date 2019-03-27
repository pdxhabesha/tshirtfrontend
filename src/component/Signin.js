import React, {Component} from "react";

class Signin extends Component {
    state = {
        email: "",
        password: "",

    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("onsubmit event listener just fired!! ", this.state);

    };
    handleChange = (e) => {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    };

    render() {
        return (
            <form className="signin" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    className="email"
                    placeholder={"Email"}
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />

                <input
                    type="password"
                    placeholder={"Password"}
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <input
                    type="submit"
                    value="SignIn"
                />
            </form>
        );
    }
}

export default Signin;
