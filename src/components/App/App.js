import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  performLogin,
  checkAuth,
  performLogout
} from "../../redux/actions/auth";
// import { getFiles } from "../../redux/actions/disk";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";

class App extends Component {
  componentDidMount() {
    this.props.checkAuth();
  }

  login = () => {
    this.props.performLogin();
    this.props.history.push("/disk");
  };

  logout = () => {
    this.props.performLogout();
    this.props.history.push("/");
  };

  // getFiles = async () => {
  //   const { token } = this.props;
  //   if (token) {
  //     this.props.getFiles(token, encodeURIComponent("/"));
  //   } else {
  //     console.log("Authenticate first");
  //   }
  // };

  render() {
    const { token } = this.props;
    return (
      <React.Fragment>
        <NavBar token={token} login={this.login} logout={this.logout} />
        {!token && <Home login={this.login} />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ auth, disk }) => {
  return {
    token: auth.token,
    files: disk.files
  };
};

const mapDispatchToProps = dispatch => {
  return {
    performLogin: () => dispatch(performLogin()),
    performLogout: () => dispatch(performLogout()),
    checkAuth: () => dispatch(checkAuth())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
