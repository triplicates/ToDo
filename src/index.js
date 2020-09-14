import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/Index/index.css";
import Home from "./components/Home/Home.jsx";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home}></Route>
    </Switch>
  </Router>,
  document.querySelector("#root")
);
