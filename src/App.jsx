import Aside from "./components/Aside";
import About from "./components/About";
import AllStudents from "./components/AllStudents";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import students from "./data/data.json";

function App() {
    return (
        <div>
            <h1>Student Dashboard</h1>
            <Link to={"/"}>Home </Link>
            <Link to={"/about"}>About</Link>
            <Aside />
            <AllStudents students={students} />
            <Routes>
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
