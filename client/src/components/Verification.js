import React, { Component } from "react";
import isEmail from "validator/lib/isEmail";
import FormField from "./FormField";

// pass form values from store

class Verification extends Component {
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
      <main>
        <h2>{this.props.title}</h2>
        <dl>
          <dt>First Name</dt>
          <dd>first name</dd>

          <dt>Last Name</dt>
          <dd>last name</dd>

          <dt>Username</dt>
          <dd>username</dd>

          <dt>Email</dt>
          <dd>email</dd>

          <dt>Password</dt>
          <dd>password</dd>
        </dl>
        <button>Edit</button>
        <button>Confirm</button>
      </main>
    );
  }
}

export default Verification;
