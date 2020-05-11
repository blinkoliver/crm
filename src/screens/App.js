import React from "react"
import Header from "../components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Registration from "../screens/Registration";
import SignIn from "../screens/SignIn";
import MyServices from "../screens/MyServices";

const App = () => {
  return (
    <Router>
      <div className="App">
          <Header />
        <Route path={"/registration"} component={Registration} />
        <Route path={"/signIn"} component={SignIn} />
        <Route path={"/myServices"} component={MyServices} />
        <footer></footer>
      </div>
    </Router>
  );
};

export default App;
