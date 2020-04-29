import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Registration from "./Registration";
import SignIn from "./SignIn";
import "./App.css";

function App() {
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
            <div>4 menu</div>
            <div>5 menu</div>
            <div>6 menu</div>
          </div>
        </header>
        <Route path={"/registration"} component={Registration} />
        <Route path={"/signIn"} component={SignIn} />
      </div>
    </Router>
  );
}

export default App;
