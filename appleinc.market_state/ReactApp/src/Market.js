import React,{ Component } from 'react';
import './Styles.css';
class AppleStock extends Component {
    // IMPLEMENT YOUR CODE HERE
    constructor(props){
        super(props);
        this.state={
            name: "Apple Inc. Common Stock",
            lastSale: 138.27,
            netChange: 2.92,
            percentageChange: 2.197,
        };
    }
    render() {
      return ( 
          <div>
          <h1>Stock Securities</h1>
          <h2>{this.state.name}</h2>
          <p>Last Sale: ${this.state.lastSale}</p>
          <p>Net Change: ${this.state.netChange}</p>
          <p>Percentage Change: {this.state.percentageChange}%</p>
          </div>
          );
    }
  }
  
//  EXPORT DEFAULT COMPONENT

  export default AppleStock;
   