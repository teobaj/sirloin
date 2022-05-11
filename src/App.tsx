import { useEffect, useReducer } from "react";
import "./App.css";
import { Exercise } from "./components/Exercise";
import { AddExercise } from "./components/AddExercise";
import { reducer } from "./reducer";
import { Exercise as ExerciseProps } from "./types/exercise.types";
import { AppState } from "./types/state.types";
import { toExerciseKey } from "./utils/toExerciseKey";

const initalState:AppState = JSON.parse(localStorage.getItem('state')) || {
  exercises: [
   {
      name: "Push Ups",
      sets: [10, 10, 10],
      completed: false,
    },
    {
      name: "Rows",
      sets: [10, 10, 10],
      completed: true,
    },
  ],
};

const styles = {
  ul: {
    display: "flex",
    gap: "0.5rem",
    width: "calc(100%-0.5rem)",
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: "0.5rem",
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initalState);
  const addExercise = ({name, sets, reps}:{name: string, sets:number, reps: number }) => {
    dispatch({type: 'ADD_EXERCISE', payload: {name, sets:new Array(sets).fill(reps), completed: false}})
  }
  
  const toggleComplete = (name: string) => {
    dispatch({type: 'TOGGLE_COMPLETE', payload: {name}})
  }

  const deleteExercise = (name: string) => {
    dispatch({type: 'DELETE_EXERCISE', payload: {name}})

  }

  useEffect(() => localStorage.setItem("state", JSON.stringify(state)), [state])

  return (
    <div className="App">
      <header> <h1>Welcome</h1> </header>
      <AddExercise onSave={addExercise}/>
      <ul style={{...styles.ul, flexDirection: 'column'}}>

      {state.exercises.map((exercise, index) => 
        <Exercise onToggle={toggleComplete} onDelete={deleteExercise} key={index} exercise={exercise}/>
        )}

      </ul>
    </div>
  );
}

export default App;
