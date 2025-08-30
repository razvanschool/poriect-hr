import React, { useState, useEffect } from "react";
import CardAngajat from "../../components/CardAnagajat/CardAngajat";
import employee from "../../../db.json";
import "./Angajati.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3008/employee")
      .then((response) => response.json())
      .then((data) =>{console.log("test", data); setEmployees(data)});
  }, []);
console.log(employees);
  return (
    <div className="employee-list">
      <h2>Employee Directory</h2>
      <div className="employee-cards">
        {employees.map((employee) => (
          <CardAngajat key={employee.id} angajat={employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
