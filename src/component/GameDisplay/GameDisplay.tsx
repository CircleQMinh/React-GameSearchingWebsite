import React, { Fragment, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { getRandomGameAsync } from "../../redux/Game/reducer";
import DecoratedHeading from "../DecoratedHeading/DecoratedHeading";
import LoadingGif from "../LoadingGif/LoadingGif";
import GameCard from "./GameCard";
import "./GameDisplay.css";
function GameDisplay() {
  const dispatch = useAppDispatch();
  const { games, isLoading } = useAppSelector((state) => state.GameReducer);

  function getRandomGame() {
    dispatch(getRandomGameAsync());
  }

  useEffect(() => {
    getRandomGame();
  }, []);

  return (
    <Fragment>
      <div className="container opacity-95 bg-random">
        <div className="nk-blog-grid">
          <div className="row p-3">
            <DecoratedHeading
              primary="Random"
              secondary="Games"
            ></DecoratedHeading>
            {!isLoading && (
              <Fragment>
                {games.map((game) => {
                  return <GameCard game={game} key={game.id}></GameCard>;
                })}
              </Fragment>
            )}
            {isLoading && <LoadingGif></LoadingGif>}
          </div>{" "}
          <div className="container-fluid bg-black p-3 my-2 opacity-90">
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-danger"
                onClick={() => {
                getRandomGame();
                window.scrollTo(0, 0);
                }}
              >
                Load More Random Game...
              </button>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  );
}

export default GameDisplay;
