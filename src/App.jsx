import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import EmployeeList from "./pages/Angajati/Angajati";
import Concedii from "./pages/Concedii/Concedii";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/angajati" element={<EmployeeList />} />
        <Route path="/concedii" element={<Concedii />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
