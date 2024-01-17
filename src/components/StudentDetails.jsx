// import React, { useState } from "react";

const StudentDetails = () => { // pass prop for student data
//   const [formInput, setFormInput] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // form submission stuff here
    console.log("Form submitted with:", 
    // formInput
    );
  };

  const handleTextChange = (event) => {
    // setFormInput();
  };

  return (
    <section>
        {/* will have to map for each section to extract data and have it render on page */}
      {/* {students.map((student, index) => ( */}
        <div key="">
            <img></img>
          <ul>
            <li>Name: {"preferredName"} {"middleName"} {"surname"}</li>
            <li>Email: </li>
            <li>Date of Birth:</li>
            <li>Ontrack? or Offtrack?</li>
          </ul>
        </div>
      {/* ))} */}
    <section/>
    <section>
    <div>
        <p>Codewars</p>
        <ul>
            <li>Current Total: 1804</li>
            <li>Last Week: 144</li>
            <li>Goal: 850</li>
            <li>Percent of Goal Achieved: </li>
            <li>Cohort: Winter2025</li>
        </ul>
    </div>
    <div>
        <p>Scores</p>
        <ul>
            <li>Assignments</li>
            <li>Projects</li>
            <li>Assessments</li>
        </ul>
    </div>
    <div>
        <p>Certifications</p>
        <ul>
            <li>Resume</li>
            <li>LinkedIn</li>
            <li>Mock Interview</li>
            <li>Github</li>
        </ul>
    </div>
    </section>

      <form onSubmit={handleSubmit}>
        <label>
          Author:
          <input name="Author" onChange={handleTextChange} />
        </label>
        <label>
          Comment:
          <input name="Comment" onChange={handleTextChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default StudentDetails;