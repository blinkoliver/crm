import React, { useState, useEffect } from "react";
import App from "../screens/App";
import Registration from "../screens/Registration";
import { BrowserRouter as Route, NavLink, useHistory } from "react-router-dom";
import "./Header.scss";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { connect } from "react-redux";
import { getUserInfo, userLogout } from "../actions/getUserInfo";

const Header = (props) => {
  let history = useHistory();
  const [modal, setModal] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  let showMenu = () => {
    setMenuIsOpen(true);
  };
  let hideMenu = () => {
    setMenuIsOpen(false);
  };

  const { getUserInfo } = props;
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken && accessToken.length > 10) {
      getUserInfo();
    } else {
      history.push("/signIn");
    }
  }, [history, getUserInfo]);

  const toggle = () => {
    setModal(!modal);
  };

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
        {menuIsOpen ? (
          <>
            <ul className="humburger-open" onClick={hideMenu}>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div className="menu-vertical">
              <NavLink
                className="menu-item"
                to={"/statistic"}
                onClick={hideMenu}
              >
                Статистика
              </NavLink>
              <NavLink
                className="menu-item"
                to={"/myServices"}
                onClick={hideMenu}
              >
                Мои услуги
              </NavLink>
              <NavLink
                className="menu-item"
                to={"/myClients"}
                onClick={hideMenu}
              >
                Мои Клиенты
              </NavLink>
              <NavLink className="menu-item" to={"/myStaff"} onClick={hideMenu}>
                Персонал
              </NavLink>
              <NavLink className="menu-item" to={"/bank"} onClick={hideMenu}>
                Банк
              </NavLink>
              <NavLink className="menu-item" to={"/auto"} onClick={hideMenu}>
                Авто
              </NavLink>
            </div>
          </>
        ) : (
          <ul className="humburger-close" onClick={showMenu}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        )}
      </nav>
      <div className="header-login">
        {Object.keys(props.userInfo).length > 3 ? (
          <NavLink className="menu-item-signin" to={"/user-info"}>
            {props.userInfo.email}
          </NavLink>
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
              history.push("/home");
            }}
            to={"/"}
          >
            Выйти
          </NavLink>
        ) : (
          <p
            className="menu-item-registration"
            outline
            color="primary"
            onClick={toggle}
          >
            Регистрация
          </p>
        )}
      </div>
      <div className="header-language"></div>
      <Route exact path="/" component={App} />
      <Modal isOpen={modal} toggle={toggle} className="custom-modal-content">
        <ModalHeader toggle={toggle} className="custom-modal-header">
          Регистрация
        </ModalHeader>
        <ModalBody>
          <Registration />
        </ModalBody>
      </Modal>
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
