import React from "react";
import CategoryListItem from "./CategoryListItem.js";

const CategoryListForm = props => {
  return (
    <div>
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
    </div>
  );
};

export default CategoryListForm;
