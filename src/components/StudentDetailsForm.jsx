import { useState } from "react";

const StudentDetailsForm = () => {
  const [formInput, setFormInput] = useState({ author: '', comment: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with:", formInput);
  };

  const handleTextChange = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };
  return (
    <section>
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
  )
}

export default StudentDetailsForm;