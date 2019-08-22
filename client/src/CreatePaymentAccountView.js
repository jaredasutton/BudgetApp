import React from "react";
import CreatePaymentAccountForm from "./CreatePaymentAccountForm.js";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  fab: {
    margin: theme.spacing(1)
  }
}));

let CreatePaymentAccountView = props => {
  let [name, setName] = React.useState("");
  let [accType, setAccType] = React.useState("Debit/Checking");
  let [newPayment, setNewPayment] = React.useState(false);
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <div>
            {props.paymentAccounts.map((item, i) => {
              return (
                <p key={item.name + i}>
                  <strong>{item.name}</strong> -{" "}
                  {["Debit/Checking", "Credit"][item.acc_type - 1]}
                </p>
              );
            })}
            {newPayment ? (
              <CreatePaymentAccountForm
                name={name}
                accType={accType}
                updateName={setName}
                updateAccType={setAccType}
                handleSubmit={() =>
                  props.postNewPaymentAccount({
                    name: name,
                    accType: accType
                  })
                }
              />
            ) : null}
            <Fab
              color="primary"
              aria-label="add"
              className={classes.fab}
              size="small"
            >
              <AddIcon
                onClick={() => {
                  setNewPayment(true);
                }}
              >
                +
              </AddIcon>
            </Fab>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CreatePaymentAccountView;
