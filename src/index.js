import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store/store";
import App from "./components/App/App";
import Disk from "./components/Disk/Disk";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
      <Route path="/files" component={Disk} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
