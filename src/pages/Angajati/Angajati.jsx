import React, { useEffect, useState } from "react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    { name: "Ion Popescu", role: "Developer", department: "IT" },
    {
      name: "Maria Ionescu",
      role: "HR Specialist",
      department: "Human Resources",
    },
    { name: "George Vasilescu", role: "Manager", department: "Sales" },
  ]);

  useEffect(() => {
    fetch(`http://localhost:3001/employee`)
      .then((response) => response.json())
      .then((data) => {
        const ang = data.map((x) => {
          return {
            name: x.first_name + " " + x.last_name,
            role: x.position,
            department: x.department,
          };
        });
        setEmployees([...employees, ...ang]);
      })

      .catch((err) => console.error("FAILEDDDD TO GET THE MOVIE!!", err));
  }, []);

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
