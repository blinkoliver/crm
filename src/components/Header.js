import React from "react";
import App from "../screens/App";
import { BrowserRouter as Route, NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
          <NavLink to={"/"}>Твой бизнес</NavLink>
      </div>
      <nav className="header-menu">
        <ul className="menu">
            <li className="menu-item">
              <NavLink to={"/myServices"}>Мои услуги</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to={"/myClients"}>Мои Клиенты</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to={"/myStaff"}>Персонал</NavLink>
            </li>
            <li className="menu-item-signin">
              <NavLink to={"/signin"}>Вход</NavLink>
            </li>
            <li className="menu-item-registration">
              <NavLink to={"/registration"}>Регистрация</NavLink>
            </li>
        </ul>
      </nav>
      <Route exact path="/" component={App} />
    </header>
  );
};

export default Header;
