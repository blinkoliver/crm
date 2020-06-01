import React from "react";
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
          <li className="menu-item-signin">
            <NavLink to={"/signin"}>Вход</NavLink>
          </li>
          {this.props.username.length > 0 && (
            <li>
              <NavLink to={"/user-info"}>user mail</NavLink>
            </li>
          )}
          <li className="menu-item-registration">
            <NavLink to={"/registration"}>Регистрация</NavLink>
          </li>
          {this.props.username.length > 0 && (
            <li>
              <NavLink to={"/log-out"}>Выйти</NavLink>
            </li>
          )}
        </ul>
      </nav>
      <Route exact path="/" component={App} />
    </header>
  );
};

const mapStateToProps = (state) => ({
  username: state.username,
});

export default connect(mapStateToProps, null)(Header);
