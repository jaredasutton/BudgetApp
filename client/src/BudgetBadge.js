import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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

const BudgetBadge = ({ budget, handleBudgetClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={() => handleBudgetClick(budget)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h3>{budget.name}</h3>
            <h4>Expected Income: ${budget.expected_income}</h4>
            <p>
              <strong>Start:</strong> {new Date(budget.start_date).toString()}
            </p>
            <p>
              <strong>End:</strong> {new Date(budget.end_date).toString()}
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default BudgetBadge;
