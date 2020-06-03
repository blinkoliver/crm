import React, { useEffect } from "react";
import Header from "../components/Header";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import "./App.scss";
import { connect } from "react-redux";
import Registration from "../screens/Registration";
import SignIn from "../screens/SignIn";
import MyServices from "../screens/MyServices";
import MyClients from "../screens/MyCliets";
import MyStaff from "./MyStaff";
import { getUserInfo } from "../actions/getUserInfo";

const App = (props) => {
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
    <div className="app">
      <Header />
      <main className="main">
        <Route path={"/registration"} component={Registration} />
        <Route path={"/signIn"} component={SignIn} />
        <Route path={"/myServices"} component={MyServices} />
        <Route path={"/myClients"} component={MyClients} />
        <Route path={"/myStaff"} component={MyStaff} />
      </main>
      <footer></footer>
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
