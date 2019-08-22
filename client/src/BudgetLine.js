import React from "react";
import ReactDOM from "react-dom";
import CreateSpendSaveForm from "./CreateSpendSaveForm.js";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
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
    <ListItem className={classes.root}>
      <Paper className={classes.paper}>
        {budgetLine.name}: ${budgetLine.expected_spending}{" "}
        <small>
          {spendSaves
            .map(spendSave => {
              return `$${spendSave.amount} for ${spendSave.name}`;
            })
            .join(", ")}
          {" - "}
          {
            <a
              href="#"
              onClick={e => {
                setShowCreateSS(true);
                setCreateSSXY([e.clientX + "px", e.clientY + "px"]);
              }}
            >
              Add New Spending
            </a>
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
    </ListItem>
  );
};

export default BudgetLine;
