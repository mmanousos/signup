import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";

class App extends Component {
  state = {
    account: {},
    confirmed: false,
  };

  handleCreate = async () => {
    await fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ account: this.state.account }),
    });

    this.setState({ confirmed: true });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Create Account</h1>
        </header>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                this.state.confirmed ? (
                  <div>
                    <h2>Success!</h2>
                    <h3>Your account is now active.</h3>
                  </div>
                ) : (
                  <Form create={this.handleCreate} />
                )
              }
            />
            <Route
              render={() => (
                <div>
                  <h2>Oh no!</h2>
                  <h3>I'm sorry. You've found a page with no content.</h3>
                </div>
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
