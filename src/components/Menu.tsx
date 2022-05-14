import { Box, ListItem, ListItemText, SwipeableDrawer } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export type MenuProps = {
  open: boolean;
  onMenuClick: any;
};

export const Menu = ({ open, onMenuClick }: MenuProps) => {
  const routes = ["dashboard", "progress"];

  const navigate = useNavigate();

  const handleClick = (route: string) => {
    navigate(`/${route}`);
  };

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onOpen={onMenuClick}
      onClose={onMenuClick}
    >
      <Box>
        {routes.map((route, index) => (
          <ListItem key={index} onClick={() => handleClick(route)}>
            <ListItemText primary={route.toUpperCase()} />
          </ListItem>
        ))}
      </Box>
    </SwipeableDrawer>
  );
};
