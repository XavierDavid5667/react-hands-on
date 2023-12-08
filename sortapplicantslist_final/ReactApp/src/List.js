import React, { Component } from 'react';
import './styles.css';

const applicantsList = [
  {
    rollNo: 114,
    name: 'Dean',
    age: 22
  },
  {
    rollNo: 325,
    name: 'Carl Marx',
    age: 25
  },
  {
    rollNo: 120,
    name: 'Bobby', 
    age: 24
  },
  {
    rollNo: 23,
    name: 'Alice Dyana',
    age: 22
  },
  {
    rollNo: 35,
    name: 'Ethan Donald',
    age: 21
  },
];

class List extends React.Component {
  render() {
    // Sort the applicantsList based on 'rollNo'
    const sortedApplicantsList = applicantsList.slice().sort((a, b) => a.rollNo - b.rollNo);

    return (
      <div>
        <h1>ZION - The Training Academy</h1>
        <table>
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Applicant Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {sortedApplicantsList.map((applicant) => (
              <tr key={applicant.rollNo}>
                <td>{applicant.rollNo}</td>
                <td>{applicant.name}</td>
                <td>{applicant.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
