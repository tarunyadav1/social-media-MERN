import React from "react";
import { useSpring, animated } from "react-spring";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    position: "absolute",
    borderRadius: "5px",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    willChange: "transform",
  },
  card1: {
    minWidth: "60ch",
    minHeight: "60ch",
    width: "20vw",
    height: "20vw",
    maxWidth: "100ch",
    maxHeight: "100ch",
    borderRadius: "25px",
    backgroundImage:
      "url(https://www.flaticon.com/svg/static/icons/svg/1384/1384066.svg)",
    boxShadow: "0px 0px 15px",
  },
  card2: {
    width: "15ch",
    height: "15ch",
    backgroundImage:
      "url(https://www.flaticon.com/svg/static/icons/svg/889/889100.svg)",
  },
  card3: {
    width: "15ch",
    height: "15ch",
    backgroundImage:
      "url(https://www.flaticon.com/svg/static/icons/svg/3046/3046121.svg)",
  },
  card4: {
    width: "15ch",
    height: "15ch",
    backgroundImage:
      "url(https://www.flaticon.com/svg/static/icons/svg/1384/1384063.svg)",
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 200}px,${y / 8 - 180}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 8 + 100}px,0)`;

function SocialIcon() {
  const classes = useStyles();

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <div
      className={classes.container}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className={`${classes.card} ${classes.card1}`}
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      <animated.div
        className={`${classes.card} ${classes.card2}`}
        style={{ transform: props.xy.interpolate(trans2) }}
      />
      <animated.div
        className={`${classes.card} ${classes.card3}`}
        style={{ transform: props.xy.interpolate(trans3) }}
      />
      <animated.div
        className={`${classes.card} ${classes.card4}`}
        style={{ transform: props.xy.interpolate(trans4) }}
      />
    </div>
  );
}

export default SocialIcon;
