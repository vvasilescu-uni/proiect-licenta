import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "utils/@reduxjs/toolkit";
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import { homeSaga } from "./saga";
import { HomeState } from "./types";

export const initialState: HomeState = {
  predictionResult: null,
};

const slice = createSlice({
  name: "home",
  initialState,
  reducers: {
    predictImage(_state, _action: PayloadAction<any>) {},
    setPredictionResult(state, action: PayloadAction<any>) {
      state.predictionResult = action.payload;
    },
    clearState(state) {
      state.predictionResult = null;
    }
  },
});

export const { actions: homeActions } = slice;

export const useHomeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: homeSaga });
  return { actions: slice.actions };
};
