import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createGamekitSlice } from "@piticent123/gamekit-client";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const {
  reducer: gamekitReducer,
  actions: gamekitActions,
  createThunk
} = createGamekitSlice();

const {
  reducer: appReducer,
  actions: appActions
} = createSlice({
  name: "app",
  initialState: {},
  reducers: {}
});

export const store = configureStore({
  reducer: {
    app: appReducer,
    gamekit: gamekitReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;