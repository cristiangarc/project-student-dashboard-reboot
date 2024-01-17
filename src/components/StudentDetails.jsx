import React from 'react'
import AllStudents from "./AllStudents"

const StudentDetails = () => { //add prop to get data used in AllStudents component for for individual student in this component
  return (
    <section>
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

            <form onSubmit={handleSubmit}>
        <label>
          Author:
          <input name="author" onChange={handleTextChange} />
        </label>
        <label>
          Comment:
          <input name="comment" onChange={handleTextChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
          </section>
    </section>
  )
}

export default StudentDetails