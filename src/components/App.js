import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Products from "./Products";
import Login from "./Login";
import Cart from "./Cart";
import history from "../history";

class App extends Component {
  state = {
    products_ordered: {}
  };

  render() {
    return (
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/login" exact component={Login} />
          <Route path="/ordered" exact component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default App;
