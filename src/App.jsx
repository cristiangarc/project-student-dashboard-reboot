import Aside from "./components/Aside";
import About from "./components/About";
import AllStudents from "./components/AllStudents";
import StudentDetails from "./components/StudentDetails";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import students from "./data/data.json";
import { getAllStudents } from "./components/api.js";

function App() {
    const [filteredStudents, setFilteredStudents] = useState([]);

    return (
        <div>
            <h1>Student Dashboard</h1>
            <Link to={"/"}>Home </Link>
            <Link to={"/about"}>About</Link>
            <Aside
                students={students}
                setFilteredStudents={setFilteredStudents}
            />
            <Routes>
                <Route
                    path="/"
                    element={<AllStudents students={students} />}
                ></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/students/:id" element={<StudentDetails />} />
            </Routes>
        </div>
    );
}

export default App;
