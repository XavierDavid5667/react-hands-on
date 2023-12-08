import React, { Component } from 'react';
import './styles.css';

const studentsList = [
  {
    id: 'RS001',
    firstname: 'Robin',
    lastname: 'Wieruch',
    course: 'Bio-tech',
    batch: '2013-2017',
  },
  {
    id: 'RS002',
    firstname: 'Dave',
    lastname: 'Johnson',
    course: 'IT',
    batch: '2014-2018',
  },
];

class StudentsDetails extends Component {
  render() {
    return (
      <div>
        <h1>ZION - The Training Academy</h1>
        {studentsList.map((student) => (
          <dl key={student.id}>
            <dt>ID:</dt>
            <dd>{student.id}</dd>
            <dt>First Name:</dt>
            <dd>{student.firstname}</dd>
            <dt>Last Name:</dt>
            <dd>{student.lastname}</dd>
            <dt>Course:</dt>
            <dd>{student.course}</dd>
            <dt>Batch:</dt>
            <dd>{student.batch}</dd>
          </dl>
        ))}
      </div>
    );
  }
}

export default StudentsDetails;
