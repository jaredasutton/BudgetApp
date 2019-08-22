import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  container: {
    display: "center",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function CreatePaymentAccountForm(props) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="bl-name"
        label="Name"
        name="name"
        className={classes.textField}
        value={props.name}
        onChange={e => props.updateName(e.target.value)}
        margin="normal"
        variant="outlined"
        helperText="Name Your Payment Account."
      />
      <TextField
        id="outlined-select-account-type"
        select
        label="Account Type"
        className={classes.textField}
        value={props.accType}
        onChange={e => props.updateAccType(e.target.value)}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        margin="normal"
        variant="outlined"
      >
        {["Debit/Checking", "Credit"].map((option, i) => (
          <MenuItem key={option} value={i + 1}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Grid container justify="center">
        <Button
          color="primary"
          onClick={props.handleSubmit}
          className={classes.button}
        >
          Submit
        </Button>
      </Grid>
    </form>
  );
}
