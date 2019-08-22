import React from "react";
import BudgetPage from "./BudgetPage.js";
import CreateBudgetPage from "./CreateBudgetPage.js";
import SpecificBudgetPage from "./SpecificBudgetPage.js";
import CreatePaymentAccountView from "./CreatePaymentAccountView.js";
import axios from "axios";
import DenseAppBar from "./DenseAppBar.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plusClicked: false,
      createBudgetClicked: false,
      specificBudgetClicked: false,
      view: "ALL_BUDGETS",
      budgets: [],
      specificBudget: null,
      paymentAccounts: []
    };
    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.handleCreateBudgetClick = this.handleCreateBudgetClick.bind(this);
    this.handleMainClick = this.handleMainClick.bind(this);
    this.changeSpecificBudget = this.changeSpecificBudget.bind(this);
    this.postNewPaymentAccount = this.postNewPaymentAccount.bind(this);
  }

  componentDidMount() {
    axios
      .get("/budget")
      .then(({ data }) => {
        this.setState({ budgets: data });
      })
      .catch(console.error);
    axios
      .get("/paymentaccount")
      .then(({ data }) => this.setState({ paymentAccounts: data }))
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

  getPaymentAccounts() {
    axios
      .get(`/paymentaccount`)
      .then(({ data }) => {
        this.setState({ paymentAccounts: data });
      })
      .catch(console.error);
  }

  postNewPaymentAccount({ name, accType }) {
    axios
      .post("/paymentaccount", {
        name,
        accType
      })
      .then(({ data }) => this.getPaymentAccounts())
      .catch(console.error);
  }

  render() {
    let headerMsgs = {
      ALL_BUDGETS: "My Budgets",
      CREATE_BUDGET: "Create a New Budget",
      SPECIFIC_BUDGET:
        this.state.specificBudget && this.state.specificBudget.name,
      ADD_PAYMENT_ACCOUNT: "Payment Accounts"
    };
    return (
      <div>
        <DenseAppBar headerMsgs={headerMsgs} view={this.state.view} />
        <img
          onClick={() => this.setState({ view: "ADD_PAYMENT_ACCOUNT" })}
          src="/gear.png"
          className="gear"
        />
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
            paymentAccounts={this.state.paymentAccounts}
          />
        ) : null}
        {this.state.view === "ADD_PAYMENT_ACCOUNT" ? (
          <CreatePaymentAccountView
            paymentAccounts={this.state.paymentAccounts}
            postNewPaymentAccount={this.postNewPaymentAccount}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
