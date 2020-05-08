import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Registration from "./Registration";
import SignIn from "./SignIn";
import MyServices from "./MyServices";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="User-bar">
            <button>
              <Link to={"/registration"}>Регистрация</Link>
            </button>
            <button>
              <Link to={"/signin"}>Вход</Link>
            </button>
          </div>
          <div className="Menu-bar">
            <Link to={"/myServices"}>
              <div>Мои услуги</div>
            </Link>
            <div>Мои Клиенты</div>
            <div>Персонал</div>
          </div>
        </header>
        <Route path={"/registration"} component={Registration} />
        <Route path={"/signIn"} component={SignIn} />
        <Route path={"/myServices"} component={MyServices} />
      </div>
    </Router>
  );
};

export default App;
