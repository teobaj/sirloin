import { User } from "../features/user/user.model";
import { Exercise } from "../features/exercises/exercises.model";
import { WorkoutState } from "../features/workout/workout.types";

export type AppState = {
  user: User,
  exercises: Exercise[]
  workout: WorkoutState
};