import React, { useState } from "react";
import "./EmployeeList.css";

const EmployeeList = () => {
  const [employees] = useState([
    { name: "Ion Popescu", role: "Developer", department: "IT" },
    {
      name: "Maria Ionescu",
      role: "HR Specialist",
      department: "Human Resources",
    },
    { name: "George Vasilescu", role: "Manager", department: "Sales" },
  ]);

  return (
    <div className="employee-list">
      <h2>Employee Directory</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <h3>{employee.name}</h3>
            <p>{employee.role}</p>
            <p>{employee.department}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
