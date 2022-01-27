import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createGamekitSlice } from "@piticent123/gamekit-client";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Pages } from "./pages";

interface AppState {
  page: number;
}

const {
  reducer: gamekitReducer,
  actions: gamekitActions,
  createThunk,
} = createGamekitSlice();

const startRound = createThunk("startRound", () => {});

const submitGuess = createThunk<string>("submitGuess", ({ parameter }) => {})

const { reducer: appReducer, actions: appActions } = createSlice({
  name: "app",
  initialState: {
    page: Pages.CreateProfile,
  } as AppState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(gamekitActions.connectToServer.fulfilled, (state) => {
      state.page = Pages.JoinGame;
    })
    .addCase(gamekitActions.joinGame.fulfilled, (state) => {
      state.page = Pages.PlayGame;
    })
    .addCase(gamekitActions.createGame.fulfilled, (state) => {
      state.page = Pages.PlayGame;
    }),
});

export const store = configureStore({
  reducer: {
    app: appReducer,
    gamekit: gamekitReducer,
  },
});

export const actions = { ...gamekitActions, ...appActions };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
