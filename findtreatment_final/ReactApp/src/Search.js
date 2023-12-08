// Please do not make any changes in the given template
import React, { Component } from 'react';
import './styles.css';

var treamentList=["Keratin","Scalp","Moisture","Detox","Toning"];


class Search extends Component {
    
    constructor(props){
        super(props);
        this.state={
            resultantArray:[]
        }
    }
    
    updateData = (treatmentName)=>{
       const exits = treamentList.includes(treatmentName);
       const msg = `${treatmentName} - ${exits ? "Found" : "Not Found"}`;
       this.setState( (prevState)=> ({
           resultantArray:[...prevState.resultantArray, msg],
       }))
    }
    
    
    //IMPLEMENT YOUR CODE HERE. 
    render(){
    return(
        
        <div>
        
        <h1> Hair Shine</h1>
        
        <label onClick={()=>this.updateData('Keratin')}>Keratin</label> 
        <label onClick={()=>this.updateData('Scalp')}>Scalp</label>
        <label onClick={()=>this.updateData('Moisture')}>Moisture</label>
        <label onClick={()=>this.updateData('Relax')}>Relax</label>
        <label onClick={()=>this.updateData('Cysteine')}>Cysteine</label>
        
        <Display treatments= {this.state.resultantArray}/>
        </div>
        );
    }

}
class Display extends Component {
		
    //IMPLEMENT YOUR CODE HERE
    render(){
        
        const treatments = this.props.treatments;
    return(
        
        <div>
        
        <ul>
        
             {treatments.map( (treatment,index)=> (
        
        
                <li>  <p key = {index}>{treatment}</p> </li>
        
               )) }
         </ul>
        
        
        </div>
        );
    }
}

export {Display};
export default Search;

