import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

class CreateSpendSaveForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      dateOf: new Date(),
      paymentId: 0,
      amount: 100
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleInputChange(newStatePiece) {
    this.setState(newStatePiece);
  }

  handleChange(date) {
    // console.log(date);
    // console.log(JSON.stringify(date).slice(1, 11));
    this.setState({
      dateOf: date
    });
  }

  render() {
    return (
      <div>
        <label htmlFor="name">What was it for? </label>
        <input
          name="name"
          onChange={e => this.handleInputChange({ name: e.target.value })}
        />
        <label htmlFor="dateOf">Date: </label>
        <DatePicker
          name="dateOf"
          selected={this.state.dateOf}
          onChange={this.handleChange}
        />
        <label htmlFor="paymentId">Payment Method:</label>
        <select
          name="paymentId"
          onChange={e => this.handleInputChange({ paymentId: e.target.value })}
        >
          <option value="0">Cash</option>
          {this.props.paymentAccounts.map(pm => (
            <option key={pm.id} value={pm.id}>
              {pm.name}
            </option>
          ))}
        </select>
        <label htmlFor="amount">Amount: </label>
        <input
          name="amount"
          onChange={e => this.handleInputChange({ expIncome: e.target.value })}
        />
        <button onClick={() => this.props.postNewSpendSave(this.state)}>
          Submit
        </button>
      </div>
    );
  }
}

export default CreateSpendSaveForm;
