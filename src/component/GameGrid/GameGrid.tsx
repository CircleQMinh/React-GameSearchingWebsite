import React, { Fragment } from "react";
import IGame from "../../interface/IGame";
import GameCard from "../GameDisplay/GameCard";
type Props = {
  games: IGame[];
};
function GameGrid(props: Props) {
  const games = props.games;
  //console.log(games);
  return (
    <Fragment>
      {games.length > 0 &&
        games.map((game) => {
          return <GameCard game={game} key={game.id}></GameCard>;
        })}

      {games.length == 0 && (
        <div className="d-flex justify-content-center flex-column">
          <p className="text-center white mt-3 fs-2">No result found...</p>
          <img
            className="img mb-3 col-6 align-self-center"
            src="http://vendeli.in/public/front/images/empty-cart.png"
          ></img>
        </div>
      )}
    </Fragment>
  );
}

export default GameGrid;
