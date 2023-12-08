import React, { Component } from 'react';
import './stock.css';
class Stock extends Component {
  
   //IMPLEMENT YOUR CODE HERE. "stockSymbol" , "marketPrice" and "options" are sent through one props data (i.e) as JSON
   render(){
       const {stockSymbol ,marketPrice, options}=this.props.stocks;
       
       return (
        <div className="stock-container">
        <div className="stock-symbol">
        <h2>Stock Symbol</h2>
        <p>{stockSymbol}</p>
        </div>
        <div className="market-price">
        <h2>Market Price</h2>
        <p>{marketPrice}</p>
        </div>
        <div className="options">
        <h2>Options</h2>
        <ul>
        {options.map((option,index)=>(
        <li key={index}>{option}</li>
        
        ))}
        </ul>
        </div>
        </div>
           
           );
   }
}


export default Stock;
