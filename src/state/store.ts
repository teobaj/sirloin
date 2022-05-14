import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/user.slice'
import exercisesReducer from '../features/exercises/exercises.slice'
import workoutReducer from '../features/workout/workout.slice'
export default configureStore({
  reducer: {
    user: userReducer,
    exercises: exercisesReducer,
    workout: workoutReducer
  },
})