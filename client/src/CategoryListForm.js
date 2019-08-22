import React from "react";
import CategoryListItem from "./CategoryListItem.js";
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

const CategoryListForm = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {props.categories.map(item => {
              return (
                <CategoryListItem
                  key={item}
                  item={item}
                  budgetLineInput={props.budgetLineInput}
                  categories={props.categories}
                  handleClick={props.handleClick}
                  postNewBudgetLine={props.postNewBudgetLine}
                  budgetLines={props.budgetLines[item]}
                  totalSpending={props.budgetLines[item].reduce(
                    (acc, curr) => acc + curr.expected_spending,
                    0
                  )}
                  postNewSpendSave={(ssObj, subcat) =>
                    props.postNewSpendSave(ssObj, subcat, item)
                  }
                  spendSaves={props.spendSaves[item] || {}}
                  paymentAccounts={props.paymentAccounts}
                />
              );
            })}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CategoryListForm;
