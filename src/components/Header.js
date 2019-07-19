import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          />
          <Typography variant="h6" className={classes.title}>
            <Link style={{ color: "#fff", textDecoration: "none" }} to="/">
              <Button color="inherit">Shopping Cart</Button>
            </Link>
          </Typography>

          <Link style={{ color: "#fff", textDecoration: "none" }} to="/login">
            <Button color="inherit" style={{ marginRight: "50px" }}>
              Login
            </Button>
          </Link>
          <Link style={{ color: "#fff", textDecoration: "none" }} to="/order">
            <Button color="inherit">Ordered Products</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
