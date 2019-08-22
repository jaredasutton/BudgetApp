import React from "react";
import BudgetLine from "./BudgetLine.js";

class CategoryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      spending: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    e.target.name === "spending"
      ? this.setState({ spending: Number(e.target.value) })
      : this.setState({ name: e.target.value });
  }

  handleClick() {
    let nameSpending = this.state.nameSpendingArray.slice();
    let total = this.state.totalSpending;
    nameSpending.push([this.state.name, this.state.spending]);
    total += this.state.spending;
    this.setState({ nameSpendingArray: nameSpending, totalSpending: total });
  }

  render() {
    return (
      <div>
        <div>
          <h2>
            {this.props.item} Total: ${this.props.totalSpending}
          </h2>
          {this.props.budgetLines.map((budgetLine, i) => {
            return (
              <BudgetLine
                key={budgetLine.name + i}
                budgetLine={budgetLine}
                postNewSpendSave={ssObj =>
                  this.props.postNewSpendSave(ssObj, budgetLine.name)
                }
                paymentAccounts={this.props.paymentAccounts}
                spendSaves={this.props.spendSaves[budgetLine.name] || []}
              />
            );
          })}
          {this.props.budgetLineInput === this.props.item ? (
            <div>
              <label htmlFor="name">Name</label>
              <input
                onChange={this.handleChange}
                name="name"
                value={this.state.name}
              />{" "}
              <label htmlFor="spending">Expected Spending</label>
              <input
                onChange={this.handleChange}
                name="spending"
                value={this.state.value}
              />
              <button
                onClick={() =>
                  this.props.postNewBudgetLine({
                    expSpending: this.state.spending,
                    name: this.state.name,
                    category: this.props.item
                  })
                }
              >
                Submit
              </button>
            </div>
          ) : null}
          <button
            onClick={() => {
              this.props.handleClick(this.props.item);
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CategoryListItem;
