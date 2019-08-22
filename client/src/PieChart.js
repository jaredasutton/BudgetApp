// import React from "react";
// // import * as d3 from "d3";
// import { PieChart } from "react-d3-components";

// class PieChartContainer extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   getChartData(chartData) {
//     let chartDataArray = [];
//     for (let key in chartData) {
//       let dataObject = {};
//       dataObject.x = key;
//       if (chartData[key].length) {
//         let reducedData = chartData[key].reduce((a, b) => {
//           return {
//             expected_spending: a.expected_spending + b.expected_spending
//           };
//         });
//         dataObject.y = reducedData.expected_spending;
//       } else {
//         dataObject.y = 0;
//       }
//       chartDataArray.push(dataObject);
//     }
//     return { values: chartDataArray };
//   }

//   render() {
//     var sort = null;
//     return (
//       <div>
//         <PieChart
//           data={this.getChartData(this.props.budgetLines)}
//           width={600}
//           height={400}
//           margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
//           sort={sort}
//         />
//       </div>
//     );
//   }
// }

// export default PieChartContainer;

import React from "react";
import { PieChart } from "react-d3-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const getChartData = chartData => {
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
};

const sort = null;

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const PieChartContainer = props => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <h2>
          <div style={{ display: "inline-block" }}>
            Expected Income: ${props.expected_income}
          </div>{" "}
          <div
            style={{
              color:
                props.expected_income > props.actualSpending
                  ? "#388e3c"
                  : "#d32f2f",
              display: "inline-block"
            }}
          >
            Total Spending: $
            {`${props.actualSpending} (~${Math.round(
              100 * (props.actualSpending / props.expected_income)
            )}%)`}
          </div>
        </h2>
        <PieChart
          data={getChartData(props.budgetLines)}
          width={600}
          height={400}
          margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
          sort={sort}
        />
      </Paper>
    </div>
  );
};

export default PieChartContainer;
