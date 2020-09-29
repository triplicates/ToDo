import React, { Component } from "react";
import "./Home.scss";
import ToDO from "../ToDo/ToDo.jsx";
class Home extends Component {
  render() {
    let datas = [
      {
        id: 1,
        text: "Купить хлеб",
      },
      {
        id: 2,
        text: "Купить воду",
      },
      {
        id: 3,
        text: "Встретиться с Томом",
      },
      {
        id: 4,
        text: "Заправить машину",
      },
    ];
    return (
      <main className="main">
        <div className="home__container container">
          <ToDO datas={datas} />
        </div>
      </main>
    );
  }
}

export default Home;
