import Aside from "./components/Aside";
import About from "./components/About";
import AllStudents from "./components/AllStudents";
import StudentDetails from "./components/AllStudents";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import students from "./data/data.json";
import { getAllStudents } from "./components/api.js";

function App() {
    return (
        <div>
            <h1>Student Dashboard</h1>
            <Link to={"/"}>Home </Link>
            <Link to={"/about"}>About</Link>
            <Aside students={students} />
            <Routes>
                <Route path="/" element={<>Hello</>}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route
                    path="/students"
                    element={<AllStudents students={students} />}
                />
                <Route
                    path="/students/:id"
                    element={<StudentDetails student={students[0]} />}
                />
            </Routes>
        </div>
    );
}

export default App;
