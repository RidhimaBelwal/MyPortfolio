import "./App.css";
import Aboutme from "./components/Aboutme.js";
import Myprojects from "./components/Myprojects.js";
import Services from "./components/Services.js";
import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Full from "./components/Full";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Full />}></Route>
          <Route path="/home" element={<Main />}></Route>
          <Route path="/myservices" element={<Services />}></Route>
          <Route path="/aboutme" element={<Aboutme />}></Route>
          <Route path="/myprojects" element={<Myprojects />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;


