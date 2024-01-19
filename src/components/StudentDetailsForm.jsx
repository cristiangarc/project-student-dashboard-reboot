import { useState } from "react";

const StudentDetailsForm = () => {
  const [formInput, setFormInput] = useState({ author: '', comment: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with:", formInput);
    reset();
    // update "notes" key which is an array of abjects in data
  };

  const handleTextChange = (event) => {
    setFormInput(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  const reset = () => {
    setFormInput({ author: '', comment: '' });
  }

  return (
    <section>
        <form onSubmit={handleSubmit}>
          <label>
            Author:
            <input name="author" type="text" value={formInput.author} onChange={handleTextChange} />
          </label>
          <label>
            Comment:
            <input name="comment" type="text" value={formInput.comment} onChange={handleTextChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
    </section>
  )
}

export default StudentDetailsForm;
