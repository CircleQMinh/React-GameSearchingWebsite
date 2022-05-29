import { takeLatest } from "redux-saga/effects";

import { setToken, me } from "../reducer";
import { handleMe } from "../sagas/handle";

export default function* authorizeSagas() {
  yield takeLatest(me.type, handleMe);
}
