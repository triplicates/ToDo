import React, { Component } from "react";
import "./Header.scss";
import HeaderList from "../HeaderList/HeaderList.jsx";
import { Link } from "react-router-dom";
import Button from "../Button/Button.jsx";
class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__inner header__inner_centered header__inner_padding">
          <div className="header__logo logo">Home.</div>
          <nav className="header__nav">
            <ul className="header__ul">
              <li className="header__list header__list_hovered">
                <Link className="header__list-link" to="/">
                  Сведения об образовательной Организации
                </Link>
                {/*TODO Drop-down menu*/}
                {/*  <div className="drop-down-menu">
                  <div className="drop-down-menu__inner">
                    <nav className="drop-down-menu__nav">
                      <ul className="drop-down-menu__ul">
                        <li className="drop-down-menu__list"></li>
                        <li className="drop-down-menu__list"></li>
                        <li className="drop-down-menu__list"></li>
                        <li className="drop-down-menu__list"></li>
                      </ul>
                    </nav>
                  </div>
                </div> */}
              </li>
              <li className="header__list header__list_hovered">
                <Link className="header__list-link" to="/">
                  Поступающим
                </Link>
              </li>
              <li className="header__list header__list_hovered">
                <Link className="header__list-link" to="/">
                  Студентам
                </Link>{" "}
              </li>
              <li className="header__list header__list_hovered">
                <Link className="header__list-link" to="/">
                  Родителям
                </Link>
              </li>
            </ul>
          </nav>
          <Button className="header__btn" text="Войти" />
        </div>
      </header>
    );
  }
}

export default Header;
