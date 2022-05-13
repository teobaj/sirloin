import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/user/user.slice";

const styles = {
  shared: {
    width: "clamp(200px, 100%, 500px)"
  }
}

export const Login = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    dispatch(login({username}))
    navigate('/')
  }

  return (
    <div className="page center">
      <TextField
        onChange={(e) => setUsername(e.target.value)}
        id="outlined-basic"
        label="Username"
        variant="outlined"
        style={styles.shared}
      />
      <Button onClick={handleLogin} style={styles.shared} variant="contained">
        Login
      </Button>
      <Button onClick={handleLogin} style={styles.shared} variant="outlined">
        Continue as Guest
      </Button>
    </div>
  );
};
