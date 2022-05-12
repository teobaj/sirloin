import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/user.slice'
import exercisesReducer from '../features/exercises/exercises.slice'
export default configureStore({
  reducer: {
    user: userReducer,
    exercises: exercisesReducer
  },
})