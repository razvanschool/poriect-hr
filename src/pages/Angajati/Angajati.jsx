import React, { useState, useEffect } from "react";
import CardAngajat from "../../components/CardAnagajat/CardAngajat";
import employee from "../../../db.json";
import AddForm from "../../components/AddForm/AddForm";
import Button from 'react-bootstrap/Button';
import "./Angajati.css";


const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/employee")
      .then((response) => response.json())
      .then((data) => {
        console.log("test", data);
        setEmployees(data);
      });
  }, []);

  const [employeeForm, setEmployeeForm] = useState({
    firstName: "",
    lastName: "",
    role: "",
    department: "",
    email: "",
    phone: "",
  });

  const deleteEmployee = (id) => {
fetch(`http://localhost:3001/employee/${id}`, {
      method: "DELETE",
    })
    .then((response) => {
    if (!response.ok) {
      throw new Error("Eroare la stergerea angajatului");
    }
    setEmployees(employees.filter((emp) => emp.id !== id));
    })
    .catch((err) => console.error(err));
  }
  

  const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const [filterRole, setFilterRole] = useState("");

  return (
    <div className="employee-list">
      <h2>Employee Directory</h2>
      <select value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
        <option value={""}>Toti</option>
        <option value={"Manager"}>Manager</option>
        <option value={"HR"}>HR</option>
        <option value={"Developer"}>Developer</option>
      </select>
      {[...employees]
      .filter(emp => filterRole === "" ? true : emp.role === filterRole)
      .sort((a, b) => a.role.localeCompare(b.role))
      .map(emp => (
      <CardAngajat key={emp.id} angajat={emp} deleteEmployee={deleteEmployee} />
    ))}
      <div className="employee-cards">
        {employees.map((employee) => (
          <CardAngajat
            deleteEmployee={deleteEmployee}
            key={employee.id}
            angajat={employee}
          />
        ))}
      </div>

      <AddForm 
      employeeForm={employeeForm}
      employees={employees}
      setEmployeeForm={setEmployeeForm}
      setEmployees={setEmployees}
      handleClose={handleClose}
      handleShow={handleShow}
      show={show}
      />

      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
    </div>
  );
};

export default EmployeeList;
