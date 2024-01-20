import Aside from "./components/Aside.jsx";
import About from "./components/About";
import AllStudents from "./components/AllStudents";
import StudentDetails from "./components/StudentDetails";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllStudents } from "./components/api.js";

import "./App.css";

function App() {
    const [allStudents, setAllStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const determineTrackStatusStudentDetails = (students) => {
        return students.map((student) => {
            const isOnTrack =
                student.certifications.resume &&
                student.certifications.linkedin &&
                student.certifications.github &&
                student.certifications.mockInterview &&
                student.codewars.current.total > 850;

            return isOnTrack ? "On Track" : "Off Track";
        });
    };

    const getCohort = (students) => {
        const cohrt = students.reduce((acc, curr) => {
            const currCohort = curr["cohort"]["cohortCode"];
            if (!acc.includes(currCohort)) acc.push(currCohort);
            return acc;
        }, []);

        const nameMapping = {
            Winter2025: "Winter 2025",
            Spring2025: "Spring 2025",
            Summer2025: "Summer 2025",
            Fall2025: "Fall 2025",
            Winter2026: "Winter 2026",
            Spring2026: "Spring 2026",
            Summer2026: "Summer 2026",
            Fall2026: "Fall 2026",
        };
        return cohrt.length > 1 ? "all" : nameMapping[cohrt];
    };

    const filterStudents = (cohort) => {
        const cohortNoSpace = cohort.replace(" ", "");
        if (cohortNoSpace === "all") {
            setFilteredStudents(allStudents);
        } else {
            const filtered = allStudents.filter(
                (student) => student["cohort"]["cohortCode"] === cohortNoSpace
            );
            setFilteredStudents(filtered);
            console.log(filtered);
        }
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

        const dobArr = stdnt.dob.split("/");
        const monthIndex = dobArr[0] - 1;
        const day = dobArr[1];
        const year = dobArr[2];
        const dateObj = new Date(year, monthIndex, day);
        const month = months[dateObj.getMonth()];
        return `${month} ${day}, ${year}`;
    };

    useEffect(() => {
        getAllStudents()
            .then((data) => {
                setAllStudents(data);
                setFilteredStudents(data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1 className="title">Student Dashboard</h1>
            <Link to={"/"}>Home </Link>
            <Link to={"/about"}>About</Link>
            <section className="container">
                <Aside students={allStudents} filterStudents={filterStudents} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <AllStudents
                                students={filteredStudents}
                                getCohort={getCohort}
                                getBirthdayString={getBirthdayString}
                            />
                        }
                    ></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route
                        path="/:id/student"
                        element={
                            <StudentDetails
                                students={allStudents}
                                determineTrackStatusStudentDetails={
                                    determineTrackStatusStudentDetails
                                }
                                getBirthdayString={getBirthdayString}
                            />
                        }
                    />
                </Routes>
            </section>
        </div>
    );
}

export default App;
