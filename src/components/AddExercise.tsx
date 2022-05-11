import {
  Box,
  Button,
  Input,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #1976d2",
  borderRadius: "0.5rem",
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
};

export const AddExercise = ({ onSave }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [sets, setSets] = useState(3);
  const [reps, setReps] = useState(10);

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add Exercise
      </Button>
      <Modal onClose={() => setOpen(false)} open={open}>
        <Box sx={style}>
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
          <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
          <Button onClick={() => setOpen(false)}> Cancel </Button>
          <Button
            variant="contained"
            onClick={() => {
              onSave({name, reps, sets});
              setOpen(false);
            }}
          >
          
            Add
          </Button>

          </div>
        </Box>
      </Modal>
    </>
  );
};
