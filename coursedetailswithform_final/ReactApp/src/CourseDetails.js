// Please do not make any changes in the given code template

import React, { Component } from 'react';
import './styles.css';

class CourseDetails extends Component{
        //IMPLEMENT YOUR CODE HERE. 
       
        constructor(props){
            super(props);
            this.state={
                course:''
            }
        }
        
        handleChange = (event)=>{
            course: event.target.value
        }
        
        
        render(){
            return(
                
                <div>
                
                <form>
                <h1>ZION - The Training Academy</h1>
                
                <label>Select the course</label>
                
                <select id="course" value={this.state.course} onChange={this.handleChange}>
                
                <option value="Java">Java</option>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                </select>
                
                </form>
                
                <label>Selected Course:{this.state.course}</label>
                
                </div>
                );
        }
        
}
export default CourseDetails;