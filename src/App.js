import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import HeaderComp from "./extraComponents/HeaderComp";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderComp />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
