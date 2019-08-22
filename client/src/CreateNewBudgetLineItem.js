import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

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

export default function CreateNewBudgetLineItem(props) {
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
    //     <div>
    //     <label htmlFor="name">Name</label>
    //     <input onChange={handleChange} name="name" value={name} />{" "}
    //     <label htmlFor="spending">Expected Spending</label>
    //     <input onChange={handleChange} name="spending" value={spending} />
    //     <button
    //       onClick={props.handleSubmit
    //       }
    //     >
    //       Submit
    //     </button>
    //   </div>
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="bl-name"
        label="Description"
        name="name"
        className={classes.textField}
        value={props.name}
        onChange={props.handleChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="bl-expected-spending"
        label="Expected Spending"
        name="spending"
        className={classes.textField}
        value={props.spending}
        onChange={props.handleChange}
        margin="normal"
        variant="outlined"
      />
      <Button
        color="primary"
        onClick={props.handleSubmit}
        className={classes.button}
      >
        Submit
      </Button>
    </form>
  );
}
