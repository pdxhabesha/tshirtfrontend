import React, {Component} from "react";

class Signin extends Component {
  state = {
    test: "react dom test input",
    password:"",

  };
handleSubmit= (e) =>{
  e.preventDefault(); // prevent page refresh
  console.log("onsubmit event listener just fired!! ",this.state);

}
   handleChange  = (e) =>{
     let name = e.target.name;
     console.log("onChange event listener just fired ",name);

    this.setState({
      [name]: e.target.value
    })
  }

  render() {
    return (
      <form className="signin" onSubmit={this.handleSubmit}>
      // <>
          <input
            type="text"
            className="miriam"
            placeholder={this.state.test}
            id="test1"
            name="test"
            value={this.state.test}
            onChange={this.handleChange }
          />

          <input
          type="password"
           placeholder={"please enter password"}
          id="test2"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          />



          <input
          type="submit"
          value="Submit"
          />
          // </>
      </form>
    );
  }
}
export default Signin;
