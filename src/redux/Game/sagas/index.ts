import { takeLatest } from "redux-saga/effects";

import {
  getRandomGameAsync,
  getGameAsync,
  getSearchResultAsync,
} from "../reducer";
import {
  handleGetRandomGameAsync,
  handleGetGameAsync,
  handleGetSearchResultAsync,
} from "../sagas/handle";

export default function* GameSaga() {
  yield takeLatest(getRandomGameAsync.type, handleGetRandomGameAsync);
  yield takeLatest(getGameAsync.type, handleGetGameAsync);
  yield takeLatest(getSearchResultAsync.type, handleGetSearchResultAsync);
}
