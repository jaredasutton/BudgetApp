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
          />
        );
      })}
    </div>
  );
};

export default CategoryListForm;
