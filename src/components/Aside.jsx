import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { v4 } from "uuid";

const Aside = ({ students, filterStudents }) => {
    const [sortedCohorts, setSortedCohorts] = useState(null);

    const getAllCohorts = () => {
        const cohorts = [];
        for (const student of students) {
            const current = student["cohort"]["cohortCode"];
            if (!cohorts.includes(current)) cohorts.push(current);
        }
        return cohorts;
    };

    let allCohorts = getAllCohorts();

    const standardiseCohorts = () => {
        const newCohorts = [];
        for (const cohort of allCohorts) {
            const firstNum = cohort
                .split("")
                .find((char) => Number.isInteger(Number(char)));
            const firstNumIndex = cohort.indexOf(firstNum);
            const season = cohort.slice(0, firstNumIndex);
            const number = cohort.slice(firstNumIndex);
            newCohorts.push(`${season} ${number}`);
        }
        return newCohorts;
    };

    allCohorts = standardiseCohorts();

    const sortCohorts = () => {
        // return allCohorts.sort((a,b) => {
        // })
    };

    return (
        <aside>
            <h2>Choose a Class by Start Date</h2>
            <button onClick={sortCohorts}>Sort Descending By Year</button>
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
        </aside>
    );
};

export default Aside;
