import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";

class App extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: "",
    account: "",
    verified: false,
  };

  // componentDidMount() {
  //   this.callApi()
  //     .then((res) => this.setState({ response: res.express }))
  //     .catch((err) => console.log(err));
  // }
  // componentDidMount() {
  //   this.callApi()
  //     .then((res) => this.setState({ account: res.express }))
  //     .catch((err) => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch("/api/hello");
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };
  // callApi = async () => {
  //   const response = await fetch("/verify");
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("/api/world", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ post: this.state.post }),
  //   });
  //   const body = await response.text();

  //   this.setState({ responseToPost: body });
  // };

  redirectVerify = () => {
    console.log("I will redirect you now");
    // redirect to /verify
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Create Account</h1>
        </header>
        <Router>
          <Switch>
            <Route exact path="/" component={Form} />
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

/* <input
    type="text"
    value={this.state.post}
    onChange={(e) => this.setState({ post: e.target.value })}
  /> 
  
  <p>{this.state.account}</p>
  */

//  <Router>
//  <Switch>
//    <Route
//      exact
//      path="/"
//      render={(props) => (
//        <MainContainer
//          {...props}
//          component={"home"}
//          title={"Enter Your Details"}
//          redirect={this.redirectVerify}
//        />
//      )}
//    />
//    <Route
//      path="/edit"
//      render={(props) => (
//        <MainContainer
//          {...props}
//          component={"edit"}
//          title={"Edit Your Details"}
//        />
//      )}
//    />
//    <Route
//      path="/verify"
//      render={(props) => (
//        <MainContainer
//          {...props}
//          component={"verify"}
//          title={"Verify Details"}
//          msg={
//            "Click 'edit' to correct or 'confirm' if they are accurate."
//          }
//          // add redirectEdit and redirectSubmit functions / props
//        />
//      )}
//    />
//    <Route
//      path="/confirm"
//      render={(props) => (
//        <MainContainer
//          {...props}
//          component={"confirm"}
//          title={"Success!"}
//          msg={"Your account is now active."}
//        />
//      )}
//    />

//    <Route
//      render={() => (
//        <div>
//          <h2>Oh no!</h2>
//          <h3>I'm sorry. You've found a page with no content.</h3>
//        </div>
//      )}
//    />
//  </Switch>
// </Router>
