import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateBudgetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    console.log(date);
    console.log(JSON.stringify(date).slice(1, 11));
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div>
        <h1>Create a budget</h1>
        <label htmlFor="name">Budget Name</label>
        <input name="name" />
        <label htmlFor="start time">Start Time</label>
        <DatePicker
          name="start time"
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
        <label htmlFor="duration">Duration</label>
        <select name="duration">
          <option>1 Week</option>
          <option>2 Week</option>
          <option>1 Month</option>
        </select>
        <label htmlFor="Total Income">Total Income</label>
        <input name="Total Income" />
        <button onClick={this.props.handleCreateBudgetClick}>Submit</button>
      </div>
    );
  }
}

export default CreateBudgetPage;
