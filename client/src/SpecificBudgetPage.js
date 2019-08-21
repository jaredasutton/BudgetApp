import React from "react";
import CategoryListForm from "./CategoryListForm.js";
import PieChart from "./PieChart.js";

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
        <h1>{this.props.budget.name}</h1>
        <h2>
          <strong>Expected Income:</strong> {this.props.budget.expected_income}
        </h2>
        <CategoryListForm
          budgetLineInput={this.state.budgetLineInput}
          categories={this.state.categories}
          handleClick={this.handleClick}
        />
        <PieChart />
        <button onClick={this.props.handleMainClick}>Main</button>
      </div>
    );
  }
}

export default SpecificBudgetPage;
