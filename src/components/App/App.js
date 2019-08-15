import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  Nav,
  Navbar,
  NavItem,
  NavbarBrand,
  Button,
  Jumbotron
} from 'reactstrap';
import {performLogin, checkAuth, performLogout} from '../../redux/actions/auth';
import {getFiles} from '../../redux/actions/disk';

class Login extends Component {

  componentDidMount() {
    this.props.checkAuth()
  }

  login = () => {
    this.props.performLogin()
  }

  logout = () => {
    this.props.performLogout()
  }

  getFiles = async () => {
    if (this.props.token) {
      this.props.getFiles(this.props.token, encodeURIComponent('/'))
    } else {
      alert('Authenticate first')
    }
  }
  
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>Yandex.disk</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
            {!this.props.token ? 
            <Button color="primary" onClick={this.login}>Login</Button> :
            <Button color="danger" onClick={this.logout}>Logout</Button>}
            </NavItem>
          </Nav>
        </Navbar>
       
          <Jumbotron>
            <h1 className="display-3">Welcome my friend!</h1>
            <p className="lead">You can explore your Yandex disk in this app. But first you need to login.</p>
            <hr className="my-2" />
            <p>Please login. You will be redirected to Yandex signin page. See you soon!</p>
            <p className="lead">
              {!this.props.token && <Button color="primary" onClick={this.login}>Login</Button>}
              <Button color="primary" onClick={this.getFiles}>Get files</Button>
            </p>
            {this.props.token}
            {JSON.stringify(this.props.files)}
          </Jumbotron>
      

      </div>
    );
  }
}

const mapStateToProps = ({auth, disk}) => {
  return {
    token: auth.token,
    files: disk.files
  };
};

const mapDispatchToProps = dispatch => {
  return {
    performLogin: () => dispatch(performLogin()),
    performLogout: () => dispatch(performLogout()),
    checkAuth: () => dispatch(checkAuth()),
    getFiles: (token, path) => {
      return dispatch(getFiles(token, path))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

