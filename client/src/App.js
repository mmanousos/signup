import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import Form from "./components/Form";

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
          <h1>Sign Up</h1>
        </header>
        <Router>
          <Switch>
            <Route
              render={({ location }) => (
                <h3>
                  I'm sorry. You've found a page with no content at{" "}
                  {location.pathname}
                </h3>
              )}
            />
          </Switch>
        </Router>

        <p>{this.state.response}</p>
        <Form />
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;

/* <input
    type="text"
    value={this.state.post}
    onChange={(e) => this.setState({ post: e.target.value })}
  /> */
