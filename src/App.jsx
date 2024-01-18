// import Aside from "./components/Aside";
import Aside from "./components/Aside.jsx";
import About from "./components/About";
import AllStudents from "./components/AllStudents";
import StudentDetails from "./components/StudentDetails";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import students from "./data/data.json";
import { getAllStudents } from "./components/api.js";

function App() {
    const [filteredStudents, setFilteredStudents] = useState([]);

    const filterStudents = (cohort) => {
        const cohortNoSpace = cohort.replace(" ", "");
        if (cohortNoSpace === "all") {
            setFilteredStudents([]);
        } else {
            const filtered = students.filter(
                (student) => student["cohort"]["cohortCode"] === cohortNoSpace
            );
            setFilteredStudents(filtered);
            console.log(filtered);
        }
    };

    useEffect(() => {
        setFilteredStudents(students);
    }, []);

    return (
        <div>
            <h1>Student Dashboard</h1>
            <Link to={"/"}>Home </Link>
            <Link to={"/about"}>About</Link>
            <Aside students={students} filterStudents={filterStudents} />
            <Routes>
                <Route
                    path="/"
                    element={<AllStudents students={filteredStudents} />}
                ></Route>
                <Route path="/about" element={<About />}></Route>
                <Route
                    path="/:id/student"
                    element={<StudentDetails students={students} />}
                />
            </Routes>
        </div>
    );
}

export default App;
