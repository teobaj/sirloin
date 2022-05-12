import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user/user.slice";

const styles = {
  shared: {
    width: "clamp(200px, 100%, 500px)"
  }
}

export const Login = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="page center">
      <TextField
        onChange={(e) => setUsername(e.target.value)}
        id="outlined-basic"
        label="Username"
        variant="outlined"
        style={styles.shared}
      />
      <Button onClick={() => dispatch(login({username}))} style={styles.shared} variant="contained">
        Login
      </Button>
      <Button onClick={() => dispatch(login({}))} style={styles.shared} variant="outlined">
        Continue as Guest
      </Button>
    </div>
  );
};
