import React, { Component } from "react";
import { connect } from "react-redux";
import { checkAuth } from "../../redux/actions/auth";
import { getFiles } from "../../redux/actions/disk";
import { Button, Table, Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import {formatBytes} from "../../helpers/helpers";
import { FaFolder } from "react-icons/fa";

class Disk extends Component {
  componentDidMount() {
    this.props.checkAuth();
  }

  getFiles = async () => {
    const { token } = this.props;
    if (token) {
      this.props.getFiles(token, encodeURIComponent("/"));
    } else {
      alert("Authenticate first");
    }
  };

  render() {
    const { token, files } = this.props;
    return !token ? null : (
      <React.Fragment>
        {files.length === 0 ? (
          <div style={{ textAlign: "center" }}>
            <Button color="success" onClick={this.getFiles}>
              Get your files
            </Button>
          </div>
        ) : (
          <div style={{ align: "center" }}>
            <Container>
              <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                  <h1>Files in your Yandex.Disk</h1>
                  <br/>
                  <Breadcrumb tag="nav" listTag="div">
                    <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
                    <BreadcrumbItem tag="a" href="#">Library</BreadcrumbItem>
                    <BreadcrumbItem tag="a" href="#">Data</BreadcrumbItem>
                    <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
                  </Breadcrumb>
                  <Table striped>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Size</th>
                      </tr>
                    </thead>
                    <tbody>
                      {files.map((file, i) => {
                        const { name, path, type, size } = file;
                        
                        return (
                          <tr key={i}>
                            <td>
                              {type === "dir" && <FaFolder />}{" "}{name}
                            </td>
                            <td>{type === 'file' && formatBytes(size)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
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
    files: disk.files
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkAuth: () => dispatch(checkAuth()),
    getFiles: (token, path) => {
      return dispatch(getFiles(token, path));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Disk);
