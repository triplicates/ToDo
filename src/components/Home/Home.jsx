import React, { Component } from "react";
import "./Home.scss";

import Search from "../Search/Search.jsx";
import Header from "../Header/Header.jsx";

class Home extends Component {
  render() {
    return (
      <main className="main home">
        <Search placeholder="Найти на сайте" />
        <Header />
        <div className="home__container container">
          <h1>Home page</h1>
        </div>
      </main>
    );
  }
}

export default Home;
