import React from "react";
import ReactDOM from "react-dom";
import CreateSpendSaveForm from "./CreateSpendSaveForm.js";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// import ListItem from "@material-ui/core/ListItem";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     padding: theme.spacing(2),
//     color: theme.palette.text.secondary
//   }
// }));
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

let BudgetLine = ({
  budgetLine,
  postNewSpendSave,
  spendSaves,
  paymentAccounts
}) => {
  const classes = useStyles();
  const [showCreateSS, setShowCreateSS] = React.useState(false);
  const [createSSXY, setCreateSSXY] = React.useState(["0px", "0px"]);

  return (
    <Grid container spacing={3} container justify="center">
      {/* <ListItem className={classes.root}> */}
      <Grid item xs={10}>
        <Paper className={classes.paper}>
          {budgetLine.name}: ${budgetLine.expected_spending}{" "}
          <small>
            {spendSaves
              .map(spendSave => {
                return `$${spendSave.amount} for ${spendSave.name}`;
              })
              .join(", ")}

            {/* {
              <button
                // href="#"
                onClick={e => {
                  setShowCreateSS(true);
                  setCreateSSXY([e.clientX + "px", e.clientY + "px"]);
                }}
              >
                Add New Spending
              </button>
            } */}
            {
              <Button
                size="small"
                color="primary"
                className={classes.margin}
                onClick={e => {
                  setShowCreateSS(true);
                  setCreateSSXY([e.clientX + "px", e.clientY + "px"]);
                }}
              >
                Add New Spending
              </Button>
            }
          </small>
          {showCreateSS && (
            <CreateSpendSaveForm
              postNewSpendSave={postNewSpendSave}
              paymentAccounts={paymentAccounts}
              style={{ top: createSSXY[1], left: createSSXY[0] }}
              exit={() => setShowCreateSS(false)}
            />
          )}
        </Paper>
        {/* </ListItem> */}
      </Grid>
    </Grid>
  );
};

export default BudgetLine;
