import { useState, useEffect } from "react";
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
        // const seasonsAndYearsObj = {};
        const seasonOrder = {
            "Winter": 1,
            "Spring": 2,
            "Summer": 3,
            "Fall": 4
        };


        // for (const cohort of allCohorts) {
        //     // console.log(cohort);
        //     const arr = cohort.split(" ");
        //     const currYear = seasonsAndYearsObj[arr[1]];
        //     if (currYear) {
        //         seasonsAndYearsObj[arr[1]].push(cohort);
        //     } else {
        //         seasonsAndYearsObj[arr[1]] = [cohort];
        //     }
        //     console.log(seasonsAndYearsObj);
        // }
        
        /*
        for (const cohort of allCohorts) {
            // console.log(cohort);
            const arr = cohort.split(" ");
            const yr = arr[1];
            const currCohorts = seasonsAndYearsObj[yr];
            if (currCohorts) {
                seasonsAndYearsObj[yr].push(cohort);
            } else {
                seasonsAndYearsObj[yr] = [cohort];
            }
            console.log(seasonsAndYearsObj);
        } */


        // get all keys from 2015
        //const cohorts2015 = seasonsAndYearsObj["2015"];
        // sort those keys
        //const sorted2015 = cohorts2015.sort();
        // ...

        // const sorted = allCohorts.sort((a, b) => {
        //     const year1 = Number(a.split(" ")[1]);
        //     const year2 = Number(b.split(" ")[1]);
        //     if (year1 < year2) {
        //         return -1;
        //     } else if (year1 > year2) {
        //         return 1;
        //     } else {
        //         return 0;
        //     }
        // });
        /*sort by year first then season*/
        // const sorted = allCohorts.sort((a, b) => {
        //     const year1 = Number(a.split(" ")[1]);
        //     const year2 = Number(b.split(" ")[1]);
        //     if (year1 < year2) {
        //         return -1;
        //     } else if (year1 > year2) {
        //         return 1;
        //     } else {
        //         return 0;
        //     }
        // });
        /*sort by year first then season*/
        const sorted = allCohorts.sort((a, b) => {
            const [seasonA, yearA] = a.split(" ");
            const [seasonB, yearB] = b.split(" ");

            const yearComparison = Number(yearA) - Number(yearB);
            if (yearComparison !== 0) return yearComparison;

            return seasonOrder[seasonA] - seasonOrder[seasonB];
        });
        //Original code:
        // const sorted = allCohorts.sort((a, b) => {
        //     const [seasonA, yearA] = a.split(" ");
        //     const [seasonB, yearB] = b.split(" ");

        //     const yearComparison = Number(yearA) - Number(yearB);
        //     if (yearComparison !== 0) return yearComparison;

        //     return seasonOrder[seasonA] - seasonOrder[seasonB];
        // });

        // console.log(sorted);
        //return sorted;
        setSortedCohorts(sorted);
    };
    useEffect(() => {
        sortCohorts();
    }, [students]);

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
