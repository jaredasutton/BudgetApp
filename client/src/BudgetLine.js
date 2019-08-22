import React from "react";
import ReactDOM from "react-dom";
import CreateSpendSaveForm from "./CreateSpendSaveForm.js";

let BudgetLine = ({
  budgetLine,
  postNewSpendSave,
  spendSaves,
  paymentAccounts
}) => {
  return (
    <div className="budget-line">
      {budgetLine.name}: ${budgetLine.expected_spending}{" "}
      <small>
        {spendSaves
          .map(spendSave => {
            return `$${spendSave.amount} for ${spendSave.name}`;
          })
          .join(", ")}
        {
          <a
            href="#"
            onClick={e => {
              let createSpendSave = document.getElementById(
                "create-spend-save"
              );
              createSpendSave.style.left = e.clientX + "px";
              createSpendSave.style.top = e.clientY + "px";
              ReactDOM.render(
                <CreateSpendSaveForm
                  postNewSpendSave={postNewSpendSave}
                  paymentAccounts={paymentAccounts}
                />,
                createSpendSave
              );
            }}
          >
            Add New Spending
          </a>
        }
      </small>
    </div>
  );
};

export default BudgetLine;
