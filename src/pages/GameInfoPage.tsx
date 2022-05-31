import React, { useState, useEffect, Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import GameInfo from "../component/GameInfo/GameInfo";
import Header from "../component/Header/Header";
import { useAppDispatch, useAppSelector } from "../hook/redux";

function GameInfoPage() {
  const params = useParams();
  const navigate = useNavigate();
  var gameId = params.id;
  console.log(gameId);
  const isnum = /^\d+$/.test((gameId ??= "a"));
  if (!isnum || isNaN(Number.parseInt(gameId))) {
    navigate("/error");
  }

  useEffect(() => {
    if(gameId==undefined){
       navigate("/error");
    }
    else{
      if (!isnum || isNaN(Number.parseInt(gameId))) {
        navigate("/error");
      }
    }
  });

  return (
    <Fragment>
      <Header></Header>
      <div className="gameinfo_page background_cover_2">
        <GameInfo gameId={Number.parseInt(gameId)} />
      </div>
      <Footer></Footer>
    </Fragment>
  );
}

export default GameInfoPage;
