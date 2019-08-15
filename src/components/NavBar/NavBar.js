import React from "react";
import { Nav, Navbar, NavItem, NavbarBrand, Button } from "reactstrap";

const NavBar = ({token, login, logout}) => (
  <Navbar color="light" light expand="md">
    <NavbarBrand>Yandex.disk</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        {!token ? (
          <Button color="primary" onClick={login}>
            Login
          </Button>
        ) : (
          <Button color="danger" onClick={logout}>
            Logout
          </Button>
        )}
      </NavItem>
    </Nav>
  </Navbar>
);

export default NavBar;
