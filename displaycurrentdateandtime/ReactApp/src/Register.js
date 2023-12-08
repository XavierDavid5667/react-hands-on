// Please do not make any changes in the given template
import React, { Component } from 'react';
import './Styles.css';


class Register extends Component {
  
    // IMPLEMENT YOUR CODE HERE
    render(){
        return(
        <div className="register">
        <h1>Stock Securities</h1>
        <p>Welcome to one of the leading online platforms for stock trading in the country</p>
        <TimeComp />
        
        </div>    
            
        );
    }

}

class TimeComp extends Component {
  
  // IMPLEMENT YOUR CODE HERE
  constructor(){
      super();
      this.state={
          currentDate: new Date().toLocaleDateString(),
          currentTime: new Date().toLocaleTimeString(),
      };
  }
  render(){
      return(
        <div className="time-comp">
        <p>You have successfully registered with us on {this.state.currentDate} at {this.state.currentTime}</p>
        </div>  
        );
  }

}

export {TimeComp};
export default Register;

