import { Link } from "react-router-dom";
const StudentDetails = ({ students }) => {

  return (
    <section>
      {students.map((student) => (
        <Link to={`/${student.id}/student`} key={student.id}>
        <div key={student.id}>
          <img src={student.profilePhoto} alt={`${student.names.preferredName}'s Profile`} />
          <ul>
            <li>Name: {student.names.preferredName} {student.names.middleName} {student.names.surname}</li>
            <li>Email: {student.username}</li>
            <li>Date of Birth: {student.dob}</li>
            {/* boolean stuff to determine which one for next line */}
            <li>Ontrack? or Offtrack?</li>
          </ul>
        </div>
        </Link>
      ))}
    </section>
  );
};

export default StudentDetails;
