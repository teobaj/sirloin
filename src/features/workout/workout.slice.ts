import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../../types/state.types";
import { Workout, WorkoutState } from "./workout.types";

const initialState: WorkoutState = JSON.parse(localStorage.getItem('workout')) || {
  doneWorkouts: []
}

export const workoutSlice = createSlice({
  name: 'workout',
  initialState: initialState,
  reducers:{
    addDoneWorkout: (state, action: PayloadAction<Workout>) => ({...state, doneWorkouts: state.doneWorkouts.find((ex) => ex.date === action.payload.date) ? state.doneWorkouts :  [...state.doneWorkouts, action.payload]}),
    removeDoneWorkout: (state, action: PayloadAction<Workout>) => ({lastWorkoutDate:action.payload.date , doneWorkouts: state.doneWorkouts.filter(workout => workout.date !== action.payload.date )})
  }
})

export const { addDoneWorkout, removeDoneWorkout } = workoutSlice.actions

export default workoutSlice.reducer

export const doneWokroutsSelector = (state: AppState) => state.workout.doneWorkouts

export const lastDoneWorkoutSelector = (state: AppState) => state.workout.lastWorkoutDate

export const workoutSelector = (state: AppState) => state.workout