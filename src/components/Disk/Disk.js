import React, { Component } from "react";
import { connect } from "react-redux";
import { checkAuth } from "../../redux/actions/auth";

class Disk extends Component {
  componentDidMount() {
    this.props.checkAuth();
  }
  render() {
    return <div>This is a file explorer</div>;
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
    checkAuth: () => dispatch(checkAuth())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Disk);