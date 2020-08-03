import React, { useEffect } from "react";
import App from "../screens/App";
import { BrowserRouter as Route, NavLink, useHistory } from "react-router-dom";
import "./Header.scss";
import { connect } from "react-redux";
import { getUserInfo, userLogout } from "../actions/getUserInfo";

const Header = (props) => {
  let history = useHistory();
  const { getUserInfo } = props;
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken && accessToken.length > 10) {
      getUserInfo();
    } else {
      history.push("/signIn");
    }
  }, [history, getUserInfo]);

  return (
    <header className="header">
      <div className="header-logo">
        <NavLink to={"/home"}>
          <p>Business</p>
          <p>Helper</p>
        </NavLink>
      </div>
      <nav className="header-menu">
        <ul className="menu">
          <li className="menu-item">
            <NavLink to={"/statistic"}>Статистика</NavLink>
          </li>
          <li className="menu-item">
            <NavLink to={"/myServices"}>Мои услуги</NavLink>
          </li>
          <li className="menu-item">
            <NavLink to={"/myClients"}>Мои Клиенты</NavLink>
          </li>
          <li className="menu-item">
            <NavLink to={"/myStaff"}>Персонал</NavLink>
          </li>
          <li className="menu-item">
            <NavLink to={"/bank"}>Банк</NavLink>
          </li>
          <li className="menu-item">
            <NavLink to={"/auto"}>Авто</NavLink>
          </li>
        </ul>
      </nav>
      <div className="header-login">
        {Object.keys(props.userInfo).length > 3 ? (
          <NavLink to={"/user-info"}>{props.userInfo.email}</NavLink>
        ) : (
          <NavLink className="menu-item-signin" to={"/signin"}>
            Войти
          </NavLink>
        )}
        {Object.keys(props.userInfo).length > 3 ? (
          <NavLink
            className="menu-item-registration"
            onClick={() => {
              localStorage.setItem("access_token", " ");
              props.userLogout();
              history.push("/");
            }}
            to={"/"}
          >
            Выйти
          </NavLink>
        ) : (
          <NavLink className="menu-item-registration" to={"/registration"}>
            Регистрация
          </NavLink>
        )}
      </div>
      <div className="header-language">lang</div>
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
