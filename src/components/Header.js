import React from "react";
import App from "../screens/App";
import { BrowserRouter as Route, NavLink, Link } from "react-router-dom";
import "./Header.scss"

const Header = () => {
  return (
    <header className="Header">
    <div className="User-bar">
        <button>
          <Link to={"/registration"}>Регистрация</Link>
        </button>
        <button>
          <Link to={"/signin"}>Вход</Link>
        </button>
      </div>
      <div className="Menu-bar">
        <NavLink  to={"/myServices"} exact activeStyle={{color:"white"}}>
          <div>Мои услуги</div>
        </NavLink>
        <NavLink to={"/myClients"}>
          <div>Мои Клиенты</div>
        </NavLink>
        <NavLink to={"/myStaff"}>
          <div>Персонал</div>
        </NavLink>
      </div>
      <Route exact path="/" component={App} />
    </header>
  );
};

export default Header;
