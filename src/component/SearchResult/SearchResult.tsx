import React, { Fragment } from "react";
import IGame from "../../interface/IGame";
import DecoratedHeading from "../DecoratedHeading/DecoratedHeading";
import GameCard from "../GameDisplay/GameCard";
import LoadingGif from "../LoadingGif/LoadingGif";
type Props = {
  searchResult: IGame[];
  isLoading: boolean;
};
function SearchResult(props: Props) {
  const result = props.searchResult;
  const isLoading = props.isLoading;
  return (
    <Fragment>
      <div className="container mt-3 bg-random">
        <div className="nk-blog-grid">
          <div className="row ">
            {!isLoading && result.length > 0 && (
              <Fragment>
                {result.map((game) => {
                  return <GameCard game={game} key={game.id}></GameCard>;
                })}
              </Fragment>
            )}
            {!isLoading && result.length == 0 && (
              <div className="d-flex justify-content-center flex-column">
                <p className="text-center white mt-3 fs-2">No result found...</p>
                <img
                  className="img mb-3 col-6 align-self-center"
                  src="http://vendeli.in/public/front/images/empty-cart.png"
                ></img>
              </div>
            )}
            {isLoading && <LoadingGif></LoadingGif>}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SearchResult;
