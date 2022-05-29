import React, { Fragment } from "react";
import IGameInfo from "../../interface/IGameInfo";
import DecoratedHeading from "../DecoratedHeading/DecoratedHeading";
import GameCard from "../GameDisplay/GameCard";
type Props = {
  game: IGameInfo;
};
function GameRelated(props: Props) {
  const game = props.game;
  return (
    <Fragment>
      {" "}
      <DecoratedHeading primary="Related" secondary="Games"></DecoratedHeading>
      {game.similar_games && (
        <Fragment>
          {game.similar_games.map((g) => {
            return <GameCard game={g} key={g.id}></GameCard>;
          })}
        </Fragment>
      )}
    </Fragment>
  );
}

export default GameRelated;
