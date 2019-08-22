import React from "react";
import BudgetBadge from "./BudgetBadge.js";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";

const BudgetPage = ({ handlePlusClick, budgets, handleBudgetClick }) => {
  const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1)
    },
    extendedIcon: {
      marginRight: theme.spacing(1)
    }
  }));

  const classes = useStyles();
  return (
    <div>
      {budgets.map(budget => (
        <BudgetBadge
          key={budget.id}
          budget={budget}
          handleBudgetClick={handleBudgetClick}
        />
      ))}
      <Grid container justify="center">
        <Fab color="primary" aria-label="add" className={classes.fab}>
          <AddIcon onClick={handlePlusClick} />
        </Fab>
      </Grid>
    </div>
  );
};

export default BudgetPage;
