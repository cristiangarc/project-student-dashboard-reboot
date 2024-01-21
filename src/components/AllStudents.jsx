import { Link } from "react-router-dom";

import "./AllStudents.css";

const AllStudents = ({ students, getCohort, getBirthdayString }) => {
    const determineTrackStatusAll = (student) => {
        const isOnTrack =
            student.certifications.resume &&
            student.certifications.linkedin &&
            student.certifications.github &&
            student.certifications.mockInterview &&
            student.codewars.current.total > 850;

        return isOnTrack ? "On Track" : "Off Track";
    };

    return (
        <section className="student-list">
            <h2 className="all-students-h2">
                {getCohort(students) === "all"
                    ? "All Students"
                    : getCohort(students)}
            </h2>
            <h3 className="h3-total-students">
                Total Students: {students.length}
            </h3>
            <section className="students">
                {students.map((student) => (
                    <Link to={`/${student.id}/student`} key={student.id}>
                        <div className="student">
                            <img
                                className="profile-pic"
                                src={student.profilePhoto}
                                alt={`${student.names.preferredName}'s Profile`}
                            />
                            <ul className="student-ul">
                                <li>
                                    {student.names.preferredName}{" "}
                                    {student.names.middleName}{" "}
                                    {student.names.surname}
                                </li>
                                <li>{student.username}</li>
                                <li>{getBirthdayString(student)}</li>
                                <li
                                    className={
                                        determineTrackStatusAll(student) ===
                                        "On Track"
                                            ? "green"
                                            : "red"
                                    }
                                >
                                    {determineTrackStatusAll(student)}
                                </li>
                            </ul>
                        </div>
                    </Link>
                ))}
            </section>
        </section>
    );
};

export default AllStudents;
