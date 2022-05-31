import React from "react";
import { Dropdown, NavDropdown, NavItem, NavLink } from "react-bootstrap";
import { Themes } from "../../constants/theme";

function ThemesDropdown() {
  const themes = Themes;
  return (
    <Dropdown title="Genre">
      <Dropdown.Toggle as={NavLink}>
        {" "}
        <i className=" fa-brands fa-ethereum me-2 d-inline black"></i>
        <p className="d-inline black">Themes</p>
      </Dropdown.Toggle>

      <Dropdown.Menu className="large-dropdown-menu">
        <div className="dropdown-menu-wrapper">
          <div>
            <ul>
              {[...Array(8)].map((x, i) => (
                <li className="dropdown-header" key={themes[i].id}>
                  <div className="menu-icon-wrapper">
                    <div>
                      <i className="col-2 fa  fa-star main-theme-color" />
                    </div>
                    <div>
                      <NavDropdown.Item href={`/theme/${themes[i].id}`}>
                        <b>{themes[i].name}</b>
                      </NavDropdown.Item>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {[...Array(8)].map((x, i) => (
                <li className="dropdown-header" key={themes[i + 8].id}>
                  <div className="menu-icon-wrapper">
                    <div>
                      <i className="col-2 fa  fa-star main-theme-color" />
                    </div>
                    <div>
                      <NavDropdown.Item href={`/theme/${themes[i + 8].id}`}>
                        <b>{themes[i + 8].name}</b>
                      </NavDropdown.Item>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {[...Array(6)].map((x, i) => (
                <li className="dropdown-header" key={themes[i+16].id}>
                  <div className="menu-icon-wrapper">
                    <div>
                      <i className="col-2 fa  fa-star main-theme-color" />
                    </div>
                    <div>
                      <NavDropdown.Item href={`/theme/${themes[i + 16].id}`}>
                        <b>{themes[i + 16].name}</b>
                      </NavDropdown.Item>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ThemesDropdown;
