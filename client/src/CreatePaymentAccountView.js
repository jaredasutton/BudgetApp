import React from "react";

class CreatePaymentAccountView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      accType: "Debit/Checking",
      newPayment: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key, value) {
    let newStatePiece = {};
    newStatePiece[key] = value;
    this.setState(newStatePiece);
  }

  render() {
    return (
      <div>
        <div>
          {this.props.paymentAccounts.map((item, i) => {
            return (
              <p key={item.name + i}>
                {item.name} - {item.acc_type}
              </p>
            );
          })}
          {this.state.newPayment ? (
            <div>
              <label htmlFor="name">Name</label>
              <input
                onChange={e => this.handleChange("name", e.target.value)}
                name="name"
                value={this.state.name}
              />{" "}
              <label htmlFor="accType" />
              <select
                onChange={e => this.handleChange("accType", e.target.value)}
                name="accType"
                value={this.state.accType}
              >
                <option value="Debit/Checking">Debit/Checking</option>
                <option value="Credit">Credit</option>
              </select>
              <button
                onClick={() =>
                  this.props.postNewPaymentAccount({
                    name: this.state.name,
                    accType: this.state.accType
                  })
                }
              >
                Submit
              </button>
            </div>
          ) : null}
          <button
            onClick={() => {
              this.setState({ newPayment: true });
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CreatePaymentAccountView;
