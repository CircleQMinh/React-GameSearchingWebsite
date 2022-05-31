import React, { Fragment, useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  NavItem,
  NavLink,
} from "react-bootstrap";
import { PlatformFamily } from "../../constants/platform";
import GenresDropdown from "./GenresDropdown";
import "./Header.css";
import ThemesDropdown from "./ThemesDropdown";
function Header() {
  const platforms = PlatformFamily
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
          <Navbar.Brand href="/">
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
            <Nav className="justify-content-start">
              <Nav.Link href="/search" className="black">
                <i className="fa-solid fa-magnifying-glass me-2"></i>Search
              </Nav.Link>
              <GenresDropdown></GenresDropdown>
              <ThemesDropdown></ThemesDropdown>
              <NavDropdown
                title={
                  <Fragment>
                    <i className="fa-solid fa-gamepad me-2 d-inline black"></i>
                    <p className="d-inline black">Game Modes</p>
                  </Fragment>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/gamemode/1">
                  Single player
                </NavDropdown.Item>
                <NavDropdown.Item href="/gamemode/2">
                  Multiplayer
                </NavDropdown.Item>
                <NavDropdown.Item href="/gamemode/3">
                  Co-operative
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/gamemode/4">
                  Split screen
                </NavDropdown.Item>
                <NavDropdown.Item href="/gamemode/5">
                  Massively Multiplayer Online (MMO)
                </NavDropdown.Item>
                <NavDropdown.Item href="/gamemode/6">
                  Battle Royale
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
                {
                  platforms.map((e)=>{
                    return (
                      <NavDropdown.Item href={`/platform/${e.id}`} key={e.id}>
                        {e.name}
                      </NavDropdown.Item>
                    );
                  })
                }
          

              </NavDropdown>
              <Nav.Link href="/random" className="black">
                <i className="fa-solid fa-cube me-2"></i>Random Games
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default Header;
