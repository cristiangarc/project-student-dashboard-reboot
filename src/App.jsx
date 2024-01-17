import Aside from "./components/Aside";
import About from "./components/About";
import { Routes, Route, Link } from "react-router-dom";
import StudentDetails from "./components/StudentDetails";
import { useState } from "react";
import students from "./data/data.json";
import { getAllStudents } from "./components/api.js";

function App() {
    return (
        <div>
            <h1>Student Dashboard</h1>
            <Link to={"/"}>Home </Link>
            <Link to={"/about"}>About</Link>
            <Aside />
            <StudentDetails students={students} />
            <Routes>
                <Route path="/" element={<>Hello</>}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route
                    path="/:id/student"
                    element={<StudentDetails student={students[0]} />}
                />
            </Routes>
        </div>
    );
}

export default App;
