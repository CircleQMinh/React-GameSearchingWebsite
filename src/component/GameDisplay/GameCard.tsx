import React, { Fragment } from "react";
import IGame from "../../interface/IGame";
import { generateImageUrl } from "../../utils/generateImageUrl";
import { generateReleaseDate } from "../../utils/generateReleaseDate";
import { getRandomColor } from "../../utils/getRandomColor";
import "./GameDisplay.css";
type Prop = {
  game: IGame;
};
function GameCard(props: Prop) {
  const game = props.game;
  const imageUrl = generateImageUrl(game.cover==null?null:game.cover.url);
  const release_date = generateReleaseDate(game.release_dates==null?null:game.release_dates![0])

  return (
    <div className="col-md-6 col-lg-3 game_cards">
      <div className="nk-blog-post">
        <a className="nk-post-img" href={`/game/${game.id}`}>
          <img
            className="mt-3"
            src={imageUrl}
            alt="He made his passenger captain of one" 
            
          />
          <span className="nk-post-comments-count">
            {game.follows == null ? "0" : game.follows}{" "}
            <i className="ms-2 fa-solid fa-thumbs-up"></i>
          </span>
          <span className="nk-post-categories">
            <span className="bg-main-5">
              Rating: {game.rating == null ? "NaN" : game.rating.toFixed(2)}(
              {game.rating_count == null ? "0" : game.rating_count})
            </span>
          </span>
        </a>
        <div className="nk-gap"></div>
        <h2 className="nk-post-title h4">
          <a href={`/game/${game.id}`} className="text-warning">
            {game.name}
          </a>
        </h2>
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

        {game.themes && (
          <Fragment>
            {game.themes?.map((t) => {
              return (
                <span
                  className={`badge me-1 bg-${getRandomColor((t.id ??= 0))}`}
                  key={t.id}
                >
                  {t.name}
                </span>
              );
            })}
          </Fragment>
        )}
        <hr className="text-danger"></hr>
        {game.platforms && (
          <Fragment>
            <p className="white d-inline  me-2">Platforms:</p>
            {game.platforms?.map((p) => {
              return (
                <span
                  className={`badge me-1 bg-${getRandomColor((p.id ??= 0))}`}
                  key={p.id}
                >
                  {p.name}
                </span>
              );
            })}
          </Fragment>
        )}

        <div className="nk-post-text game_des mt-2">
          <p className="white d-inline me-2 fs-4 ">Summary :</p>
          <p className="text-secondary">
            {game.summary == null ? "No summary found..." : game.summary}
          </p>
          <hr className="text-danger"></hr>
          <p className="white d-inline me-1 ">Release Date:</p>{" "}
          <span className="white d-inline  ">{release_date}</span>
        </div>
        <div className="nk-gap"></div>
        <a
          href={`/game/${game.id}`}
          className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
        >
          Read More
        </a>
        {/* <div className="nk-post-date float-right">
          {" "}
          <span className="fa fa-calendar"></span> Jul 23, 2018
        </div> */}
      </div>
    </div>
  );
}

export default GameCard;
