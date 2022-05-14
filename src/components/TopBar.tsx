import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, userSelector } from "../features/user/user.slice";
import { useNavigate } from "react-router-dom";

export const TopBar = ({onMenuClick}) => {
  const user = useSelector(userSelector)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user.isLoggedIn ? user.username : ''}
          </Typography>
          {user.isLoggedIn 
            ? <Button onClick={() => dispatch(logout())} color="inherit">Logout</Button>
            : <Button onClick={() => navigate('/login')} color="inherit">Login</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
};
