import React, { Component } from "react";
import isEmail from "validator/lib/isEmail";
import FormField from "./FormField";

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
    e.preventDefault();

    if (this.validate()) return;

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

  onInputChange = ({ name, value, error }) => {
    const fields = Object.assign({}, this.state.fields);
    const fieldErrors = Object.assign({}, this.state.fieldErrors);

    fields[name] = value;
    fieldErrors[name] = error;

    this.setState({ fields, fieldErrors });
  };

  validate = () => {
    const account = this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k]);

    if (!account.firstName) return true;
    if (!account.lastName) return true;
    if (!account.username) return true;
    if (!account.email) return true;
    if (!account.password) return true;
    if (!account.passwordConfirmation) return true;
    if (account.password !== account.passwordConfirmation) return true;
    if (errMessages.length) return true;

    return false;
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <p>
          <label for="firstName">
            <strong>First Name</strong>
          </label>
          <FormField
            type="text"
            name="firstName"
            placeholder="first name"
            value={this.state.fields.firstName}
            onChange={this.onInputChange}
            validate={(val) => (val ? false : "First Name Required")}
          />
        </p>
        <p>
          <label for="lastName">
            <strong>Last Name</strong>
          </label>
          <FormField
            type="text"
            name="lastName"
            placeholder="last name"
            value={this.state.fields.lastName}
            onChange={this.onInputChange}
            validate={(val) => (val ? false : "Last Name Required")}
          />
        </p>
        <p>
          <label for="username">
            <strong>Username</strong>
          </label>
          <FormField
            type="text"
            name="username"
            placeholder="username"
            value={this.state.fields.username}
            onChange={this.onInputChange}
            validate={(val) => (val ? false : "Username Required")}
          />
        </p>
        <p>
          <label for="email">
            <strong>Email</strong>
          </label>
          <FormField
            type="email"
            name="email"
            placeholder="email"
            value={this.state.fields.email}
            onChange={this.onInputChange}
            validate={(val) => (isEmail(val) ? false : "Invalid Email")}
          />
        </p>
        <p>
          <label for="password">
            <strong>Password</strong>
          </label>
          <FormField
            type="text"
            name="password"
            placeholder="password"
            value={this.state.fields.password}
            onChange={this.onInputChange}
            validate={(val) => (val ? false : "Password Required")}
          />
        </p>
        <p>
          <label for="passwordConfirmation">
            <strong>Password Confirmation</strong>
          </label>
          <FormField
            type="text"
            name="passwordConfirmation"
            placeholder="matching password"
            value={this.state.fields.passwordConfirmation}
            password={this.state.fields.password}
            onChange={this.onInputChange}
            validate={(val) => (val ? false : "Confirm Password")}
          />
        </p>

        <input type="submit" disabled={this.validate()} />
      </form>
    );
  }
}

export default Form;
