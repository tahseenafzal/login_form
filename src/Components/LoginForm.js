import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
    "& > *": {
      //   margin: theme.spacing(1),
      width: theme.spacing(40),
      height: theme.spacing(40),
      margin: "70px auto",
    },
  },
  input: {
    width: "90%",
    padding: "5px",
  },
  btn: {
    width: "90%",
    marginTop: "50px",
  },
  heading: {
    marginTop: "40px",
  },
}));

export default function LoginForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <h2 className={classes.heading}>LogIn</h2>
        <TextField
          id="standard-basic"
          label="Email ID:"
          className={classes.input}
        />
        <TextField
          id="standard-basic"
          label="Password:"
          className={classes.input}
        />
        <Button className={classes.btn} variant="contained" color="primary">
          LogIn
        </Button>
      </Paper>
    </div>
  );
}
