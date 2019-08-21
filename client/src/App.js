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
      view: "ALL_BUDGETS",
      budgets: [],
      specificBudget: null
    };
    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.handleCreateBudgetClick = this.handleCreateBudgetClick.bind(this);
    this.handleMainClick = this.handleMainClick.bind(this);
    this.changeSpecificBudget = this.changeSpecificBudget.bind(this);
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
      view: "CREATE_BUDGET"
    });
  }

  handleCreateBudgetClick({ startDate, endDate, name, expIncome }) {
    startDate = JSON.stringify(startDate).slice(1, 11);
    endDate = JSON.stringify(endDate).slice(1, 11);
    axios
      .post("/budget", { startDate, endDate, name, expIncome })
      .then(({ data }) => {
        this.setState({
          view: "SPECIFIC_BUDGET",
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
          view: "ALL_BUDGETS",
          budgets: data
        });
      })
      .catch(console.error);
  }

  changeSpecificBudget(budget) {
    this.setState({ specificBudget: budget, view: "SPECIFIC_BUDGET" });
  }

  render() {
    return (
      <div>
        {this.state.view === "ALL_BUDGETS" ? (
          <BudgetPage
            budgets={this.state.budgets}
            handlePlusClick={this.handlePlusClick}
            handleBudgetClick={this.changeSpecificBudget}
          />
        ) : null}
        {this.state.view === "CREATE_BUDGET" ? (
          <CreateBudgetPage
            handleCreateBudgetClick={this.handleCreateBudgetClick}
          />
        ) : null}
        {this.state.view === "SPECIFIC_BUDGET" ? (
          <SpecificBudgetPage
            handleMainClick={this.handleMainClick}
            budget={this.state.specificBudget}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
