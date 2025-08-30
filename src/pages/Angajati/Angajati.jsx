import React, { useState } from "react";
import "./EmployeeList.css";

const EmployeeList = () => {
  
  const [employees, setEmployees] = useState([
    { id: 1, firstName: "Ion", lastName: "Popescu", role: "Developer", department: "IT", email: "ion@example.com", phone: "0712345678" },
    { id: 2, firstName: "Maria", lastName: "Ionescu", role: "HR Specialist", department: "Human Resources", email: "maria@example.com", phone: "0723456789" },
    { id: 3, firstName: "George", lastName: "Vasilescu", role: "Manager", department: "Sales", email: "george@example.com", phone: "0734567890" },
  ]);

 
  const [employeeForm, setEmployeeForm] = useState({
    firstName: "",
    lastName: "",
    role: "",
    department: "",
    email: "",
    phone: "",
  });


  const addNewEmployee = (e) => {
    e.preventDefault();
    const { firstName, lastName, role, department, email, phone } = employeeForm;
    if (!firstName || !lastName || !role || !department || !email || !phone) {
      alert("Te rog completează toate câmpurile!");
      return;
    }

    const newEmployee = {
      id: employees.length + 1,
      ...employeeForm,
    };

    setEmployees([...employees, newEmployee]);

    setEmployeeForm({
      firstName: "",
      lastName: "",
      role: "",
      department: "",
      email: "",
      phone: "",
    });
  };

  
  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="employee-list">
      <h2>HR Angajati</h2>

      <form onSubmit={addNewEmployee} className="employee-form">
        <input type="text" placeholder="Nume" value={employeeForm.firstName} onChange={(e) => setEmployeeForm({ ...employeeForm, firstName: e.target.value })} />
        <input type="text" placeholder="Prenume" value={employeeForm.lastName} onChange={(e) => setEmployeeForm({ ...employeeForm, lastName: e.target.value })} />
        <input type="text" placeholder="Rol" value={employeeForm.role} onChange={(e) => setEmployeeForm({ ...employeeForm, role: e.target.value })} />
        <input type="text" placeholder="Departament" value={employeeForm.department} onChange={(e) => setEmployeeForm({ ...employeeForm, department: e.target.value })} />
        <input type="email" placeholder="Email" value={employeeForm.email} onChange={(e) => setEmployeeForm({ ...employeeForm, email: e.target.value })} />
        <input type="tel" placeholder="Telefon" value={employeeForm.phone} onChange={(e) => setEmployeeForm({ ...employeeForm, phone: e.target.value })} />
        <button type="submit">Adaugă Angajat</button>
      </form>

      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            <h3>{emp.firstName} {emp.lastName}</h3>
            <p><strong>Rol:</strong> {emp.role}</p>
            <p><strong>Departament:</strong> {emp.department}</p>
            <p><strong>Email:</strong> {emp.email}</p>
            <p><strong>Telefon:</strong> {emp.phone}</p>
            <button onClick={() => deleteEmployee(emp.id)}>Șterge</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
