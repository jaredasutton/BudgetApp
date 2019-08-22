import React from "react";
import BudgetLine from "./BudgetLine.js";
import CreateNewBudgetLineItem from "./CreateNewBudgetLineItem.js";
import { makeStyles } from "@material-ui/core/styles";
import { List } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//     display: "flex",
//     height: 224
//   },
//   tabs: {
//     borderRight: `1px solid ${theme.palette.divider}`
//   }
// }));

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

let CategoryListItem = props => {
  const [name, setName] = React.useState("");
  const [spending, setSpending] = React.useState(0);

  let handleChange = e => {
    e.target.name === "spending"
      ? setSpending(Number(e.target.value))
      : setName(e.target.value);
  };
  const classes = useStyles();

  return (
    <div>
      <div>
        <h2>
          {props.item} Total: ${props.totalSpending}
        </h2>
        <List dense={true}>
          {props.budgetLines.map((budgetLine, i) => {
            return (
              <BudgetLine
                key={budgetLine.name + i}
                budgetLine={budgetLine}
                postNewSpendSave={ssObj =>
                  props.postNewSpendSave(ssObj, budgetLine.name)
                }
                paymentAccounts={props.paymentAccounts}
                spendSaves={props.spendSaves[budgetLine.name] || []}
              />
            );
          })}
        </List>
        {props.budgetLineInput === props.item ? (
          <CreateNewBudgetLineItem
            handleSubmit={() =>
              props.postNewBudgetLine({
                expSpending: spending,
                name: name,
                category: props.item
              })
            }
            handleChange={handleChange}
          />
        ) : null}

        {/* <button
          onClick={() => {
            props.handleClick(props.item);
          }}
        >
          +
        </button> */}
        <Fab
          color="primary"
          aria-label="add"
          className={classes.fab}
          size="small"
        >
          <AddIcon
            onClick={() => {
              props.handleClick(props.item);
            }}
          >
            +
          </AddIcon>
        </Fab>
      </div>
    </div>
  );
};

export default CategoryListItem;
