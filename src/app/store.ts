import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { etherscanApiSlice } from "../api/etherscanApiSlice";
import { signInApiSlice } from "../api/signInApiSlice";
import signInReducer from "../components/SignInWithEthereum/signInSlice";

export const store = configureStore({
  reducer: {
    [signInApiSlice.reducerPath]: signInApiSlice.reducer,
    [etherscanApiSlice.reducerPath]: etherscanApiSlice.reducer,
    signIn: signInReducer,
  },
  // @ts-ignore multiple APIs not supported as types
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(signInApiSlice.middleware)
      .concat(etherscanApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
