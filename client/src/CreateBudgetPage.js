import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "./TextField.js";
import Calendar from "./Calendar.js";
import SubmitButton from "./SubmitButton.js";

class CreateBudgetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      startDate: new Date(),
      endDate: (function() {
        let endDate = new Date();
        endDate.setDate(endDate.getDate() + 7);
        return endDate;
      })(),
      expIncome: 0,
      duration: "1 Week"
    };
    this.handleChange = this.handleChange.bind(this);
    this.durationMapEndDate = this.durationMapEndDate.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  durationMapEndDate(duration, start = this.state.startDate) {
    let durationMappings = { "1 Week": 7, "2 Week": 14, "1 Month": 28 };
    let endDate = new Date(start);
    endDate.setDate(endDate.getDate() + durationMappings[duration]);
    return endDate;
  }

  handleInputChange(newStatePiece) {
    if (newStatePiece.duration) {
      let endDate = this.durationMapEndDate(newStatePiece.duration);
      this.setState({ duration: newStatePiece.duration, endDate });
    } else {
      this.setState(newStatePiece);
    }
  }

  handleChange(date) {
    // console.log(date);
    // console.log(JSON.stringify(date).slice(1, 11));
    this.setState({
      startDate: date,
      endDate: this.durationMapEndDate(this.state.duration, date)
    });
  }

  render() {
    return (
      <div>
        {/* <label htmlFor="name">Budget Name</label>
        <input
          name="name"
          onChange={e => this.handleInputChange({ name: e.target.value })}
        />
        <label htmlFor="start time">Start Time</label>
        <DatePicker
          name="start time"
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
        <label htmlFor="duration">Duration</label>
        <select
          name="duration"
          onChange={e => this.handleInputChange({ duration: e.target.value })}
        >
          <option value="1 Week">1 Week</option>
          <option value="2 Week">2 Week</option>
          <option value="1 Month">1 Month</option>
        </select>
        <label htmlFor="Total Income">Total Income</label>
        <input
          name="Total Income"
          onChange={e => this.handleInputChange({ expIncome: e.target.value })}
        /> */}
        <TextField
          handleInputChange={this.handleInputChange}
          name={this.state.name}
          expIncome={this.state.expIncome}
          duration={this.state.duration}
        />
        <Calendar
          startDate={this.state.startDate}
          handleChange={this.handleChange}
        />
        {/* <button onClick={() => this.props.handleCreateBudgetClick(this.state)}>
          Submit
        </button> */}
        <SubmitButton
          budgetState={this.state}
          handleCreateBudgetClick={this.props.handleCreateBudgetClick}
        />
      </div>
    );
  }
}

export default CreateBudgetPage;
