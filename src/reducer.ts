import { AppState } from "./types/state.types";

export function reducer(state:AppState, action:{type: string, payload: any}){
  const { type, payload } = action;
  switch(type){
    case 'ADD_EXERCISE':
      return {...state, exercises: [...state.exercises,payload ]}
    case 'DELETE_EXERCISE':
      console.log("DELETE")
      return {...state, exercises: [...state.exercises.filter(exercise => exercise.name !== payload.name)]}
    case 'TOGGLE_COMPLETE':
      return {...state, exercises: [...state.exercises.map(exercise => exercise.name === payload.name ? {...exercise, completed: !exercise.completed} : exercise)] }
    default:
      return state;
  }
}
