import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import myntraStore from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <HashRouter>
    <Provider store={myntraStore}>
      <App />
    </Provider>
  </HashRouter>,

  document.getElementById("root")
);
