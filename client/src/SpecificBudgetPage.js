import React from "react";

class SpecificBudgetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Budget #1</h1>
        <button onClick={this.props.handleMainClick}>Main</button>
      </div>
    );
  }
}

export default SpecificBudgetPage;
