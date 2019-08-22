import React from "react";
import CategoryListForm from "./CategoryListForm.js";
import PieChart from "./PieChart.js";
import axios from "axios";

class SpecificBudgetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actualSpending: 0,
      budgetLineInput: "",
      categories: [
        "Housing",
        "Transportation",
        "Food",
        "Entertainment",
        "Savings",
        "Misc"
      ],
      budgetLines: {
        Housing: [],
        Transportation: [],
        Food: [],
        Entertainment: [],
        Savings: [],
        Misc: []
      },
      spendSaves: {}
    };
    this.handleClick = this.handleClick.bind(this);
    this.getBudgetLines = this.getBudgetLines.bind(this);
    this.postNewBudgetLine = this.postNewBudgetLine.bind(this);
    this.getSpendSaves = this.getSpendSaves.bind(this);
    this.postNewSpendSave = this.postNewSpendSave.bind(this);
  }

  componentDidMount() {
    this.getBudgetLines(this.props.budget.id);
    this.getSpendSaves();
  }

  getBudgetLines(budgetId) {
    axios.get(`/budgetline/${budgetId}`).then(({ data }) => {
      let newBudgetLines = {
        Housing: [],
        Transportation: [],
        Food: [],
        Entertainment: [],
        Savings: [],
        Misc: []
      };
      data.forEach((budgetLine, bLI, budgetLines) => {
        newBudgetLines[budgetLine.category].push(budgetLine);
        if (bLI === budgetLines.length - 1) {
          this.setState({ budgetLines: newBudgetLines });
        }
      });
    });
  }

  postNewBudgetLine({ name, expSpending, category }) {
    axios
      .post("/budgetline", {
        budgetId: this.props.budget.id,
        name,
        expSpending,
        category
      })
      .then(({ data }) => {
        this.getBudgetLines(this.props.budget.id);
        this.setState({ budgetLineInput: "" });
      })
      .catch(console.error);
  }

  getSpendSaves() {
    let newStateSS = {};
    let { start_date: startDate, end_date: endDate } = this.props.budget;
    axios
      .get(`/spendsave?startDate=${startDate}&endDate=${endDate}`)
      .then(({ data }) => {
        let actualSpending = 0;
        data.forEach((spendSave, ssI) => {
          if (!newStateSS[spendSave.category]) {
            newStateSS[spendSave.category] = {};
          }
          if (!newStateSS[spendSave.category][spendSave.subcat]) {
            newStateSS[spendSave.category][spendSave.subcat] = [];
          }
          newStateSS[spendSave.category][spendSave.subcat].push(spendSave);
          actualSpending += spendSave.amount;
          if (ssI === data.length - 1) {
            this.setState({ spendSaves: newStateSS, actualSpending });
          }
        });
      })
      .catch(console.error);
  }

  postNewSpendSave(
    { name, dateOf: date_of, paymentId: payment_id, amount },
    subcat,
    category
  ) {
    axios
      .post("/spendsave", {
        name,
        date_of,
        payment_id,
        category,
        subcat,
        amount
      })
      .then(({ data }) => this.getSpendSaves())
      .catch(console.error);
  }

  handleClick(string) {
    this.setState({ budgetLineInput: string });
  }

  render() {
    return (
      <div>
        {/* <h2>
          <strong>Expected Income:</strong> ${this.props.budget.expected_income}
        </h2> */}
        <PieChart
          budgetLines={this.state.budgetLines}
          budget={this.props.budget}
          categories={this.state.categories}
          expected_income={this.props.budget.expected_income}
          actualSpending={this.state.actualSpending}
        />
        <CategoryListForm
          budgetLineInput={this.state.budgetLineInput}
          categories={this.state.categories}
          handleClick={this.handleClick}
          postNewBudgetLine={this.postNewBudgetLine}
          budgetLines={this.state.budgetLines}
          paymentAccounts={this.props.paymentAccounts}
          postNewSpendSave={this.postNewSpendSave}
          spendSaves={this.state.spendSaves}
        />

        <button onClick={this.props.handleMainClick}>Main</button>
      </div>
    );
  }
}

export default SpecificBudgetPage;
