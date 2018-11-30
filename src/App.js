import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import HeaderComp from "./extraComponents/HeaderComp";
import SingleProd from "./pages/SingleProd/SingleProd";
import ProdList from "./pages/ProdList/ProdList";
import { mapDispatchToProps, mapStateToProps } from "./reducers/receivedData";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.addData();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderComp />
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Home products={this.props.products.slice(0, 5)} />
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/products/:id" component={SingleProd} />} />
            <Route
              path="/products"
              component={() => <ProdList products={this.props.products} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
