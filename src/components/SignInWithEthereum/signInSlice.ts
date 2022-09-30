import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type SignInState = {
  isAuthenticated: boolean;
  walletAddress: string;
};

const initialState: SignInState = {
  isAuthenticated: false,
  walletAddress: "",
};

export const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setWalletAddress: (state, action: PayloadAction<string>) => {
      state.walletAddress = action.payload;
    },
  },
});

export const { setIsAuthenticated, setWalletAddress } = signInSlice.actions;

export const selectIsAuthenticated = (state: RootState) =>
  state.signIn.isAuthenticated;

export const selectWalletAddress = (state: RootState) =>
  state.signIn.walletAddress;

export default signInSlice.reducer;
