import React from "react";
import Header from "../components/Header";
import { Route, NavLink } from "react-router-dom";
import "./App.scss";
import { connect } from "react-redux";
import SignIn from "../screens/SignIn";
import MyServices from "../screens/MyServices";
import MyClients from "../screens/MyCliets";
import MyStaff from "./MyStaff";
import Home from "./Home";
import { getUserInfo } from "../actions/getUserInfo";
import instagramLogo from "../img/instagramLogo.png";
import vkLogo from "../img/vkLogo.png";
import odnoklassnikiLogo from "../img/odnoklassnikiLogo.png";

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Route path={"/signIn"} component={SignIn} />
        <Route path={"/myServices"} component={MyServices} />
        <Route path={"/myClients"} component={MyClients} />
        <Route path={"/myStaff"} component={MyStaff} />
        <Route path={"/home"} component={Home} />
        <Route path={"/aboutUs"} component={Home} />
        <Route path={"/contact"} component={Home} />
        <Route path={"/howToUse"} component={Home} />
        <Route path={"/faq"} component={Home} />
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="aboutUs">
            <p>
              ООО "Наименование ИП"
              <br />
              2017-2020 Все права защищены
            </p>
          </div>
          <div className="contactUs">
            <div>
              <NavLink to={"/home"}>О Нас</NavLink>
              <NavLink to={"/home"}>Контакты</NavLink>
            </div>
            <div>
              <NavLink to={"/home"}>Как пользоваться</NavLink>
              <NavLink to={"/home"}>Вопрос-Ответ</NavLink>
            </div>
            <div>
              <NavLink to={"/home"}>Как пользоваться</NavLink>
              <NavLink to={"/home"}>Вопрос-Ответ</NavLink>
            </div>
          </div>
          <div className="social">
            <a href="https://www.instagram.com/">
              <img src={instagramLogo} alt="instagram" />
            </a>
            <a href="https://vk.com/">
              <img src={vkLogo} alt="vkonakte" />
            </a>
            <a href="https://ok.ru/">
              <img src={odnoklassnikiLogo} alt="odnoklassniki" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: () => dispatch(getUserInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
