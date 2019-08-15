import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store/store';
import App from './components/App/App';
import Login from './components/Login/Login'

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/files" component={Login} />
        <Route path="/" component={App} />
    </Router>
  </Provider>,
document.getElementById('root'));
