import React from "react";

const BudgetPage = props => {
  return (
    <div>
      <h1>My Budgets</h1>
      <button onClick={props.handlePlusClick}>+</button>
    </div>
  );
};

export default BudgetPage;
