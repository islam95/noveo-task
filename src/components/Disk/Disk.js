import React, { Component } from "react";
import { connect } from "react-redux";
import { checkAuth } from "../../redux/actions/auth";
import { getFiles } from "../../redux/actions/disk";
import { Button, Table, Container, Row, Col } from "reactstrap";
import Breadcrumb from "./Breadcrumb";
import DiskContent from "./DiskContent";

class Disk extends Component {
  componentDidMount() {
    this.props.checkAuth();
  }

  getDisk = async (path = "/") => {
    const { token } = this.props;
    if (token) {
      this.props.onGetFiles(token, encodeURIComponent(path));
    } else {
      this.props.history.push("/");
    }
  };

  render() {
    const { token, diskFiles } = this.props;
    return !token ? null : (
      <React.Fragment>
        {!diskFiles ? (
          <div style={{ textAlign: "center" }}>
            <Button color="success" onClick={() => this.getDisk()}>
              Get your files
            </Button>
          </div>
        ) : (
          <div style={{ align: "center" }}>
            <Container>
              <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                  <h1>Files in your Yandex.Disk</h1>
                  <br />
                  <Breadcrumb path={diskFiles.path} getDisk={this.getDisk} />
                  <Table striped>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Size</th>
                      </tr>
                    </thead>
                    <DiskContent files={diskFiles} getDisk={this.getDisk} />
                  </Table>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ auth, disk }) => {
  return {
    token: auth.token,
    diskFiles: disk.disk
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkAuth: () => dispatch(checkAuth()),
    onGetFiles: (token, path) => {
      return dispatch(getFiles(token, path));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Disk);
