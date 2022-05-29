import { takeLatest } from "redux-saga/effects";

import { addCount, minusCount,addCountAsync,minusCountAsync } from "../reducer";
import { handleAddCount, handleMinusCount,handleAddCountAsync,handleMinusCountAsync } from "../sagas/handles";

export default function* CountSagas() {
  yield takeLatest(addCount.type, handleAddCount),
    yield takeLatest(minusCount.type, handleMinusCount),
    yield takeLatest(addCountAsync.type, handleAddCountAsync),
    yield takeLatest(minusCountAsync.type, handleMinusCountAsync);
}
