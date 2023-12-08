import React, { Component } from 'react';
import './stock.css';
class Stock extends Component {
	render() {
		const { stockName, stockShares } = this.props.dashValues;
	
		return (
		  <div>
			<h1>Stock Securities</h1>
			<h1>Stock Name</h1>
			<h2>{stockName}</h2>
			<h1>Stock Shares</h1>
			<h2>{stockShares}</h2>
		  </div>
		);
	  }
	}
  
  //IMPLEMENT YOUR CODE HERE. "stockName" and "stockShares" is sent through one props data (i.e) as JSON
  
// 	render(){
// 		const {stockName,stockShares}= this.props.dashValue;
// 	    return (
// 			<div>
// 				<h1>Stock Securities</h1>
// 				<h3>Stock Name</h3>
				
// 				<h3>Stock Shares</h3>
				
// 			</div>
// 		);
// 	}
// }
  




export default Stock;
