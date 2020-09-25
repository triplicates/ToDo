import React from "react";
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Switch, Route} from "react-router"
import "./components/Index/index.css"
import Home from "./components/Home/Home.jsx"

ReactDOM.render(<Home />,document.querySelector('#root'))