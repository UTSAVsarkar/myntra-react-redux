import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import myntraStore from "./store";

ReactDOM.render(
  <HashRouter>
    <Provider store={myntraStore}>
      <App />
    </Provider>
  </HashRouter>,

  document.getElementById("root")
);
