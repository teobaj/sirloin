import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { exercisesSelector, toggleExercise } from '../features/exercises/exercises.slice'
import { Exercise } from './Exercise'

export const ExerciseList = () => {
  const exercises = useSelector(exercisesSelector)
  const dispatch = useDispatch();
  return (
    <div>
      {exercises.map((exercise, index) => 
        <Exercise onToggle={() => dispatch(toggleExercise(index))} key={index} exercise={exercise}/>
        )}
    </div>
  )
}
