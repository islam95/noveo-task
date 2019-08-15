import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  Navbar,
  NavbarBrand,
  Button,
  Jumbotron
} from 'reactstrap';
import {performLogin} from '../../redux/actions/auth';
import {getFiles} from '../../redux/actions/disk';

class Login extends Component {

  state = {
    accessToken: null,
    files: []
  }

  login = () => {
    this.props.performLogin()
  }

  getFiles = async () => {
    if (this.props.token) {
      this.props.getFiles(this.props.token)
    } else {
      alert('Authenticate first')
    }
  }
  
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>Yandex.disk</NavbarBrand>
        </Navbar>
        <Jumbotron>
          <h1 className="display-3">Welcome!</h1>
          <p className="lead">Вы можете просматривать ваш Yandex disk в этом приложении. Но сперва вам придётся авторизоваться</p>
          <hr className="my-2" />
          <p>При нажатии кнопки ниже вы перейдете на страницу входа в Yandex.</p>
          <p className="lead">
            <Button color="primary" onClick={this.login}>Login</Button>
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
    performLogin: () => {
      return dispatch(performLogin())
    },
    getFiles: (token) => {
      return dispatch(getFiles(token))
    }
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

