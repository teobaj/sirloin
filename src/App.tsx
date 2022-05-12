import { useEffect, useReducer } from "react";
import "./App.css";
import { Exercise } from "./components/Exercise";
import { AddExercise } from "./components/AddExercise";
import { reducer } from "./reducer";
import { AppState } from "./types/state.types";
import { Router } from "./Router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./features/user/user.slice";
import { TopBar } from "./components/TopBar";


function App() {
  const user = useSelector((state: AppState) => state.user)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header>
        <TopBar/>
      </header>
        <Router />
      {/* <AddExercise onSave={addExercise}/>
      <ul style={{...styles.ul, flexDirection: 'column'}}>

      {state.exercises.map((exercise, index) => 
        <Exercise onToggle={toggleComplete} onDelete={deleteExercise} key={index} exercise={exercise}/>
        )}

      </ul> */}
    </div>
  );
}

export default App;
