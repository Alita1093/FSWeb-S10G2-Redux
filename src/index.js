import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers";
const store = createStore(rootReducer);

import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
