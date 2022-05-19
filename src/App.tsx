import { useEffect, useState } from "react";
import "./App.css";
import { Router } from "./Router";
import { useDispatch, useSelector } from "react-redux";
import {
  userSelector,
} from "./features/user/user.slice";
import { TopBar } from "./components/TopBar";
import {
  exercisesSelector, resetAllExercises,
} from "./features/exercises/exercises.slice";
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
    const currentDate = new Date().toLocaleDateString();
    if(currentDate !== workout.lastWorkoutDate) {
        dispatch(resetAllExercises())
      }
    },[workout.lastWorkoutDate])

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
      <SuccessAlert/>
    </div>
  );
}

export default App;
