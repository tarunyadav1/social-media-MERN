import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import auth from "./../auth/auth-helper";
import { Link, withRouter } from "react-router-dom";

const isActive = (history, path) => {
  if (history.location.pathname == path) return { color: "#ffa726" };
  else return { color: "#ffffff" };
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    background: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "Segoe UI",
    marginLeft: 20,
  },
}));

const Menu = withRouter(({ history }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.root}`}>
      <AppBar
        style={{
          background: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%))",
        }}
        position="static"
      >
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h5"
            color="inherit"
            noWrap
          >
            MERN SOCIO
          </Typography>
          <Link to="/">
            <IconButton aria-label="Home" style={isActive(history, "/")}>
              <HomeIcon />
            </IconButton>
          </Link>
          {!auth.isAuthenticated() && (
            <span>
              <Link to="/signup">
                <Button style={isActive(history, "/signup")}>Sign up</Button>
              </Link>
              <Link to="/signin">
                <Button style={isActive(history, "/signin")}>Sign In</Button>
              </Link>
            </span>
          )}
          {auth.isAuthenticated() && (
            <span>
              <Link to={"/user/" + auth.isAuthenticated().user._id}>
                <Button
                  style={isActive(
                    history,
                    "/user/" + auth.isAuthenticated().user._id
                  )}
                >
                  <AccountCircleIcon /> {auth.isAuthenticated().user.name}
                </Button>
              </Link>
              <Button
                color="inherit"
                onClick={() => {
                  auth.clearJWT(() => history.push("/"));
                }}
              >
                <ExitToAppIcon /> Sign out
              </Button>
            </span>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
});

export default Menu;
