import { Link } from "react-router-dom";

const AllStudents = ({ students, getCohort }) => {
    const determineTrackStatusAll = (student) => {
        const isOnTrack =
            student.certifications.resume &&
            student.certifications.linkedin &&
            student.certifications.github &&
            student.certifications.mockInterview &&
            student.codewars.current.total > 850;

        return isOnTrack ? "On Track" : "Off Track";
    };

    const getBirthdayString = (stdnt) => {
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        console.log(stdnt);

        const dobArr = stdnt.dob.split("/");
        const monthIndex = dobArr[0] - 1;
        const day = dobArr[1];
        const year = dobArr[2];
        const dateObj = new Date(year, monthIndex, day);
        const month = months[dateObj.getMonth()];
        return `${month} ${day}, ${year}`;
    };

    return (
        <section className="students">
            <h2>
                {getCohort(students) === "all"
                    ? "All Students"
                    : getCohort(students)}
            </h2>
            <h3>Total Students: {students.length}</h3>
            {students.map((student) => (
                <Link
                    to={`/${student.id}/student`}
                    key={student.id}
                    getBirthdayString={getBirthdayString}
                >
                    <div>
                        <img
                            src={student.profilePhoto}
                            alt={`${student.names.preferredName}'s Profile`}
                        />
                        <ul>
                            <li>
                                Name: {student.names.preferredName}{" "}
                                {student.names.middleName}{" "}
                                {student.names.surname}
                            </li>
                            <li>Email: {student.username}</li>
                            <li>Date of Birth: {getBirthdayString(student)}</li>
                            <li>
                                Status: {determineTrackStatusAll(student)}
                            </li>{" "}
                            {/* Updated this line */}
                        </ul>
                    </div>
                </Link>
            ))}
        </section>
    );
};

export default AllStudents;
