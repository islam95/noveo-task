import React from "react";
import { Nav, Navbar, NavItem, NavbarBrand, Button } from "reactstrap";

const NavBar = props => (
  <Navbar color="light" light expand="md">
    <NavbarBrand>Yandex.disk</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        {!props.token ? (
          <Button color="primary" onClick={props.login}>
            Login
          </Button>
        ) : (
          <Button color="danger" onClick={props.logout}>
            Logout
          </Button>
        )}
      </NavItem>
    </Nav>
  </Navbar>
);

export default NavBar;
