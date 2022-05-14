export type Workout =  {
  date: string,
  volume: number,
  averageIntensity: number,
  maxIntensity: number,
}

export type WorkoutState = {
  lastWorkoutDate?: string,
  doneWorkouts: Workout[]
}