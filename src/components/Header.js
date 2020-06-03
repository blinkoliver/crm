import React, { useEffect } from "react";
import App from "../screens/App";
import { BrowserRouter as Route, NavLink, useHistory } from "react-router-dom";
import "./Header.scss";
import { connect } from "react-redux";
import { getUserInfo, userLogout } from "../actions/getUserInfo";

const Header = (props) => {
  let history = useHistory();

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken && accessToken.length > 10) {
      props.getUserInfo();
    } else {
      history.push("/signIn");
    }
  }, []);

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
            <li
              className="menu-item-registration"
              onClick={() => {
                localStorage.setItem("access_token", " ");
                props.userLogout();
                history.push("/");
              }}
            >
              <NavLink to={"/"}>Выйти</NavLink>
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
const mapDispatchToProps = (dispatch) => ({
  getUserInfo: () => dispatch(getUserInfo()),
  userLogout: () => dispatch(userLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
