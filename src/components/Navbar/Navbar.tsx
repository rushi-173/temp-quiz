import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import { Routes, Route } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">News</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
