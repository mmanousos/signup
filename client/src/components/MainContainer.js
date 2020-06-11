import React, { Component } from "react";
import Confirmation from "./Confirmation";
import Form from "./Form";
import Verification from "./Verification";

class MainContainer extends Component {
  determineComponent = (props) => {
    switch (props.component) {
      case "edit":
        return <Form />;
      // break;
      case "verify":
        return <Verification />;
      // break;
      case "home":
        return <Form />;
      // break;
    }
  };

  render() {
    return (
      <main>
        <h2>{this.props.title}</h2>
        {this.props.msg ? <h3>{this.props.msg}</h3> : false}
        {this.determineComponent(this.props)}
      </main>
    );
  }
}

export default MainContainer;
