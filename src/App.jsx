import Aside from "./components/Aside";
import About from "./components/About";
import { Routes, Route, Link } from "react-router-dom";
import StudentDetails from "./components/StudentDetails";

function App() {
    return (
        <div>
            <h1>Student Dashboard</h1>
            <Link to={"/"}>Home </Link>
            <Link to={"/about"}>About</Link>
            <Aside />
            <StudentDetails students={students}/>
            <Routes>
                <Route path="/about" element={<About />}></Route>
            </Routes>
        </div>
    );
}

export default App;
