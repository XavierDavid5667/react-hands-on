import React, { Component } from 'react';
import './style.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegistered: true,
    };
  }

  // Toggle the isRegistered state when the button is clicked
  toggleRegistration = () => {
    this.setState({ isRegistered: !this.state.isRegistered });
  };

  render() {
    return (
      <div>
        {this.state.isRegistered ? (
          // Display the Login Form
          <div className="card" style={{ width: "40rem", height: "15rem", marginLeft: "300px" }}>
            <div className="card-body">
              <h2 className="mt-3 p-4 bg-warning text-white rounded">WeHost</h2>
              <table style={{ textAlign: "left", width: "500px" }}>
                <tr>
                  <td>
                    <label htmlFor="userName">User Name:</label>
                  </td>
                  <td>
                    <input className="form-control" type="text" id="userName" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="password">Password:</label>
                  </td>
                  <td>
                    <input className="form-control" type="password" id="password" />
                  </td>
                </tr>
              </table>
              <button className="btn btn-primary w-25">Login</button>
              <button className="btn btn-link" onClick={this.toggleRegistration}>Sign Up</button>
            </div>
          </div>
        ) : (
          // Display the Sign Up Form
          <div className="card" style={{ width: "40rem", height: "15rem", marginLeft: "300px" }}>
            <div className="card-body">
              <h2 className="mt-3 p-4 bg-warning text-white rounded">WeHost</h2>
              <table style={{ textAlign: "left", width: "500px" }}>
                <tr>
                  <td>
                    <label htmlFor="emailId">Email Id:</label>
                  </td>
                  <td>
                    <input className="form-control" type="text" id="emailId" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="contact">Contact:</label>
                  </td>
                  <td>
                    <input className="form-control" type="text" id="contact" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="name">Name:</label>
                  </td>
                  <td>
                    <input className="form-control" type="text" id="name" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="pass">Password:</label>
                  </td>
                  <td>
                    <input className="form-control" type="password" id="pass" />
                  </td>
                </tr>
              </table>
              <button className="btn btn-primary w-25">Sign Up</button>
              <button className="btn btn-link" onClick={this.toggleRegistration}>Login</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
