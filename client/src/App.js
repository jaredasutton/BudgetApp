import React from "react";
import BudgetPage from "./BudgetPage.js";
import CreateBudget from "./CreateBudgetPage.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plusClicked: true
    };
    this.handlePlusClick = this.handlePlusClick.bind(this);
  }

  handlePlusClick() {
    this.setState({ plusClicked: !this.state.plusClicked });
  }

  render() {
    const plusClicked = this.state.plusClicked;
    return (
      <div>
        {plusClicked ? (
          <BudgetPage handlePlusClick={this.handlePlusClick} />
        ) : (
          <CreateBudget />
        )}
      </div>
    );
  }
}

export default App;
