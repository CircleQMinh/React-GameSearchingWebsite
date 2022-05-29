import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, delay } from "redux-saga/effects";

import { addCount, minusCount, setLoading } from "../reducer";
// import { loginRequest, getMeRequest, putChangePassword } from "./requests";

export function* handleAddCount() {
  try {
    console.log("Addcount handle from saga");
  } catch (error: any) {}
}

export function* handleMinusCount() {
  try {
    console.log("MinusCount handle from saga");
  } catch (error: any) {}
}

export function* handleAddCountAsync() {
  yield delay(5000);
  yield put(addCount(1));
  yield put(setLoading(false));
}
export function* handleMinusCountAsync() {
  yield delay(5000);
  yield put(minusCount(1));
  yield put(setLoading(false));
}
