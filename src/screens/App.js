import React from "react";
import Header from "../components/Header";
import { Route } from "react-router-dom";
import "./App.scss";
import { connect } from "react-redux";
import Registration from "../screens/Registration";
import SignIn from "../screens/SignIn";
import MyServices from "../screens/MyServices";
import MyClients from "../screens/MyCliets";
import MyStaff from "./MyStaff";
import { getUserInfo } from "../actions/getUserInfo";

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Route path={"/registration"} component={Registration} />
        <Route path={"/signIn"} component={SignIn} />
        <Route path={"/myServices"} component={MyServices} />
        <Route path={"/myClients"} component={MyClients} />
        <Route path={"/myStaff"} component={MyStaff} />
      </main>
      <footer className="footer"></footer>
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
