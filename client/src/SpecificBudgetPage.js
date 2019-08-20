import React from "react";

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

        {this.state.categories.map(item => {
          return (
            <div key={item}>
              <h2>{item}</h2>
              {this.state.budgetLineInput === item ? <input /> : null}
              <button
                onClick={() => {
                  this.handleClick(item);
                }}
              >
                +
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SpecificBudgetPage;
