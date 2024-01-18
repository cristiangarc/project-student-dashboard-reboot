import React from 'react'
// import { useState } from "react";
import { useParams } from 'react-router-dom';
import StudentDetailsForm from './StudentDetailsForm';

const StudentDetails = ({ students, determineTrackStatusStudentDetails  }) => {
    // const [formInput, setFormInput] = useState({ author: '', comment: '' });
    const { id } = useParams();
    const student = students.find(s => s.id === id);
  
    if (!student) {
      return <div>Student not found</div>;
    } 

    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   console.log("Form submitted with:", formInput);
    // };
  
    // const handleTextChange = (event) => {
    //   setFormInput({ ...formInput, [event.target.name]: event.target.value });
    // };
  
    const calculatePercentage = (current, goal) => ((current / goal) * 100).toFixed(2);
  return (
    <section>

          <section>
            <div key={student.id}>
              <img src={student.profilePhoto} alt={`${student.names.preferredName}'s Profile`} />
              <ul>
                <li>Name: {student.names.preferredName} {student.names.middleName} {student.names.surname}</li>
                <li>Email: {student.username}</li>
                <li>Date of Birth: {student.dob}</li>
                {/* Boolean stuff to determine ontrack/offtrack status */}
                <li>
                  Status: {determineTrackStatusStudentDetails([student])[0]}
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div>
              <p>Codewars</p>
              <ul>
                <li>Current Total: {student.codewars.current.total}</li>
                <li>Last Week: {student.codewars.current.lastWeek}</li>
                <li>Goal: {student.codewars.goal.total}</li>
                <li>Percent of Goal Achieved: {calculatePercentage(student.codewars.current.total, student.codewars.goal.total)}%</li>
                <li>Cohort: {student.cohort.cohortCode}</li>
              </ul>
            </div>
            <div>
              <p>Scores</p>
              <ul>
                <li>Assignments: {student.cohort.scores.assignments}</li>
                <li>Projects: {student.cohort.scores.projects}</li>
                <li>Assessments: {student.cohort.scores.assessments}</li>
              </ul>
            </div>
            <div>
              <p>Certifications</p>
              <ul>
                <li>Resume: {student.certifications.resume ? "Yes" : "No"}</li>
                <li>LinkedIn: {student.certifications.linkedin ? "Yes" : "No"}</li>
                <li>Mock Interview: {student.certifications.mockInterview ? "Yes" : "No"}</li>
                <li>Github: {student.certifications.github ? "Yes" : "No"}</li>
              </ul>
            </div>
            <StudentDetailsForm />
            {/* <form onSubmit={handleSubmit}>
                <label>
                Author:
                <input name="author" onChange={handleTextChange} />
                </label>
                <label>
                Comment:
                <input name="comment" onChange={handleTextChange} />
                </label>
                <button type="submit">Submit</button>
            </form> */}
          </section>
          
    </section>
  )
}

export default StudentDetails