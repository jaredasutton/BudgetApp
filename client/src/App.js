import React from "react";
import BudgetPage from "./BudgetPage.js";
import CreateBudgetPage from "./CreateBudgetPage.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plusClicked: false,
      createBudgetClicked: false,
      specificBudget: false
    };
    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.handleCreateBudgetClick = this.handleCreateBudgetClick.bind(this);
  }

  handlePlusClick() {
    this.setState({
      plusClicked: !this.state.plusClicked,
      createBudgetClicked: !this.createBudgetClicked
    });
  }

  handleCreateBudgetClick() {
    this.setState({
      createBudgetClicked: !this.state.createBudgetClicked
    });
  }

  render() {
    const plusClicked = this.state.plusClicked;
    const createBudgetClicked = this.state.createBudgetClicked;
    return (
      <div>
        {!plusClicked ? (
          <BudgetPage handlePlusClick={this.handlePlusClick} />
        ) : null}
        {createBudgetClicked ? (
          <CreateBudgetPage
            handleCreateBudgetClick={this.handleCreateBudgetClick}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
