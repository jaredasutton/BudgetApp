import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "./TextField.js";
import Paper from "@material-ui/core/Paper";

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
    this.setState({
      startDate: date,
      endDate: this.durationMapEndDate(this.state.duration, date)
    });
  }

  render() {
    return (
      <div>
        <Paper>
          <TextField
            handleInputChange={this.handleInputChange}
            name={this.state.name}
            expIncome={this.state.expIncome}
            duration={this.state.duration}
            startDate={this.state.startDate}
            handleChange={this.handleChange}
            budgetState={this.state}
            handleCreateBudgetClick={this.props.handleCreateBudgetClick}
          />
        </Paper>
      </div>
    );
  }
}

export default CreateBudgetPage;
