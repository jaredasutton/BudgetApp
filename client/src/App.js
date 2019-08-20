import React from "react";
import BudgetPage from "./BudgetPage.js";
import CreateBudgetPage from "./CreateBudgetPage.js";
import SpecificBudgetPage from "./SpecificBudgetPage.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plusClicked: false,
      createBudgetClicked: false,
      specificBudgetClicked: false
    };
    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.handleCreateBudgetClick = this.handleCreateBudgetClick.bind(this);
    this.handleMainClick = this.handleMainClick.bind(this);
  }

  handlePlusClick() {
    this.setState({
      plusClicked: !this.state.plusClicked,
      createBudgetClicked: !this.createBudgetClicked
    });
  }

  handleCreateBudgetClick() {
    this.setState({
      createBudgetClicked: !this.state.createBudgetClicked,
      specificBudgetClicked: !this.state.specificBudgetClicked
    });
  }

  handleMainClick() {
    this.setState({
      specificBudgetClicked: !this.state.specificBudgetClicked,
      plusClicked: !this.state.plusClicked
    });
  }

  render() {
    return (
      <div>
        {!this.state.plusClicked ? (
          <BudgetPage handlePlusClick={this.handlePlusClick} />
        ) : null}
        {this.state.createBudgetClicked ? (
          <CreateBudgetPage
            handleCreateBudgetClick={this.handleCreateBudgetClick}
          />
        ) : null}
        {this.state.specificBudgetClicked ? (
          <SpecificBudgetPage handleMainClick={this.handleMainClick} />
        ) : null}
      </div>
    );
  }
}

export default App;
