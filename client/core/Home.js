import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import unicornbikeImg from "./../assets/images/unicornbike.jpg";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import auth from "./../auth/auth-helper";
import FindPeople from "./../user/FindPeople";
import Newsfeed from "./../post/Newsfeed";
import SocailIcon from "./animation/social/social";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 30,
    margin: 0,
    overflowX: "hidden",
  },
  box: {
    display: "flex",
  },
  card: {
    maxWidth: 50,

    margin: "auto",
    marginTop: theme.spacing(45),
    // marginBottom: theme.spacing(5),
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.text.secondary,
  },
  media: {
    minHeight: 400,
  },
  heading: {
    textShadow: "3px 3px 6px #00A8E8",
    fontWeight: 400,
    marginTop: 150,
  },
  fonttext: {
    fontFamily: "Permanent Marker",
  },
}));

export default function Home({ history }) {
  const classes = useStyles();
  const [defaultPage, setDefaultPage] = useState(false);

  useEffect(() => {
    setDefaultPage(auth.isAuthenticated());
    const unlisten = history.listen(() => {
      setDefaultPage(auth.isAuthenticated());
    });

    return () => {
      unlisten();
    };
  }, []);

  return (
    <div className={classes.root}>
      {!defaultPage && (
        <Box className={classes.box}>
          <div className={classes.heading}>
            <Typography className={classes.fonttext} variant="h1">
              Be There
            </Typography>
            <Typography className={classes.fonttext} variant="h1">
              Where You Want
            </Typography>
            <Typography className={classes.fonttext} variant="h1">
              To Go.
            </Typography>
          </div>

          <div className={classes.card}>
            <SocailIcon />
          </div>
        </Box>
      )}
      {defaultPage && (
        <Grid justify="center" style={{ paddingTop: 40 }} container spacing={3}>
          <Grid item xs={8} sm={7}>
            <Newsfeed />
          </Grid>
          <Grid item xs={6} sm={5}>
            <FindPeople />
          </Grid>
        </Grid>
      )}
    </div>
  );
}
