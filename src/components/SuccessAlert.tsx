import { Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { exercisesSelector } from "../features/exercises/exercises.slice";

const styles = {
  alert: {
    position: "fixed",
    top: "50%",
  },
};

export const SuccessAlert = () => {
  const exercises = useSelector(exercisesSelector);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const completed = exercises
      .map((exercise) => exercise.completed)
      .every((completed) => completed === true);

    setOpen(completed);
  }, [exercises]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={12000}
      onClick={() => setOpen(false)}
      message="🎉 Congratiulations, you finished your workout"
    />
  );
};
