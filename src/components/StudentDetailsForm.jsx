import { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { updateStudentComment } from "./api";
import "./StudentDetailsForm.css"

const StudentDetailsForm = ({ student }) => {
    const [formInput, setFormInput] = useState({ author: "", comment: "" });
    const [studentVar, setStudentVar] = useState(student);
    const { id } = useParams();

    const navigate = useNavigate();

    const addStudentComment = () => {
        const studentObj = studentVar;
        studentObj.notes.push({
            commenter: `${formInput.author}`,
            comment: `${formInput.comment}`,
        });
        console.log(studentObj);
        setStudentVar(studentObj);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted with:", formInput);
        // add the new comment to the student state
        addStudentComment();
        // make an api call to update the student's JSON file
        updateStudentComment(id, studentVar)
            .then(() => {
                navigate(`/${id}/student`);
            })
            .catch((error) => console.error(error));
        reset();
        // update "notes" key which is an array of abjects in data
    };

    const handleTextChange = (event) => {
        setFormInput((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    const reset = () => {
        setFormInput({ author: "", comment: "" });
    };

    return (
        <section className="form-section">
            <form onSubmit={handleSubmit}>
                <label>
                    Author:
                    <input
                        name="author"
                        type="text"
                        value={formInput.author}
                        onChange={handleTextChange}
                    />
                </label>
                <label>
                    Comment:
                    <input
                        name="comment"
                        type="text"
                        value={formInput.comment}
                        onChange={handleTextChange}
                    />
                </label>
                <br/>
                <button className="border-flip border-flip--orange btn" type="submit">Submit</button>
            </form>
            <h3>Comments:</h3>
            <ul>
                {student.notes.map((note) => (
                    <li key={v4()}>
                        {note.commenter}: {note.comment}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default StudentDetailsForm;
