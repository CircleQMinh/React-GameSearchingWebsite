import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CurrentDisplayState = {
  clicks: number;
  loading: boolean;
};

let initialState: CurrentDisplayState = {
  clicks: 0,
  loading: false,
};

const CountSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    addCount(state, action: PayloadAction<number>) {
      state.clicks += action.payload;
    },
    minusCount(state, action: PayloadAction<number>) {
      state.clicks -= action.payload;
    },
    addCountAsync(state, action: PayloadAction<number>) {
      return {
        ...state,
        loading: true,
      };
    },
    minusCountAsync(state, action: PayloadAction<number>) {
      return {
        ...state,
        loading: true,
      };
    },
    setLoading(state, action: PayloadAction<boolean>) {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
});

export const { addCount, minusCount, addCountAsync, minusCountAsync, setLoading } =
  CountSlice.actions;

export default CountSlice.reducer;
