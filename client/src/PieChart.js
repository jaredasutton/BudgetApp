import React from "react";
// import * as d3 from "d3";
import { PieChart } from "react-d3-components";

class PieChartContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  getChartData(chartData) {
    let chartDataArray = [];
    for (let key in chartData) {
      let dataObject = {};
      dataObject.x = key;
      if (chartData[key].length) {
        let reducedData = chartData[key].reduce((a, b) => {
          return {
            expected_spending: a.expected_spending + b.expected_spending
          };
        });
        dataObject.y = reducedData.expected_spending;
      } else {
        dataObject.y = 0;
      }
      chartDataArray.push(dataObject);
    }
    return { values: chartDataArray };
  }

  render() {
    var sort = null;
    return (
      <div>
        <PieChart
          data={this.getChartData(this.props.budgetLines)}
          width={600}
          height={400}
          margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
          sort={sort}
        />
      </div>
    );
  }
}

export default PieChartContainer;
