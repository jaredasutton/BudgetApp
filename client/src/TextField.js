import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Calendar from "./Calendar.js";
import SubmitButton from "./SubmitButton.js";

import Grid from "@material-ui/core/Grid";

const timeFrame = ["1 Week", "2 Week", "1 Month"];

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
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
  }
}));

export default function OutlinedTextFields(props) {
  const classes = useStyles();
  //   const [values, setValues] = React.useState({
  //     name: "",
  //     age: "",
  //     multiline: "Controlled",
  //     currency: "EUR"
  //   });

  //   const handleChange = name => event => {
  //     setValues({ ...values, [name]: event.target.value });
  //   };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="Budget Name"
        className={classes.textField}
        value={props.name}
        onChange={e => props.handleInputChange({ name: e.target.value })}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-select-time"
        select
        label="Select"
        className={classes.textField}
        value={props.duration}
        onChange={e => props.handleInputChange({ duration: e.target.value })}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        helperText="Please select your time frame"
        margin="normal"
        variant="outlined"
      >
        {timeFrame.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-name"
        label="Expected Income"
        className={classes.textField}
        value={props.expIncome}
        onChange={e => props.handleInputChange({ expIncome: e.target.value })}
        margin="normal"
        variant="outlined"
      />

      <Calendar startDate={props.startDate} handleChange={props.handleChange} />

      <Grid container justify="center">
        <SubmitButton
          budgetState={props.budgetState}
          handleCreateBudgetClick={props.handleCreateBudgetClick}
          style={{ justifyContent: "center" }}
        />
      </Grid>
    </form>
  );
}
