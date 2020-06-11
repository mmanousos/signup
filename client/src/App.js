import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import Form from "./components/Form";
// import Verification from "./components/Verification";
// import Confirmation from "./components/Confirmation";
import MainContainer from "./components/MainContainer";

class App extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: "",
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ response: res.express }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
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
              render={(props) => (
                <MainContainer
                  {...props}
                  component={"home"}
                  title={"Enter Your Details"}
                />
              )}
            />
            <Route
              path="/edit"
              render={(props) => (
                <MainContainer
                  {...props}
                  component={"edit"}
                  title={"Edit Your Details"}
                />
              )}
            />
            <Route
              path="/verify"
              render={(props) => (
                <MainContainer
                  {...props}
                  component={"verify"}
                  title={"Verify Details"}
                  msg={
                    "Click 'edit' to correct or 'confirm' if they are accurate."
                  }
                />
              )}
            />
            <Route
              path="/confirm"
              render={(props) => (
                <MainContainer
                  {...props}
                  component={"confirm"}
                  title={"Success!"}
                  msg={"Your account is now active."}
                />
              )}
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

        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default App;

/* <input
    type="text"
    value={this.state.post}
    onChange={(e) => this.setState({ post: e.target.value })}
  /> 
  
  <p>{this.state.responseToPost}</p>
  */

// main path title = 'Sign Up'
// edit path title = 'Edit'
// verify path title = 'Verify'
// confirmation path title = 'Success'
