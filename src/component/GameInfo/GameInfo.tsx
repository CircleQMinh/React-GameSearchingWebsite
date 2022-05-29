import React, { Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { getGameAsync } from "../../redux/Game/reducer";
import DecoratedHeading from "../DecoratedHeading/DecoratedHeading";
import LoadingGif from "../LoadingGif/LoadingGif";
import "./GameInfo.css";
import GameRelated from "./GameRelated";
import GameSummary from "./GameSummary";
type Props = {
  gameId: number;
};
function GameInfo(props: Props) {
  const gameId = props.gameId;
  const dispatch = useAppDispatch();
  const { game, isLoading } = useAppSelector((state) => state.GameReducer);

  useEffect(() => {
    dispatch(getGameAsync(gameId))
  }, [])
  

  return (
    <Fragment>
      <div className="container opacity-95  bg-random">
        <div className="nk-blog-grid">
          <div className="row p-3">
            <DecoratedHeading
              primary="Game"
              secondary="Infomation"
            ></DecoratedHeading>
            {!isLoading && (
              <Fragment>
                {game && (
                  <Fragment>
                    <GameSummary game={game}></GameSummary>
                    <GameRelated game={game}></GameRelated>
                  </Fragment>
                )}
                {!game && (
                  <p className="white fs-1 text-center">No info found.</p>
                )}
              </Fragment>
            )}
            {isLoading && <LoadingGif></LoadingGif>}
          </div>{" "}
        </div>
      </div>
    </Fragment>
  );
}

export default GameInfo;
