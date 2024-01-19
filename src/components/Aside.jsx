import { useState, useEffect } from "react";
import { v4 } from "uuid";

const Aside = ({ students, filterStudents }) => {
    // const [sortedCohorts, setSortedCohorts] = useState(null);
    const [sortedCohorts, setSortedCohorts] = useState([]); // New line added
    const [ascending, setAscending] = useState(true); // State to track sorting order

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
        // Removed previous commented code for clarity
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

        /*sort by year first then season*/
        // const sorted = allCohorts.sort((a, b) => {
        //     const [seasonA, yearA] = a.split(" ");
        //     const [seasonB, yearB] = b.split(" ");

        //     const yearComparison = Number(yearA) - Number(yearB);
        //     if (yearComparison !== 0) return yearComparison;

        //     return seasonOrder[seasonA] - seasonOrder[seasonB];
        // });

        const sorted = allCohorts.sort((a, b) => {
            const [seasonA, yearA] = a.split(" ");
            const [seasonB, yearB] = b.split(" ");

            const yearComparison = Number(yearA) - Number(yearB);
            if (yearComparison !== 0) return ascending ? yearComparison : -yearComparison; // the syntax -yearComparison is used to reverse the order of comparison for the years

            return ascending ? (seasonOrder[seasonA] - seasonOrder[seasonB]) : (seasonOrder[seasonB] - seasonOrder[seasonA]); // if ascending true then sorted like this seasonOrder[seasonA] - seasonOrder[seasonB]
            // seasonOrder[seasonA] accesses the numerical value associated with the season seasonA same for B
            //positive number means "place a before b" (since seasonA is later in the year than seasonB), and a negative number means "place b before a
        });

        setSortedCohorts(sorted);
    };

    useEffect(() => {
        sortCohorts();
    }, [students, ascending]); // added ascending to useEffect that way sorting stuff changes depending on whenever ascending useState changes too (not just students)

    const toggleSortOrder = () => { // handler to switch sorting order
        setAscending(!ascending);
    };

    return (
        <aside>
            <h2>Choose a Class by Start Date</h2>
            {/* <button onClick={sortCohorts}>Sort Descending By Year</button> */}
            {/* the button text now reflects the current sort order, indicating what action (ascending or descending sort) will be performed when it is clicked next */}
            <button onClick={toggleSortOrder}>Sort {ascending ? "Descending" : "Ascending"} By Year</button>
            <ul>
                <li key={v4()} onClick={() => filterStudents("all")}>
                    All Students
                </li>
                {/* {allCohorts.map((cohort) => (
                    <li key={v4()} onClick={() => filterStudents(cohort)}>
                        {cohort}
                    </li> */}
                {sortedCohorts.map((cohort) => (
                    <li key={v4()} onClick={() => filterStudents(cohort)}>
                        {cohort}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Aside;
