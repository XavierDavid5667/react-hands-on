// Please do not make any changes in the given code template
import React, { Component } from 'react';
import './styles.css';


class Event extends React.Component {
    constructor(props){
        super(props);
        this.state={
            studentName: '',
        };
    }
    
 handleInputChange=(event)=>{
        this.setState({
            studentName: event.target.value,
        });
    }
	//IMPLEMENT YOUR CODE HERE. 
   render(){
   return (
       <div>
       <h1>Mind Academy</h1>
       <h3>Welcome {this.state.studentName}</h3>
       <input type="text" value={this.state.studentName} onChange={this.handleInputChange} />
       </div>
       );
	}
}

export default Event;
