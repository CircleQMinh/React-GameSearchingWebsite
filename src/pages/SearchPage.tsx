import React, { Fragment, useEffect, useState } from "react";
import { me, setToken, cleanUp } from "../redux/Auth/reducer";
import { getRandomGameAsync } from "../redux/Game/reducer";
import { useAppDispatch, useAppSelector } from "../hook/redux";
import Header from "../component/Header/Header";
import SearchForm from "../component/SearchForm/SearchForm";
import SearchResult from "../component/SearchResult/SearchResult";
import DecoratedHeading from "../component/DecoratedHeading/DecoratedHeading";
import Footer from "../component/Footer/Footer";
function SearchPage() {
  const [showSearchResult, setShowSearchResult] = useState(false);
  const dispatch = useAppDispatch();
  const [searchOffset, setSearchOffset] = useState(0);

  const { searchResult, isLoading } = useAppSelector(
    (state) => state.GameReducer
  );

  function setShowResult(bool: boolean) {
    setShowSearchResult(bool);
  }


  useEffect(() => {
  if (searchResult.length == 0) {
    setSearchOffset(0);
  }
  }, [searchResult])
  
  return (
    <Fragment>
      <Header></Header>
      <div className="s008 flex-column ">
        <div className="container-fluid bg-black p-3 mb-2 opacity-90">
          <div className="row">
            <DecoratedHeading primary="Search for" secondary=" any Games" />
          </div>
        </div>
        <SearchForm
          setShowSearchResult={setShowResult}
          searchOffset={searchOffset}
        ></SearchForm>
        {showSearchResult && (
          <Fragment>
            <div className="container-fluid bg-black p-3 mt-2 opacity-90">
              <div className="row">
                <DecoratedHeading primary="Search" secondary="Results" />
              </div>
            </div>
            <SearchResult
              searchResult={searchResult}
              isLoading={isLoading}
            ></SearchResult>
            <div className="container-fluid bg-black p-3 mt-2 opacity-90">
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    window.scrollTo(500, 500);
                    setSearchOffset(searchOffset + 1);
                  }}
                >
                  Load More Results ...
                </button>
              </div>
            </div>
          </Fragment>
        )}
        <div id="search_result"></div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}

export default SearchPage;
