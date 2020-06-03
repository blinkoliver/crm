import React, { useEffect } from "react";
import App from "../screens/App";
import { BrowserRouter as Route, NavLink } from "react-router-dom";
import "./Header.scss";
import { connect } from "react-redux";

const Header = (props) => {
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

          {Object.keys(props.userInfo).length > 0 ? (
            <li>
              <NavLink to={"/user-info"}>{props.userInfo.email}</NavLink>
            </li>
          ) : (
            <li className="menu-item-signin">
              <NavLink to={"/signin"}>Вход</NavLink>
            </li>
          )}
          {Object.keys(props.userInfo).length > 0 ? (
            <li className="menu-item-registration">
              <NavLink to={"/log-out"}>Выйти</NavLink>
            </li>
          ) : (
            <li className="menu-item-registration">
              <NavLink to={"/registration"}>Регистрация</NavLink>
            </li>
          )}
        </ul>
      </nav>
      <Route exact path="/" component={App} />
    </header>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

export default connect(mapStateToProps, null)(Header);
