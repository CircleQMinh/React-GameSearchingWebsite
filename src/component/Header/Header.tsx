import React, { Fragment, useState } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  NavItem,
  NavLink,
} from "react-bootstrap";
import "./Header.css";
function Header() {
  //dropdown
  const [show, setShow] = useState(false);
  const showDropdown = (e: any) => {
    setShow(!show);
  };
  const hideDropdown = (e: any) => {
    setShow(false);
  };
  return (
    <Fragment>
      <Navbar bg="appnav" variant="light" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand href="/" >
            <img
              alt=""
              src="https://res.cloudinary.com/dkmk9tdwx/image/upload/v1645846812/aga6qxnscxywukcunkd6.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Circle's Gaming Site
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/search" className="black">
                <i className="fa-solid fa-magnifying-glass me-2"></i>Search
              </Nav.Link>
              <Nav.Link href="/random" className="black">
                <i className="fa-solid fa-cube me-2"></i>Random Games
              </Nav.Link>
              <NavDropdown
                title={
                  <Fragment>
                    <i className="fa-solid fa-gamepad me-2 d-inline black"></i>
                    <p className="d-inline black">Game Modes</p>
                  </Fragment>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                  <Fragment>
                    <i className="fa-solid fa-g me-2 d-inline black"></i>
                    <p className="d-inline black">Genres</p>
                  </Fragment>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Genres</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                  <Fragment>
                    <i className="fa-brands fa-playstation me-2 d-inline black"></i>
                    <p className="d-inline black">Platforms</p>
                  </Fragment>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Platforms
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default Header;
