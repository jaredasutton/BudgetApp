import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  homeButton: {
    marginRight: theme.spacing(2)
  }
}));

export default function DenseAppBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.homeButton}
            color="inherit"
            aria-label="home"
            onClick={props.handleMainClick}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            {props.headerMsgs[props.view]}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
