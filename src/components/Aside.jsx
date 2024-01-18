import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

const Aside = ({ students, setFilteredStudents }) => {
    const navigate = useNavigate();

    const getAllCohorts = () => {
        const cohorts = [];
        for (const student of students) {
            const current = student["cohort"]["cohortCode"];
            if (!cohorts.includes(current)) cohorts.push(current);
        }
        return cohorts;
    };

    const allCohorts = getAllCohorts();

    const filterStudents = (cohort) => {
        if (cohort === "all") {
            navigate("/");
        } else {
            const filtered = students.filter(
                (student) => student["cohort"]["cohortCode"] === cohort
            );
            setFilteredStudents(filtered);
        }
    };

    return (
        <div>
            Choose a Class by Start Date
            <ul>
                <li key={v4()} onClick={() => filterStudents("all")}>
                    All Students
                </li>
                {allCohorts.map((cohort) => (
                    <li key={v4()} onClick={() => filterStudents(cohort)}>
                        {cohort}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Aside;
