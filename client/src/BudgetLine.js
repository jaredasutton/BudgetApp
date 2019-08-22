import React from "react";
import ReactDOM from "react-dom";
import CreateSpendSaveForm from "./CreateSpendSaveForm.js";

let BudgetLine = ({
  budgetLine,
  postNewSpendSave,
  spendSaves,
  paymentAccounts
}) => {
  const [showCreateSS, setShowCreateSS] = React.useState(false);
  const [createSSXY, setCreateSSXY] = React.useState(["0px", "0px"]);
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
    </div>
  );
};

export default BudgetLine;
