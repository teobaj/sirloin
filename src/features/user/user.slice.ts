import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../../types/state.types";
import { User } from "./user.model";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
  } as User,
  reducers: {
    login: (_, action: PayloadAction<Partial<User>>) =>({...action.payload, isLoggedIn: true}),
    logout: () => ({isLoggedIn: false})
  }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer

export const isLoggedInSelector = (state: AppState) => state.user.isLoggedIn

export const userSelector = (state: AppState) => state.user