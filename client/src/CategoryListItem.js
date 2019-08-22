import React from "react";
import BudgetLine from "./BudgetLine.js";
import { makeStyles } from "@material-ui/core/styles";
import { List } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

let CategoryListItem = props => {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [spending, setSpending] = React.useState(0);

  let handleChange = e => {
    e.target.name === "spending"
      ? setSpending(Number(e.target.value))
      : setName(e.target.value);
  };

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
          <div>
            <label htmlFor="name">Name</label>
            <input onChange={handleChange} name="name" value={name} />{" "}
            <label htmlFor="spending">Expected Spending</label>
            <input onChange={handleChange} name="spending" value={value} />
            <button
              onClick={() =>
                props.postNewBudgetLine({
                  expSpending: spending,
                  name: name,
                  category: props.item
                })
              }
            >
              Submit
            </button>
          </div>
        ) : null}
        <button
          onClick={() => {
            props.handleClick(props.item);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CategoryListItem;
