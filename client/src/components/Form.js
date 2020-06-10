import React, { Component } from "react";
import isEmail from "validator/lib/isEmail";

class Form extends Component {
  state = {
    fields: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    fieldErrors: {},
    accounts: [], // remove once db is set up
  };

  onformSubmit = (e) => {
    const accounts = [...this.state.accounts]; // remove once db is set up
    const account = this.state.fields;
    const fieldErrors = this.validate(account);
    this.setState({ fieldErrors });
    e.preventDefault();

    if (Object.keys(fieldErrors).length) return;

    this.setState({
      accounts: accounts.concat(account), // remove once db is set up
      fields: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      },
    });
  };

  onInputChange = (e) => {
    const fields = Object.assign({}, this.state.fields);
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  };

  validate = (account) => {
    const errors = {};
    if (!account.firstName) errors.firstName = "First Name Required";
    if (!account.lastName) errors.lastName = "Last Name Required";
    if (!account.username) errors.firstName = "Username Required";
    if (!account.email) account.email = "Email Required";
    if (account.email && !isEmail(account.email))
      errors.email = "Invalid Email";
    if (!account.password) errors.password = "Password Required";
    if (account.password !== account.passwordConfirmation)
      errors.passwordConfirmation = "";
    return errors;
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <p>
          <label for="firstName">
            <strong>First Name:</strong>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="first name"
            value={this.state.fields.firstName}
            onChange={this.onInputChange}
          />
        </p>
        <p>
          <label for="lastName">
            <strong>Last Name:</strong>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="last name"
            value={this.state.fields.lastName}
            onChange={this.onInputChange}
          />
        </p>
        <p>
          <label for="username">
            <strong>Username:</strong>
          </label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.fields.username}
            onChange={this.onInputChange}
          />
        </p>
        <p>
          <label for="email">
            <strong>Email:</strong>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.fields.email}
            onChange={this.onInputChange}
          />
        </p>
        <p>
          <label for="password">
            <strong>Password:</strong>
          </label>
          <input
            type="text"
            name="password"
            placeholder="password"
            value={this.state.fields.password}
            onChange={this.onInputChange}
          />
        </p>
        <p>
          <label for="passwordConfirmation">
            <strong>Password Confirmation:</strong>
          </label>
          <input
            type="text"
            name="passwordConfirmation"
            placeholder="matching password"
            value={this.state.fields.passwordConfirmation}
            onChange={this.onInputChange}
          />
        </p>

        <input type="submit" />
      </form>
    );
  }
}

export default Form;

// disabled={this.validate()} // add to submit button
/* <button type="submit">Submit</button> */
