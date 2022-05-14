
import React from 'react'
import { AddExercise } from '../components/AddExercise'
import { ExerciseList } from '../components/ExerciseList'

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
}

export const Dashboard = () => {
  return (
    <div className="page" style={styles.page as any}>
      <h3>Workout</h3>
      <ExerciseList />
      <AddExercise />
    </div>
  )
}
