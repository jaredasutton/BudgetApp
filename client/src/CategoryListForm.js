import React from "react";

const CategoryListForm = props => {
  return (
    <div>
      {props.categories.map(item => {
        return (
          <div key={item}>
            <h2>{item} Total:</h2>
            {props.budgetLineInput === item ? (
              <div>
                <label htmlFor="name">Name</label>
                <input name="name" />
                <label htmlFor="spending">Expected Spending</label>
                <input name="spending" />
                <button>Submit</button>
              </div>
            ) : null}
            <button
              onClick={() => {
                props.handleClick(item);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryListForm;
