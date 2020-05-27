import React from "react";
import Header from "../components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Registration from "../screens/Registration";
import SignIn from "../screens/SignIn";
import MyServices from "../screens/MyServices";
import MyClients from "../screens/MyCliets";
import MyStaff from "./MyStaff";

const App = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
