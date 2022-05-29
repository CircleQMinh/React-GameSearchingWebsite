import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { setToken } from "../reducer";
import { authRequest } from "./request";

export function* handleMe() {
    try {
        const {data} = yield call(authRequest);

        if (!data.error) {
            yield put(setToken(data.access_token));
        }

    } catch (error: any) {
    }
}