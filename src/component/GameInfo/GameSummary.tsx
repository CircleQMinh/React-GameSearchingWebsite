import React, { Fragment, useState } from "react";
import { WebsiteEnums } from "../../constants/enum";
import IGameInfo from "../../interface/IGameInfo";
import {
  generateImageUrl,
  generateScreenshotUrl,
} from "../../utils/generateImageUrl";
import { generateReleaseDate } from "../../utils/generateReleaseDate";
import { getRandomColor } from "../../utils/getRandomColor";
import GameScreenshots from "./GameScreenshots";
import GameVideos from "./GameVideos";
type Props = {
  game: IGameInfo;
};
function GameSummary(props: Props) {
  const game = props.game;
  const coverImageUrl = generateImageUrl(
    game.cover == null ? null : game.cover.url
  );
  const release_date = generateReleaseDate(
    game.release_dates == null ? null : game.release_dates![0]
  );

  return (
    <Fragment>
      <div className="content-wrap">
        <div className="container youplay-news youplay-post">
          <div className="row">
            <div className="col-12 col-lg-8  white " id="des_col">
              <h3 className="white lead fs-1 fw-bold text-warning">
                {game.name}{" "}
              </h3>

              <article className="news-one">
                <div className="description">
                  {game.screenshots && (
                    <GameScreenshots game={game}></GameScreenshots>
                  )}

                  <h3>Description :</h3>

                  <p>{game.summary}</p>
                  {game.storyline && (
                    <Fragment>
                      <h3>Storyline :</h3>

                      <p>{game.storyline}</p>
                    </Fragment>
                  )}
                  <h3>Release Date : {release_date}</h3>
                  {game.involved_companies && (
                    <Fragment>
                      <h3>Publisher :</h3>
                      <ul>
                        {game.involved_companies.map((company) => {
                          return (
                            <li key={company.id}> {company.company?.name}</li>
                          );
                        })}
                      </ul>
                    </Fragment>
                  )}

                  {game.videos && (
                    <Fragment>
                      <h3>Videos :</h3>
                      <GameVideos videos={game.videos}></GameVideos>
                    </Fragment>
                  )}
                </div>
              </article>
            </div>

            <div
              className="col-12 col-lg-4 white border-start border-5 border-danger"
              id="info_col"
            >
              <div className="side-block">
                <h4 className="block-title">{`Game ID: ${game.id}`}</h4>
                <div className="img d-flex justify-content-center">
                  <img src={`${coverImageUrl}`} alt="" />
                </div>
              </div>
              <div className="side-block">
                <h4 className="block-title">
                  {" "}
                  <i className="fa-solid fa-star me-2"></i>Genres
                </h4>
                {game.genres && (
                  <Fragment>
                    {game.genres?.map((genre) => {
                      return (
                        <span
                          className={`badge me-1 bg-${getRandomColor(
                            (genre.id ??= 0)
                          )}`}
                          key={genre.id}
                        >
                          {genre.name}
                        </span>
                      );
                    })}
                  </Fragment>
                )}
              </div>
              <div className="side-block">
                <h4 className="block-title">
                  <i className="fa-solid fa-star me-2"></i>Themes
                </h4>
                {game.themes && (
                  <Fragment>
                    {game.themes?.map((themes) => {
                      return (
                        <span
                          className={`badge me-1 bg-${getRandomColor(
                            (themes.id ??= 0)
                          )}`}
                          key={themes.id}
                        >
                          {themes.name}
                        </span>
                      );
                    })}
                  </Fragment>
                )}
              </div>
              <div className="side-block">
                <h4 className="block-title">
                  {" "}
                  <i className="fa-solid fa-star me-2"></i>Platforms
                </h4>
                {game.platforms && (
                  <Fragment>
                    {game.platforms?.map((p) => {
                      return (
                        <span
                          className={`badge me-1 bg-${getRandomColor(
                            (p.id ??= 0)
                          )}`}
                          key={p.id}
                        >
                          {p.name}
                        </span>
                      );
                    })}
                  </Fragment>
                )}
              </div>

              <div className="side-block">
                <h4 className="block-title">
                  {" "}
                  <i className="fa-solid fa-globe me-2"></i>Website
                </h4>
                {game.websites && (
                  <Fragment>
                    {game.websites?.map((p) => {
                      return (
                        <span
                          className={`badge me-1 bg-${getRandomColor(
                            (p.id ??= 0)
                          )}`}
                          key={p.id}
                        >
                          <a href={p.url!} about="_blank">
                            {WebsiteEnums[p.category!]}
                          </a>{" "}
                        </span>
                      );
                    })}
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default GameSummary;
