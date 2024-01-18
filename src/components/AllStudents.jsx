import { Link } from "react-router-dom";

const AllStudents = ({ students }) => {

  const determineTrackStatusAll = (student) => {
    const isOnTrack = student.certifications.resume &&
                      student.certifications.linkedin &&
                      student.certifications.github &&
                      student.certifications.mockInterview &&
                      student.codewars.current.total > 850;

        return isOnTrack ? "On Track" : "Off Track";
    }

  return (
    <section>
      {students.map((student) => (
        <Link to={`/${student.id}/student`} key={student.id}>
          <div>
            <img src={student.profilePhoto} alt={`${student.names.preferredName}'s Profile`} />
            <ul>
              <li>Name: {student.names.preferredName} {student.names.middleName} {student.names.surname}</li>
              <li>Email: {student.username}</li>
              <li>Date of Birth: {student.dob}</li>
              <li>Status: {determineTrackStatusAll(student)}</li> {/* Updated this line */}
            </ul>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default AllStudents;
