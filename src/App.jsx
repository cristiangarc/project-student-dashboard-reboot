import About from "./About";
import { Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <div>
            <h1>Student Dashboard</h1>
            <Link to={"/about"}>About</Link>
            <Routes>
                <Route path="/about" element={<About />}></Route>
            </Routes>
        </div>
    );
}

export default App;
