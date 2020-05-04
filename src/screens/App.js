import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Registration from "./Registration";
import SignIn from "./SignIn";
import Test from "../components/Test";
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
            <div>Мои услуги</div>
            <div>Мои Клиенты</div>
            <div>Персонал</div>
            <div>Тест</div>
            <div>Тест</div>
            <Link to={"/Test"}>
              <div>Тест</div>
            </Link>
          </div>
        </header>
        <Route path={"/registration"} component={Registration} />
        <Route path={"/signIn"} component={SignIn} />
        <Route path={"/test"} component={Test} />
      </div>
    </Router>
  );
};

export default App;
