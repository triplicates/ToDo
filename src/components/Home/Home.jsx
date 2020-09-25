import React, { Component } from "react";
import "./Home.scss";
import ToDO from "../ToDo/ToDo.jsx";
class Home extends Component {
  render() {
    return (
      <main className="main">
        <div className="home__container container">
          <ToDO />
        </div>
      </main>
    );
  }
}

export default Home;
