import { useState } from "react";
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
        const seasonsAndYearsObj = {};

        for (const cohort of allCohorts) {
            // console.log(cohort);
            const arr = cohort.split(" ");
            const currYear = seasonsAndYearsObj[arr[1]];
            if (currYear) {
                seasonsAndYearsObj[arr[1]].push(cohort);
            } else {
                seasonsAndYearsObj[arr[1]] = [cohort];
            }
            console.log(seasonsAndYearsObj);
        }

        // get all keys from 2015

        // sort those keys

        // ...

        const sorted = allCohorts.sort((a, b) => {
            const year1 = Number(a.split(" ")[1]);
            const year2 = Number(b.split(" ")[1]);
            if (year1 < year2) {
                return -1;
            } else if (year1 > year2) {
                return 1;
            } else {
                return 0;
            }
        });

        // console.log(sorted);
        return sorted;
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
