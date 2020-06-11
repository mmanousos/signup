import React, { Component } from "react";
import styled from "styled-components";
import isEmail from "validator/lib/isEmail";
import FormField from "./FormField";

const StyledForm = styled.form`
  .userEntry {
    font-style: italic;
    font-weight: 300;
    padding-bottom: 10px;
    color: blue;
  }
  label {
    font-weight: bold;
  }
  input,
  userEntry {
    margin-bottom: 10px;
  }
`;
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
    editing: true,
  };

  toggleEditing = () => {
    this.setState({
      editing: !this.state.editing,
    });
  };

  displayVerifyButton = () => {
    if (this.state.editing) {
      return (
        <button disabled={this.validate()} onClick={this.toggleEditing}>
          Verify
        </button>
      );
    }
  };

  displayEditAndConfirmButtons = () => {
    if (!this.state.editing) {
      return (
        <div>
          <button onClick={this.toggleEditing}>Edit</button>
          <input type="submit" value="Confirm" />
        </div>
      );
    }
  };

  onformSubmit = (e) => {
    e.preventDefault();
    const account = this.state.fields;
    if (this.validate()) return;

    this.setState({
      fields: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      },
      editing: true,
    });
    // pass account up to FormContainer - then up to App - to send to DB
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

  displayTitle = () => {
    if (this.state.editing) {
      return "Enter Your Details";
    } else {
      return "Verify Your Details";
    }
  };

  displayMsg = () => {
    if (!this.state.editing) {
      return (
        <h3>Click "edit" to correct or "confirm" if they are accurate.</h3>
      );
    }
  };

  render() {
    return (
      <div>
        <h2>{this.displayTitle()}</h2>
        {this.displayMsg()}
        <StyledForm onSubmit={this.onformSubmit}>
          <div className="field">
            <label htmlFor="firstName">First Name</label>
            {this.state.editing ? (
              <FormField
                type="text"
                name="firstName"
                placeholder="first name"
                value={this.state.fields.firstName || ""}
                onChange={this.onInputChange}
                validate={(val) => (val ? false : "First Name Required")}
              />
            ) : (
              <div className="userEntry">{this.state.fields.firstName}</div>
            )}
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            {this.state.editing ? (
              <FormField
                type="text"
                name="lastName"
                placeholder="last name"
                value={this.state.fields.lastName}
                onChange={this.onInputChange}
                validate={(val) => (val ? false : "Last Name Required")}
              />
            ) : (
              <div className="userEntry">{this.state.fields.lastName}</div>
            )}
          </div>
          <div>
            <label htmlFor="username">Username</label>
            {this.state.editing ? (
              <FormField
                type="text"
                name="username"
                placeholder="username"
                value={this.state.fields.username}
                onChange={this.onInputChange}
                validate={(val) => (val ? false : "Username Required")}
              />
            ) : (
              <div className="userEntry">{this.state.fields.username}</div>
            )}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            {this.state.editing ? (
              <FormField
                type="email"
                name="email"
                placeholder="email"
                value={this.state.fields.email}
                onChange={this.onInputChange}
                validate={(val) => (isEmail(val) ? false : "Invalid Email")}
              />
            ) : (
              <div className="userEntry">{this.state.fields.email}</div>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            {this.state.editing ? (
              <FormField
                type="text"
                name="password"
                placeholder="password"
                value={this.state.fields.password}
                onChange={this.onInputChange}
                validate={(val) => (val ? false : "Password Required")}
              />
            ) : (
              <div className="userEntry">{this.state.fields.password}</div>
            )}
          </div>
          {this.state.editing ? (
            <div>
              <label htmlFor="passwordConfirmation">
                Password Confirmation
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
            </div>
          ) : null}
          {this.displayVerifyButton()}
          {this.displayEditAndConfirmButtons()}
        </StyledForm>
      </div>
    );
  }
}

export default Form;
