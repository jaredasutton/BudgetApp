import React from "react";

class CategoryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      spending: "",
      //   nameArray: [],
      //   spendingArray: [],
      nameSpendingArray: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick() {
    let nameSpending = this.state.nameSpendingArray.slice();
    nameSpending.push([this.state.name, this.state.spending]);
    this.setState({ nameSpendingArray: nameSpending });
  }

  render() {
    return (
      <div>
        <div>
          <h2>{this.props.item} Total:</h2>
          {this.state.nameSpendingArray.map(item => {
            return (
              <p>
                {item[0]} : ${item[1]}
              </p>
            );
          })}
          {this.props.budgetLineInput === this.props.item ? (
            <div>
              <label htmlFor="name">Name</label>
              <input
                onChange={this.handleChange}
                name="name"
                value={this.state.name}
              />
              <label htmlFor="spending">Expected Spending</label>
              <input
                onChange={this.handleChange}
                name="spending"
                value={this.state.value}
              />
              <button onClick={this.handleClick}>Submit</button>
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
