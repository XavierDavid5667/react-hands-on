import React, { Component } from 'react';
import axios from 'axios';

class Async extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get('articles.json');
      this.setState({ articleList: response.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    return (
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
            {this.state.articleList.map((article) => (
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
