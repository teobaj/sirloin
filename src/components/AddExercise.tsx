import {
  Box,
  Button,
  Input,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { addExercise } from "../features/exercises/exercises.slice";

const styles = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 'clamp(280px, 80%, 540px)',
    bgcolor: "background.paper",
    border: "2px solid #1976d2",
    borderRadius: "0.5rem",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  fab: {
    position: "fixed",
    bottom: 0,
    right: 0,
    margin: "2rem",
  },
};

export const AddExercise = ({ onSave }: {onSave?: Function}) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [sets, setSets] = useState(3);
  const [reps, setReps] = useState(10);

  const dispatch = useDispatch();

  const handleOnSave = () => {
    dispatch(addExercise({name, completed: false, sets: new Array(sets).fill(reps)}))
    setOpen(false)
  }

  return (
    <>
      <Fab color="primary" style={styles.fab as any} onClick={() => setOpen(true)}>
        <AddIcon />
      </Fab>
      <Modal onClose={() => setOpen(false)} open={open}>
        <Box sx={styles.modal}>
          <TextField
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Exercise name"
            variant="outlined"
          />
          <TextField
            placeholder={sets.toString()}
            onChange={(e) => setSets(parseInt(e.target.value))}
            type="number"
            label="sets"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          />
          <TextField
            placeholder={reps.toString()}
            onChange={(e) => setReps(parseInt(e.target.value))}
            type="number"
            label="reps"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button onClick={() => setOpen(false)}> Cancel </Button>
            <Button
              variant="contained"
              onClick={handleOnSave}
            >
              Add
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};
