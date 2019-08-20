import React from "react";
import CategoryListForm from "./CategoryListForm.js";

class SpecificBudgetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budgetLineInput: "",
      categories: [
        "Housing",
        "Transportation",
        "Food",
        "Entertainment",
        "Savings",
        "Misc"
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(string) {
    this.setState({ budgetLineInput: string });
  }

  render() {
    return (
      <div>
        <h1>Budget #1</h1>
        <CategoryListForm
          budgetLineInput={this.state.budgetLineInput}
          categories={this.state.categories}
          handleClick={this.handleClick}
        />
        <button onClick={this.props.handleMainClick}>Main</button>
      </div>
    );
  }
}

export default SpecificBudgetPage;
