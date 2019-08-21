import React from "react";
// import * as d3 from "d3";
import { PieChart } from "react-d3-components";

class PieChartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { values: [] }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      data: {
        values: [
          { x: "SomethingA", y: 2 },
          { x: "SomethingB", y: 5 },
          { x: "SomethingC", y: 3 }
        ]
      }
    });
  }

  handleClick() {
    const chartValue = this.state.data.values.slice();
    chartValue.push({ x: "placeHolder", y: 2 });
    this.setState({ data: { values: chartValue } });
  }

  render() {
    var sort = null;
    return (
      <div>
        <PieChart
          data={this.state.data}
          width={600}
          height={400}
          margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
          sort={sort}
        />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default PieChartContainer;
