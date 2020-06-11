import PropTypes from "prop-types";
import React, { Component } from "react";

class FormField extends Component {
  static propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    validate: PropTypes.func,
    onChange: PropTypes.func.isRequired,
  };

  state = {
    value: this.props.value,
    error: false,
  };

  static getDerivedStateFromProps(nextProps) {
    return { value: nextProps.value };
  }

  onChange = (e) => {
    const name = this.props.name;
    const value = e.target.value;
    let error = this.props.validate ? this.props.validate(value) : false;
    if (this.props.password && this.props.password !== value) {
      error = "Passwords Must Match";
    }

    this.setState({ value, error });

    this.props.onChange({ name, value, error });
  };

  render() {
    return (
      <div>
        <p style={{ color: "red" }}>{this.state.error}</p>
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default FormField;
