import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer ">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About me</h6>
            <p className="text-justify">
              Circle <i>a.k.a Tron </i> is responsible for the site. My
              programming knownledge include C#, Java, HTML, CSS,
              JavaScript, SQL, and Algorithm.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>This website can help you to:</h6>
            <ul className="footer-links">
              <li>
                <Link to={"/search"}>Find a game</Link>
              </li>
              <li>
                <Link to={"/random"}>Suggest some random game</Link>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="https://github.com/CircleQMinh">My Github Page</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2022 All Rights Reserved by
              <a href="https://github.com/CircleQMinh"> Quốc Minh</a>.
              (28/05/2022)
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <Link className="facebook" to={"/home"}>
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link className="twitter" to={"/home"}>
                  <i className="fa fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link className="dribbble" to={"/home"}>
                  <i className="fa fa-dribbble"></i>
                </Link>
              </li>
              <li>
                <Link className="linkedin" to={"/home"}>
                  <i className="fa fa-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
