import React, { Component } from 'react';
import './styles.css';
import courseList from './courseList.json';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      submitStatus: false,
    };
  }

  displayName = (event) => {
    this.setState({ name: event.target.value });
  };

  searchCourse = (event) => {
    const courseName = event.target.value; // Convert to lowercase for case-insensitive matching
    const isCourseAvailable = courseList.includes(courseName);

    if (isCourseAvailable) {
      this.setState({ course: `course '${event.target.value}' is currently available` });
    } else {
      this.setState({ course: `course '${event.target.value}' is currently not available` });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitStatus: true });
  };

  render() {
    return (
      <div>
        <h1>EXCEL COACHING CENTER</h1>
        <form>
          <label>
            Name: <input type="text" id="name" onChange={this.displayName} />
          </label>
          <br />
          <label>
            Qualifications:
            <select>
              <option>BE/BTech</option>
              <option>ME/MTech</option>
              <option>BCA/MCA</option>
            </select>
          </label>
          <br />
          <label>
            Course Name: <input type="text" id="search" onChange={this.searchCourse} />
          </label>
          <br />
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
        {this.state.submitStatus && (
          <Display name={this.state.name} course={this.state.course} />
        )}
      </div>
    );
  }
}

class Display extends Component {
  render() {
    return (
      <div>
        <p>Welcome to Excel coaching centre!!!</p>
        <p>Hi {this.props.name}, {this.props.course}</p>
      </div>
    );
  }
}

export { Display };
export default Search;

