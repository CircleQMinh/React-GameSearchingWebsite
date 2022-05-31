import React, { Fragment } from "react";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import "./ErrorPage.css";
function ErrorPage() {
  return (
    <Fragment>
      <Header></Header>
      <div className="background_cover_3">
        <div className="box mt-5">
          <div className="box__ghost">
            <div className="symbol"></div>
            <div className="symbol"></div>
            <div className="symbol"></div>
            <div className="symbol"></div>
            <div className="symbol"></div>
            <div className="symbol"></div>

            <div className="box__ghost-container">
              <div className="box__ghost-eyes">
                <div className="box__eye-left"></div>
                <div className="box__eye-right"></div>
              </div>
              <div className="box__ghost-bottom">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="box__ghost-shadow"></div>
          </div>

          <div className="box__description">
            <div className="box__description-container">
              <div className="box__description-title">Whoops!</div>
              <div className="box__description-text">
                It seems like we couldn't find the page you were looking for
              </div>
            </div>

            <a
              href="/"
              className="box__button"
            >
              Go back
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ErrorPage;
