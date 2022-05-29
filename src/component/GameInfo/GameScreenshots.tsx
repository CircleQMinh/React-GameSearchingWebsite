import React, { Fragment, useState } from 'react'
import IGameInfo from '../../interface/IGameInfo'
import {
  generateImageUrl,
  generateScreenshotUrl,
} from "../../utils/generateImageUrl";
type Props={
    game:IGameInfo
}

function GameScreenshots(props:Props) {
  const game = props.game;
  const [selectedScreenShot, setSelectedScreenShot] = useState(0);
    const numberOfScreenShot =
    game.screenshots != null ? game.screenshots.length : 0;
    function handleSwitchScreenShot(count: number) {
    if (numberOfScreenShot == 0) {
      return;
    }
    if (selectedScreenShot + count < 0) {
      setSelectedScreenShot(numberOfScreenShot - 1);
    } else {
      setSelectedScreenShot(selectedScreenShot + count);
    }
  }

  function openImageUrlNewTab(url:string) {
    window.open(url, "_blank"); //to open new page
  }
  return (
    <Fragment> <h3>Screenshots :</h3>
                  <div className="row justify-content-center">
                    <div
                      className="youplay-carousel youplay-carousel-size-1 youplay-slider gallery-popup  youplay-carousel-0 flickity-enabled is-draggable"
                      data-stage-padding="0"
                      data-dots="true"
                      data-arrows="false"
                    >
                      <div className="flickity-viewport fv1">
                        <div className="flickity-slider fv2">
                          <div className="is-selected fv3">
                            <a className="angled-img" >
                              <div className="img ">
                                {game.screenshots &&
                                  game.screenshots.map((sc, index) => {
                                    return (
                                      <img
                                      onClick={()=>{
                                        openImageUrlNewTab(
                                          generateScreenshotUrl(sc.url)
                                        );
                                      }}
                                        key={sc.id}
                                        className={
                                          selectedScreenShot %
                                            numberOfScreenShot ==
                                          index
                                            ? ""
                                            : "hide"
                                        }
                                        src={generateScreenshotUrl(sc.url)}
                                        alt=""
                                      />
                                    );
                                  })}
                                {!game.screenshots && (
                                  <img
                                    src={generateScreenshotUrl(null)}
                                    alt=""
                                  />
                                )}
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <ol className="flickity-page-dots d-flex justify-content-center align-items-center">
                        <li
                          onClick={() => {
                            handleSwitchScreenShot(-1);
                          }}
                        >
                          <i className="fa-solid fa-arrow-left-long fa-xl"></i>
                        </li>
                        <li className="mx-2 fs-2">
                          <p>{`${
                            (selectedScreenShot % numberOfScreenShot) + 1
                          }/${numberOfScreenShot}`}</p>
                        </li>
                        <li
                          onClick={() => {
                            handleSwitchScreenShot(1);
                          }}
                        >
                          <i className="fa-solid fa-arrow-right-long fa-xl"></i>
                        </li>
                      </ol>
                    </div>
                  </div></Fragment>
  )
}

export default GameScreenshots