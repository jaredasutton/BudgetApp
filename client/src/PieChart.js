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

  getChartData(chartData) {
    let chartDataArray = [];
    for (let key in chartData) {
      let dataObject = {};
      dataObject.x = key;
      if (chartData[key][chartData[key].length - 1]) {
        dataObject.y =
          chartData[key][chartData[key].length - 1].expected_spending;
      } else {
        dataObject.y = 0;
      }
      chartDataArray.push(dataObject);
    }
    console.log(chartDataArray);
    const chartDataObj = { values: chartDataArray };
    return chartDataObj;
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
          // data={this.state.data}
          data={this.getChartData(this.props.budgetLines)}
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
