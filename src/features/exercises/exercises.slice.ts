import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../../types/state.types";
import { Exercise } from "./exercises.model";

const initalState: Exercise[] = JSON.parse(
  localStorage.getItem("exercises")
) || [{ name: "Push Ups", completed: false, sets: [10, 10, 10] }];

export const exercisesSlice = createSlice({
  name: "exercises",
  initialState: initalState,
  reducers: {
    addExercise: (state, action: PayloadAction<Exercise>) => [
      ...state,
      action.payload,
    ],
    toggleExercise: (state, action: PayloadAction<number>) =>
      state.map((exercise, index) =>
        index === action.payload
          ? { ...exercise, completed: !exercise.completed }
          : exercise
      ),
    deleteExercise: (state, action: PayloadAction<number>) =>
      state.filter((_, index) => index !== action.payload),
    resetAllExercises: (state) =>
      state.map((exercise) => ({ ...exercise, completed: false })),
    upgradeExercise: (state, action: PayloadAction<number>) =>
      state.map((exercise, index) =>
        index === action.payload
          ? { ...exercise, sets: exercise.sets.map((set) => set + 2) }
          : exercise
      ),
  },
});

export const {
  addExercise,
  toggleExercise,
  deleteExercise,
  resetAllExercises,
  upgradeExercise,
} = exercisesSlice.actions;

export default exercisesSlice.reducer;

export const exercisesSelector = (state: AppState) => state.exercises;
