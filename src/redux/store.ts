import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import CountReducer from "../redux/Counter/reducer";
import AuthReducer from "../redux/Auth/reducer";
import GameReducer from "../redux/Game/reducer";
const reducer = combineReducers({
  CountReducer,AuthReducer,GameReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
});

rootSaga.map((saga) => sagaMiddleware.run(saga)); // Register all sagas

// sagaMiddleware.run(watcherSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
