import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Add from "./pages/Add/Add";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;
