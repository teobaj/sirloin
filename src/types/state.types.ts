import { User } from "../features/user/user.model";
import { Exercise } from "../features/exercises/exercises.model";

export type AppState = {
  user: User,
  lastWorkoutDate?: string,
  exercises: Exercise[]
};