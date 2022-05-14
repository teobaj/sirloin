import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../../types/state.types";
import { User } from "./user.model";

const initialState: User = JSON.parse(localStorage.getItem('user')) || { isLoggedIn: false }

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (_, action: PayloadAction<Partial<User>>) =>({...action.payload, isLoggedIn: true}),
    logout: () => ({isLoggedIn: false}),
    addLastWourkout: (state, action: PayloadAction<string>) => ({...state, lastWorkoutDate: action.payload})
  }
})

export const { login, logout, addLastWourkout } = userSlice.actions

export default userSlice.reducer

export const isLoggedInSelector = (state: AppState) => state.user.isLoggedIn

export const userSelector = (state: AppState) => state.user