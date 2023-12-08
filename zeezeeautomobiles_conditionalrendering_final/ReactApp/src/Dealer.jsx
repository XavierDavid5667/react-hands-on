import React from 'react';
import './styles.css';

class DealerBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: 0, // USE THIS 'flag' to decide on the view
    };
  }

  // Event handler to update the flag value based on the button clicked
  changeHandler = (value) => {
    this.setState({ flag: value });
  };

  // Method to render the corresponding component based on the flag value
  getReport = () => {
    if (this.state.flag === 1) {
      return <SalesReport />;
    } else if (this.state.flag === 2) {
      return <ServiceReport />;
    }
    return null;
  };

  render() {
    return (
      <div>
        <h3 className="bg-info text-white d-inline-block">ZeeZee Automobiles</h3>
        <button
          className="btn btn-warning"
          name="sales"
          onClick={() => this.changeHandler(1)}
        >
          Sales Report
        </button>
        <button
          className="btn btn-info"
          name="service"
          onClick={() => this.changeHandler(2)}
        >
          Service Report
        </button>
        {this.getReport()}
      </div>
    );
  }
}

class SalesReport extends React.Component {
  render() {
    return (
      <table className="table table-hover bg-secondary w-50 text-white">
        <thead>
          <tr className="font-weight-bold">
            <th>Owner Name</th>
            <th>Contact Number</th>
            <th>Model</th>
            <th>Date of Purchase</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alwin</td>
            <td>+13044000354</td>
            <td>Hundai Creta</td>
            <td>23-7-2021</td>
          </tr>
          <tr>
            <td>Hendry</td>
            <td>+15044000354</td>
            <td>Ford Eco sport</td>
            <td>01-7-2022</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class ServiceReport extends React.Component {
  render() {
    return (
      <table className="table table-hover bg-secondary w-50 text-white">
        <thead>
          <tr className="font-weight-bold">
            <th>Vehicle Number</th>
            <th>Contact Number</th>
            <th>Service Type</th>
            <th>Service charge</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>85863NY16</td>
            <td>+12044000354</td>
            <td>Ac service</td>
            <td>25$</td>
          </tr>
          <tr>
            <td>120665NY16</td>
            <td>+15544000354</td>
            <td>Wheel alignment</td>
            <td>12$</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export { SalesReport };
export { ServiceReport };
export default DealerBoard;
