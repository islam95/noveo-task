import React, { Component } from "react";
import { connect } from "react-redux";
import { checkAuth } from "../../redux/actions/auth";
import { getFiles } from "../../redux/actions/disk";
import {
  Button,
  Table,
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { formatBytes, removeDiskColumn } from "../../helpers/helpers";
import { FaFolder } from "react-icons/fa";
import { Link } from "react-router-dom";

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
                  <Breadcrumb tag="nav" listTag="div">
                    {diskFiles.path === "disk:/" ? (
                      <BreadcrumbItem active tag="span">
                        {diskFiles.path}
                      </BreadcrumbItem>
                    ) : (
                      ""
                    )}
                  </Breadcrumb>
                  <Table striped>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Size</th>
                      </tr>
                    </thead>
                    <tbody>
                      {diskFiles.items.map((item, i) => {
                        const { name, path, type, size } = item;
                        console.log(path);
                        const newPath = removeDiskColumn(path);
                        
                        return (
                          <tr key={i}>
                            <td>
                              {type === "dir" ? (
                                <React.Fragment>
                                  <Button
                                    color="link"
                                    onClick={() => this.getDisk(name)}
                                  >
                                    <FaFolder />{" "}
                                    <Link to={`${newPath}`}>{name}</Link>
                                  </Button>
                                </React.Fragment>
                              ) : (
                                name
                              )}
                            </td>
                            <td>{type === "file" && formatBytes(size)}</td>
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
