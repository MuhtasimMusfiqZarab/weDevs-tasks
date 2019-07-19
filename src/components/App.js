import React, { Component, Fragment } from "react";
import Header from "./Header";
import Products from "./Products";

class App extends Component {
  state = {
    products_ordered: {}
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Products products={this.state.products_ordered} />
      </Fragment>
    );
  }
}

export default App;
