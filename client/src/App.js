import React from "react";
import BudgetPage from "./BudgetPage.js";
import CreateBudgetPage from "./CreateBudgetPage.js";
import SpecificBudgetPage from "./SpecificBudgetPage.js";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plusClicked: false,
      createBudgetClicked: false,
      specificBudgetClicked: false,
      budgets: [],
      specificBudget: null
    };
    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.handleCreateBudgetClick = this.handleCreateBudgetClick.bind(this);
    this.handleMainClick = this.handleMainClick.bind(this);
  }

  componentDidMount() {
    axios
      .get("/budget")
      .then(({ data }) => {
        this.setState({ budgets: data });
      })
      .catch(console.error);
  }

  handlePlusClick() {
    this.setState({
      plusClicked: !this.state.plusClicked,
      createBudgetClicked: !this.createBudgetClicked
    });
  }

  handleCreateBudgetClick({ startDate, endDate, name, expIncome }) {
    startDate = JSON.stringify(startDate).slice(1, 11);
    endDate = JSON.stringify(endDate).slice(1, 11);
    axios
      .post("/budget", { startDate, endDate, name, expIncome })
      .then(({ data }) => {
        this.setState({
          createBudgetClicked: !this.state.createBudgetClicked,
          specificBudgetClicked: !this.state.specificBudgetClicked,
          specificBudget: data
        });
      })
      .catch(console.error);
  }

  handleMainClick() {
    axios
      .get("/budget")
      .then(({ data }) => {
        this.setState({
          specificBudgetClicked: !this.state.specificBudgetClicked,
          plusClicked: !this.state.plusClicked,
          budgets: data
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        {!this.state.plusClicked ? (
          <BudgetPage
            budgets={this.state.budgets}
            handlePlusClick={this.handlePlusClick}
          />
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
