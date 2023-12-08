import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
class Async extends Component {
    
    constructor(props) {
		//IMPLEMENT CODE HERE.
		// Declare "articleList" as state variable
		super(props);
		this.state={
		    articleList: [],
		};
	}
	async componentDidMount(){
		//IMPLEMENT CODE HERE
			try{
		    const response = await axios.get("articles.json");
		    this.setState({ articleList: response.data });
		}catch (error){
		    console.error('Error fetching articles:', error);
		}
    }
    //Create a parent div tag inside return and enclose all the codes inside it .Using map,iterate the array and display it in a table
    render(){
        return(
        <div>
            <h1>Articles Information</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Date</th>
                        </tr>
                    </thead>
            <tbody>
                {this.state.articleList.map((article)=>(
                    <tr key={article.id}>
                        <td>{article.id}</td>
                        <td>{article.title}</td>
                        <td>{article.date}</td>
                    </tr>
                    ))}
            </tbody>
            </table>
            </div>
            );
    }
}

export default Async;


	
    


