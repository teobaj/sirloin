import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExercise,
  exercisesSelector,
  toggleExercise,
} from "../features/exercises/exercises.slice";
import { Exercise } from "./Exercise";

export const ExerciseList = () => {
  const exercises = useSelector(exercisesSelector);
  const dispatch = useDispatch();
  return (
    <ul
      style={{
        width: "clamp(300px, 100%, 400px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.5rem",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      {exercises.map((exercise, index) => (
        <Exercise
          onToggle={() => dispatch(toggleExercise(index))}
          onDelete={() => dispatch(deleteExercise(index))}
          key={index}
          exercise={exercise}
        />
      ))}
    </ul>
  );
};
