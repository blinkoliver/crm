import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router } from "react-router-dom";

import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "../src/screens/App";
import reducer from "../src/reducers/getUserInfo";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
