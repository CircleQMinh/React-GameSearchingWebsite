import React from 'react'
import { Dropdown, NavDropdown, NavItem, NavLink } from 'react-bootstrap';

function genreDropdown() {
  return (
    <Dropdown title="Genre">
      <Dropdown.Toggle as={NavLink}>
        {" "}
        <i className="fa-solid fa-g me-2 d-inline black"></i>
        <p className="d-inline black">Genres</p>
      </Dropdown.Toggle>

      <Dropdown.Menu className="large-dropdown-menu">
        <div className="dropdown-menu-wrapper">
          <div>
            <ul>
              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa  fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/2">
                      <b>Point-and-click</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>
              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/4">
                      <b>Fighting</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>
              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/5">
                      <b>Shooter</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>
              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/7">
                      <b>Music</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>
              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/8">
                      <b>Platform</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>
              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/9">
                      <b>Puzzle</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>
              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/10">
                      <b>Racing</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>
              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    {" "}
                    <NavDropdown.Item href="/genre/14">
                      <b>Sport</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/11">
                      <b>Real Time Strategy (RTS)</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>
              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/13">
                      <b>Simulator</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>
              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/12">
                      <b>Role-playing (RPG)</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>
              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/15">
                      <b>Strategy</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>
              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/16">
                      <b>Turn-based strategy (TBS)</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>

              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/24">
                      <b>Tactical</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>
              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/25">
                      <b>Hack and slash</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>
              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/26">
                      <b>Quiz</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/30">
                      <b>Pinball</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>
              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/31">
                      <b>Adventure</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>
              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/32">
                      <b>Indie</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>
              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/33">
                      <b>Arcade</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>
              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/34">
                      <b>Visual Novel</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>

              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/35">
                      <b>Card Game</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>
              <li className="dropdown-header">
                <div className="menu-icon-wrapper">
                  <div>
                    <i className="col-2 fa   fa-star main-theme-color" />
                  </div>
                  <div>
                    <NavDropdown.Item href="/genre/36">
                      <b>MOBA Game</b>
                    </NavDropdown.Item>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default genreDropdown