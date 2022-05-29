import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, delay } from "redux-saga/effects";
import IGame from "../../../interface/IGame";
import IGameInfo from "../../../interface/IGameInfo";
import {
  generateQueryGamesInfo,
  generateQueryRandomGames,
} from "../../../utils/generateQuery";

import {
  getRandomGameAsync,
  setLoading,
  setGames,
  setGame,
  setSearchResult,
} from "../reducer";
import {
  getRamdomGameRequest,
  getGameRequest,
  getSearchGameRequest,
} from "./request";

export function* handleGetRandomGameAsync() {
  try {
    var query = generateQueryRandomGames();
    const { data } = yield call(getRamdomGameRequest, query);

    if (!data.error) {
      var games = data as IGame[];
      yield put(setGames(games));
    }
  } catch (error: any) {
    console.log(error);
  }
  yield put(setLoading(false));
}

export function* handleGetGameAsync(action: PayloadAction<number>) {
  try {
    var query = generateQueryGamesInfo(action.payload);
    const { data } = yield call(getGameRequest, query);

    if (!data.error) {
      var games = data as IGameInfo[];
      yield put(setGame(games[0]));
    }
  } catch (error: any) {
    console.log(error);
  }
  yield put(setLoading(false));
}

export function* handleGetSearchResultAsync(action: PayloadAction<string>) {
  try {
    var query = action.payload;
    const { data } = yield call(getSearchGameRequest, query);

    if (!data.error) {
      var games = data as IGame[];
      yield put(setSearchResult(games));
    }
  } catch (error: any) {
    console.log(error);
  }
  yield put(setLoading(false));
}
