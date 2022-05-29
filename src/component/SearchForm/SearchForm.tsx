import React, { Fragment, useEffect, useState } from "react";
import { Form, FormControl, InputGroup, Spinner } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import {
  getSearchResultAsync,
  setSearchResult,
} from "../../redux/Game/reducer";
import { generateQuerySearchGames } from "../../utils/generateQuery";
import DecoratedHeading from "../DecoratedHeading/DecoratedHeading";
import GameModesCheckboxModal from "../Modal/CheckboxModal/GameModesCheckboxModal";
import GenresCheckboxModal from "../Modal/CheckboxModal/GenresCheckboxModal";
import PlatformsCheckboxModal from "../Modal/CheckboxModal/PlatformsCheckboxModal";
import ThemesCheckboxModal from "../Modal/CheckboxModal/ThemesCheckboxModal";
type Props = {
  setShowSearchResult: Function;
  searchOffset: number;
};
import "./SearchForm.css";
function SearchForm(props: Props) {
  const showSearchResult = props.setShowSearchResult;
  const offset = props.searchOffset;
  // ---------------------------------------GenreFilter-------------------------------
  const [selectedGenres, setSelectedGenres] = useState([] as number[]);
  const [showGenreFilterModal, setShowGenreFilterModal] = useState(false);
  function handleShowGenreFilterModal() {
    setShowGenreFilterModal(true);
  }

  function handleHideGenreFilterModal() {
    setShowGenreFilterModal(false);
  }

  function handleGenreFilterSelected(id: number) {
    if (selectedGenres.includes(id)) {
      setSelectedGenres(selectedGenres.filter((q) => q != id));
    } else {
      setSelectedGenres([...selectedGenres, id]);
    }
  }
  // ---------------------------------------PlatformFilter-------------------------------
  const [selectedPlatforms, setSelectedPlatforms] = useState([] as number[]);

  const [showPlatformFilterModal, setShowPlatformFilterModal] = useState(false);
  function handleShowPlatformFilterModal() {
    setShowPlatformFilterModal(true);
  }

  function handleHidePlatformFilterModal() {
    setShowPlatformFilterModal(false);
  }

  function handlePlatformFilterSelected(id: number) {
    if (selectedPlatforms.includes(id)) {
      setSelectedPlatforms(selectedPlatforms.filter((q) => q != id));
    } else {
      setSelectedPlatforms([...selectedPlatforms, id]);
    }
  }
  // ---------------------------------------GameModeFilter-------------------------------
  const [selectedGameModes, setSelectedGameModes] = useState([] as number[]);
  const [showGameModeFilterModal, setShowGameModeFilterModal] = useState(false);
  function handleShowGameModeFilterModal() {
    setShowGameModeFilterModal(true);
  }

  function handleHideGameModeFilterModal() {
    setShowGameModeFilterModal(false);
  }

  function handleGameModeFilterSelected(id: number) {
    if (selectedGameModes.includes(id)) {
      setSelectedGameModes(selectedGameModes.filter((q) => q != id));
    } else {
      setSelectedGameModes([...selectedGameModes, id]);
    }
  }
  // ---------------------------------------RatingFilter-------------------------------
  const [ratingFilter, setRatingFilter] = useState(0);
  function handleRatingFilterChange(e: any) {
    setRatingFilter(e.target.value);
  }
  // ---------------------------------------DateFilter-------------------------------
  const [dateFilter, setDateFilter] = useState("");
  function handleDateFilterChange(e: any) {
    var date = new Date(e.target.value);
    setDateFilter(Math.floor(date.getTime() / 1000).toString());
  }
  // ---------------------------------------ThemesFilter-------------------------------
  const [selectedThemes, setSelectedThemes] = useState([] as number[]);
  const [showThemesFilterModal, setShowThemesFilterModal] = useState(false);
  function handleShowThemesFilterModal() {
    setShowThemesFilterModal(true);
  }

  function handleHideThemesFilterModal() {
    setShowThemesFilterModal(false);
  }

  function handleThemesFilterSelected(id: number) {
    if (selectedThemes.includes(id)) {
      setSelectedThemes(selectedThemes.filter((q) => q != id));
    } else {
      setSelectedThemes([...selectedThemes, id]);
    }
  }

  const [keyword, setKeyword] = useState(null as string | null);
  function handleKeywordChange(e: any) {
    setKeyword(e.target.value);
  }

  const dispatch = useAppDispatch();
  const { searchResult, isLoading } = useAppSelector(
    (state) => state.GameReducer
  );

  useEffect(() => {
    dispatch(setSearchResult([]));
  }, []);
  useEffect(() => {
    if (offset != 0) {
      onSearchButtonClicked();
    }
  }, [offset]);

  function getSearchResult(query: string) {
    showSearchResult(true);
    dispatch(getSearchResultAsync(query));
    window.scrollTo(500, 500);
  }

  function onSearchButtonClicked() {
    var query = generateQuerySearchGames(
      keyword,
      offset,
      selectedGenres,
      selectedPlatforms,
      selectedGameModes,
      ratingFilter,
      dateFilter,
      selectedThemes
    );
    console.log(query);
    getSearchResult(query);
  }
  function handleKeyDownForInput(e: any) {
    if (e.key === "Enter") {
      onSearchButtonClicked();
    }
  }

  function onResetFilterButtonClicked() {
    setSelectedGenres([]);
    setSelectedPlatforms([]);
    setSelectedGameModes([]);
    setRatingFilter(0);
    setDateFilter(NaN.toString());
    var dateElement: any = document.getElementById("myDate")!;
    dateElement.value = "";
    setSelectedThemes([]);
  }

  return (
    <Fragment>
      <form
        className="opacity-90"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="inner-form">
          <div className="basic-search">
            <div className="input-field">
              <input
                className="black opacity-100 border border-5 border-warning"
                id="search"
                type="text"
                placeholder="Input the name of the game..."
                onChange={handleKeywordChange}
                onKeyDown={handleKeyDownForInput}
              />
              <div className="icon-wrap" onClick={onSearchButtonClicked}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
          <div className="advance-search">
            <span className="desc lead fs-2">Advanced Search</span>
            <div className="row">
              <div className="input-field">
                <div className="input-select">
                  <Form.Label className="white">Genres: </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onClick={handleShowGenreFilterModal}
                  >
                    <option>{selectedGenres.length} selected</option>
                  </Form.Select>
                </div>
              </div>
              <div className="input-field">
                <div className="input-select">
                  <Form.Label className="white">Platforms: </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onClick={handleShowPlatformFilterModal}
                  >
                    <option>{selectedPlatforms.length} selected</option>
                  </Form.Select>
                </div>
              </div>
              <div className="input-field">
                <div className="input-select my-2">
                  <Form.Label className="white">Game Mode: </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onClick={handleShowGameModeFilterModal}
                  >
                    <option>{selectedGameModes.length} selected</option>
                  </Form.Select>
                </div>
              </div>
            </div>
            <div className="row second">
              <div className="input-field">
                <div className="input-select">
                  <Form.Label className="white">Rating: </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={handleRatingFilterChange}
                    value={ratingFilter}
                  >
                    <option value={0}> Any</option>
                    <option value={20}> {">"}20 </option>
                    <option value={50}> {">"}50 </option>
                    <option value={80}> {">"}80 </option>
                  </Form.Select>
                </div>
              </div>
              <div className="input-field">
                <div className="input-select">
                  <Form.Label className="white">
                    Release dates from:{" "}
                  </Form.Label>

                  <InputGroup className="mb-3">
                    <FormControl
                      id="myDate"
                      type="date"
                      placeholder="dd-mm-yyyy"
                      onChange={handleDateFilterChange}
                    />
                  </InputGroup>
                </div>
              </div>
              <div className="input-field">
                <div className="input-select my-2">
                  <Form.Label className="white">Themes: </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onClick={handleShowThemesFilterModal}
                  >
                    <option>{selectedThemes.length} selected</option>
                  </Form.Select>
                </div>
              </div>
            </div>
            <div className="row third">
              <div className="input-field">
                <div className="result-count">
                  {isLoading && (
                    <>
                      <Spinner animation="grow" variant="primary" />
                      <Spinner animation="grow" variant="secondary" />
                      <Spinner animation="grow" variant="success" />
                      <Spinner animation="grow" variant="danger" />
                      <Spinner animation="grow" variant="warning" />
                      <Spinner animation="grow" variant="info" />
                      <Spinner animation="grow" variant="light" />
                      <Spinner animation="grow" variant="dark" />
                    </>
                  )}
                  {!isLoading && <span>Press "Search" buttom to search! </span>}
                </div>
                <div className="group-btn">
                  <button
                    className="btn-delete"
                    id="delete"
                    onClick={onResetFilterButtonClicked}
                  >
                    Reset
                  </button>
                  <button
                    className="btn-search"
                    onClick={onSearchButtonClicked}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <GenresCheckboxModal
        show={showGenreFilterModal}
        onClose={handleHideGenreFilterModal}
        onCheckBoxChecked={handleGenreFilterSelected}
        selectedValues={selectedGenres}
      ></GenresCheckboxModal>
      <PlatformsCheckboxModal
        show={showPlatformFilterModal}
        onClose={handleHidePlatformFilterModal}
        onCheckBoxChecked={handlePlatformFilterSelected}
        selectedValues={selectedPlatforms}
      ></PlatformsCheckboxModal>
      <GameModesCheckboxModal
        show={showGameModeFilterModal}
        onClose={handleHideGameModeFilterModal}
        onCheckBoxChecked={handleGameModeFilterSelected}
        selectedValues={selectedGameModes}
      ></GameModesCheckboxModal>
      <ThemesCheckboxModal
        show={showThemesFilterModal}
        onClose={handleHideThemesFilterModal}
        onCheckBoxChecked={handleThemesFilterSelected}
        selectedValues={selectedThemes}
      ></ThemesCheckboxModal>
    </Fragment>
  );
}

export default SearchForm;
