import { useState } from "react";
import { v4 } from "uuid";

const Aside = ({ students }) => {
    const [students, setStudents] = useState(students);

    const getAllCohorts = () => {
        const cohorts = [];
        for (const student of students) {
            const current = student["cohort"]["cohortCode"];
            if (!cohorts.includes(current)) cohorts.push(current);
        }
        return cohorts;
    };

    const allCohorts = getAllCohorts();

    const filterStudents = () => {};

    return (
        <div>
            Choose a Class by Start Date
            <ul>
                <li key={v4()} onClick={filterStudents}>
                    All Students
                </li>
                {allCohorts.map((cohort) => (
                    <li key={v4()}>{cohort}</li>
                ))}
            </ul>
        </div>
    );
};

export default Aside;
