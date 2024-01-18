import { useState } from "react";

const StudentDetails = ({ students }) => {
  const [formInput, setFormInput] = useState({ author: '', comment: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with:", formInput);
  };

  const handleTextChange = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  const calculatePercentage = (current, goal) => ((current / goal) * 100).toFixed(2);

  return (
    <section>
      {students.map((student) => (
        <div key={student.id}>
          <img src={student.profilePhoto} alt={`${student.names.preferredName}'s Profile`} />
          <ul>
            <li>Name: {student.names.preferredName} {student.names.middleName} {student.names.surname}</li>
            <li>Email: {student.username}</li>
            <li>Date of Birth: {student.dob}</li>
            {/* boolean stuff to determine which one for next line */}
            <li>Ontrack? or Offtrack?</li>
          </ul>

          {/* <section>
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
          </section> */}
        </div>
      ))}

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
  );
};

export default StudentDetails;
