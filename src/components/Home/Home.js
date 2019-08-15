import React from "react";
import { Jumbotron, Button } from "reactstrap";

const Home = props => (
  <Jumbotron>
    <h1 className="display-3">Welcome my friend!</h1>
    <p className="lead">
      You can explore your Yandex disk in this app. But first you need to login.
    </p>
    <hr className="my-2" />
    <p>
      Please login. You will be redirected to Yandex signin page. See you soon!
    </p>
    <p className="lead">
      <Button color="primary" onClick={props.login}>
        Login
      </Button>
    </p>
  </Jumbotron>
);

export default Home;
