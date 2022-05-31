import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DecoratedHeading from "../component/DecoratedHeading/DecoratedHeading";
import Footer from "../component/Footer/Footer";
import GameGrid from "../component/GameGrid/GameGrid";
import Header from "../component/Header/Header";
import LoadingGif from "../component/LoadingGif/LoadingGif";
import NavigateButton from "../component/NavigateButton/NavigateButton";
import { Genres } from "../constants/genre";
import { Themes } from "../constants/theme";
import { useAppDispatch, useAppSelector } from "../hook/redux";
import { getSearchResultAsync } from "../redux/Game/reducer";
import {
  generateQueryGamesByGameMode,
  generateQueryGamesByGenre,
  generateQueryGamesByTheme,
} from "../utils/generateQuery";
import { parseGameModeName } from "../utils/parse";

function ThemePage() {
  const params = useParams();
  const navigate = useNavigate();
  const themes = Themes;
  var id = params.id;
  let name: string = "";
  name = themes.filter((q) => q.id.toString() == id)[0]?.name;

  const dispatch = useAppDispatch();
  const { searchResult, isLoading } = useAppSelector(
    (state) => state.GameReducer
  );
  const [number, setNumber] = useState(1);

  useEffect(() => {
    var query = generateQueryGamesByTheme(number - 1, Number.parseInt(id!));
    dispatch(getSearchResultAsync(query));
  }, [number]);

  function nextPage() {
    setNumber(number + 1);
  }
  function prevPage() {
    if (number == 1) {
      return;
    }
    setNumber(number - 1);
  }


  useEffect(() => {
    if (id == undefined) {
      navigate("/error");
    } else {
      let isnum = /^\d+$/.test(id);
      if (!isnum) {
        navigate("/error");
      }
      if (!themes.some((g) => g.id.toString() == id)) {
        navigate("/error");
      }
    }
  });

  return (
    <Fragment>
      <Header></Header>
      <div className="random_page background_cover_1">
        <div className="container opacity-95 bg-random">
          <div className="nk-blog-grid">
            <div className="row p-3">
              <DecoratedHeading
                primary={"Theme: "}
                secondary={name}
              ></DecoratedHeading>

              {!isLoading && <GameGrid games={searchResult}></GameGrid>}
              {isLoading && <LoadingGif></LoadingGif>}
            </div>{" "}
            <NavigateButton
              pageNumber={number}
              onNextClick={nextPage}
              onPrevClick={prevPage}
            ></NavigateButton>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}

export default ThemePage;
