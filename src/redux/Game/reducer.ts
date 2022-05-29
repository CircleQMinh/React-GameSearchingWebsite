import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IGame from "../../interface/IGame";
import IGameInfo from "../../interface/IGameInfo";

import request from "../../services/request";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "../../utils/localStorage";

type GameState = {
  isLoading: boolean;
  games: IGame[];
  searchResult: IGame[];
  game?: IGameInfo;
};

// mặc định
const initialState: GameState = {
  isLoading: false,
  games: [],
  game: undefined,
  searchResult: [],
};

const GameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    getRandomGameAsync(state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    getGameAsync(state, action: PayloadAction<number>) {
      let g: IGameInfo = {
        id: action.payload,
        screenshots: null,
        similar_games: null,
        videos: null,
        cover: null,
        follows: null,
        game_modes: null,
        genres: null,
        involved_companies: null,
        name: null,
        platforms: null,
        rating: null,
        rating_count: null,
        release_dates: null,
        summary: null,
        themes: null,
        storyline: null,
        websites: null,
      };
      return {
        ...state,
        isLoading: true,
        game: g,
      };
    },
    setGames(state, action: PayloadAction<IGame[]>) {
      return {
        ...state,
        games: action.payload,
        isLoading: false,
      };
    },
    setGame(state, action: PayloadAction<IGameInfo>) {
      return {
        ...state,
        game: action.payload,
        isLoading: false,
      };
    },
    cleanUp: (state) => ({
      ...state,
      loading: false,
    }),
    setLoading(state, action: PayloadAction<boolean>) {
      return {
        ...state,
        loading: action.payload,
      };
    },
    getSearchResultAsync(state, action: PayloadAction<string>) {
      return {
        ...state,
        isLoading: true,
      };
    },
    setSearchResult(state, action: PayloadAction<IGame[]>) {
      return {
        ...state,
        searchResult: action.payload,
        isLoading: false,
      };
    },
  },
});

export const {
  cleanUp,
  getRandomGameAsync,
  setLoading,
  setGames,
  getGameAsync,
  setGame,
  setSearchResult,
  getSearchResultAsync,
} = GameSlice.actions;

export default GameSlice.reducer;
