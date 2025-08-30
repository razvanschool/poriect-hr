import React, { useState } from "react";
import "./EmployeeList.css";



const employeeFromDb = {

    id: 1,
    first_name: "Ion",
    last_name: "Popescu",
    email: "ion.popescu@example.com",
    phone: "+40 712 345 678",
    position: "Software Engineer",
    department: "Development",
    salary: 5500,
    date_of_hire: "2020-06-15",
    address: {
      street: "Strada Libertății",
      city: "București",
      postal_code: "010101",
      country: "România"
    },
    manager: {
      id: 2,
      first_name: "Maria",
      last_name: "Ionescu",
      email: "maria.ionescu@example.com",
      phone: "+40 712 987 654",
      position: "Development Manager"
    },

    is_active: true,
    vacation: {
      total_days: 20,
      days_taken: 8,
      remaining_days: 12,

    }

}
const EmployeeList = () => {
  const [employees, setEmployees] = useState([ 
    { id: 101, name: "Ion Popescu", role: "Developer", department: "IT" },
    { id: 102, name: "Maria Ionescu", role: "Development Manager", department: "IT" },
  ]);


  const addEmployee = () => {
  const newEmployee = {
    id: Date.now(),
    name: `${employeeFromDb.first_name} ${employeeFromDb.last_name}`,
    role: employeeFromDb.position,
    department: employeeFromDb.department,
    email: employeeFromDb.email,
    phone: employeeFromDb.phone,
  };

  setEmployees([...employees, newEmployee]);
};


  const deleteEmployee = (id) => {

    setEmployees(employees.filter((emp) => emp.id !== id));

  };



return (
  <div className="employee-list">
    <h2>Employee Directory</h2>
    <button className="add-btn" onClick={addEmployee}>
      Adauga Angajat
    </button>

    <div className="cards-container">
      {employees.map((employee) => (
        <div className="employee-card" key={employee.id}>
          <h3>{employee.name}</h3>
          <p><strong>Role: </strong> {employee.role}</p>
          <p><strong>Department:</strong> {employee.department}</p>
          {employee.email && <p><strong>Email: </strong> {employee.email}</p>}
          {employee.phone && (
            <>
              <p><strong>Phone:</strong> {employee.phone}</p>
              <button className="delete-btn" onClick={() => deleteEmployee(employee.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  </div>
);


}
export default EmployeeList;