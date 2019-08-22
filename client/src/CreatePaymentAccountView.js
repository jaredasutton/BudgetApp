import React from "react";
import CreatePaymentAccountForm from "./CreatePaymentAccountForm.js";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
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
              // <div>
              //   <label htmlFor="name">Name</label>
              //   <input
              //     onChange={e => setName(e.target.value)}
              //     name="name"
              //     value={name}
              //   />{" "}
              //   <label htmlFor="accType" />
              //   <select
              //     onChange={e => setAccType(e.target.value)}
              //     name="accType"
              //     value={accType}
              //   >
              //     <option value="Debit/Checking">Debit/Checking</option>
              //     <option value="Credit">Credit</option>
              //   </select>
              //   <button
              //     onClick={() =>
              //       props.postNewPaymentAccount({
              //         name: name,
              //         accType: accType
              //       })
              //     }
              //   >
              //     Submit
              //   </button>
              // </div>
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
            <button
              onClick={() => {
                setNewPayment(true);
              }}
            >
              +
            </button>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CreatePaymentAccountView;
