import React, { Component } from "react";

class FormValidation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",

      password: "",

      usernameerror: "",

      passworderror: "",
    };
  }

  usernamechangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  passwordchangeHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  validateForm = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    let usernameerror = "";

    let passworderror = "";

    // Check if username is empty

    if (username.trim() === "") {
      usernameerror = "Username cannot be empty";
    } else {
      // Check username pattern

      const usernamePattern = /^[a-zA-Z][a-zA-Z0-9\s]{6,13}$/;

      if (!usernamePattern.test(username)) {
        usernameerror = "Username did not meet the required pattern";
      }
    }

    // Check if password is empty

    if (password.trim() === "") {
      passworderror = "Password cannot be empty";
    } else {
      // Check password pattern

      const passwordPattern =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@_$#*]).{5,15}$/;

      if (!passwordPattern.test(password)) {
        passworderror = "Password did not satisfy the required pattern";
      }
    }

    if (usernameerror || passworderror) {
      this.setState({ usernameerror, passworderror });
    } else {
      this.submitForm();
    }
  };

  submitForm = () => {
    alert(
      `Your account has been created successfully!!! \n Welcome ${this.state.username}`
    );
  };

  render() {
    return (
      <div>
        <h1>Tekstac-The Learning Platform</h1>

        <h3>SIGN UP</h3>

        <form onSubmit={this.validateForm}>
          <div>
            <label htmlFor="username">User Name</label>

            <input
              type="text"
              id="username"
              onChange={this.usernamechangeHandler}
              value={this.state.username}
            />

            <span>{this.state.usernameerror}</span>
          </div>

          <div>
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              onChange={this.passwordchangeHandler}
              value={this.state.password}
            />

            <span>{this.state.passworderror}</span>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormValidation;
