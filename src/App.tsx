import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { Exercise } from "./components/Exercise";
import { AddExercise } from "./components/AddExercise";
import { reducer } from "./reducer";
import { AppState } from "./types/state.types";
import { Router } from "./Router";
import { useDispatch, useSelector } from "react-redux";
import {
  addLastWourkout,
  login,
  userSelector,
} from "./features/user/user.slice";
import { TopBar } from "./components/TopBar";
import {
  exercisesSelector,
  resetAllExercises,
} from "./features/exercises/exercises.slice";
import { User } from "./features/user/user.model";
import { Workout } from "./features/workout/workout.types";
import {
  addDoneWorkout,
  removeDoneWorkout,
  workoutSelector,
} from "./features/workout/workout.slice";
import { SuccessAlert } from "./components/SuccessAlert";
import { Menu } from "./components/Menu";

function App() {
  const user = useSelector(userSelector);
  const exercises = useSelector(exercisesSelector);
  const workout = useSelector(workoutSelector);
  const dispatch = useDispatch();

  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }
  //Side effects
  useEffect(() => {
    const completed = exercises
      .map((exercise) => exercise.completed)
      .every((completed) => completed === true);

    const workout: Workout = {
      date: new Date().toLocaleDateString(),
      volume: exercises.reduce(
        (acc, current) =>
          acc + current.sets.reduce((setAcc, setCur) => setAcc + setCur, 0),
        0
      ),
      maxIntensity: exercises.reduce(
        (acc, current) =>
          current.sets.reduce(
            (setAcc, setCur) => (setCur > setAcc ? setCur : setAcc),
            0
          ) > acc
            ? current.sets.reduce(
                (setAcc, setCur) => (setCur > setAcc ? setCur : setAcc),
                0
              )
            : acc,
        0
      ),
      averageIntensity: parseFloat(
        (
          exercises.reduce(
            (acc, current) =>
              acc + current.sets.reduce((setAcc, setCur) => setAcc + setCur, 0),
            0
          ) / exercises.reduce((acc, cur) => acc + cur.sets.length, 0)
        ).toFixed(2)
      ),
    };
    completed 
      ? dispatch(addDoneWorkout(workout))
      : dispatch(removeDoneWorkout(workout));
  }, [exercises]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("exercises", JSON.stringify(exercises));
  }, [exercises]);

  useEffect(() => {
    localStorage.setItem("workout", JSON.stringify(workout));
  }, [workout]);

  return (
    <div className="App">
      <header>
        <TopBar onMenuClick={toggleMenu} />
      </header>
      <Router />
      <Menu open={openMenu} onMenuClick={toggleMenu}/>
      {/* <AddExercise onSave={addExercise}/>
      <ul style={{...styles.ul, flexDirection: 'column'}}>

      {state.exercises.map((exercise, index) => 
        <Exercise onToggle={toggleComplete} onDelete={deleteExercise} key={index} exercise={exercise}/>
        )}

      </ul> */}
      <SuccessAlert/>
    </div>
  );
}

export default App;
