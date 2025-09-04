import React, { useState, useEffect } from "react";
import CardAngajat from "../../components/CardAnagajat/CardAngajat";
import employee from "../../../db.json";
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

  const addNewEmployee = (e) => {
    e.preventDefault();
    const { firstName, lastName, role, department, email, phone } =
      employeeForm;
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
      <h2>Employee Directory</h2>
      <div className="employee-cards">
        {employees.map((employee) => (
          <CardAngajat
            deleteEmployee={deleteEmployee}
            key={employee.id}
            angajat={employee}
          />
        ))}
      </div>

      <form onSubmit={addNewEmployee} className="employee-form">
        <input
          type="text"
          placeholder="Nume"
          value={employeeForm.firstName}
          onChange={(e) =>
            setEmployeeForm({ ...employeeForm, firstName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Prenume"
          value={employeeForm.lastName}
          onChange={(e) =>
            setEmployeeForm({ ...employeeForm, lastName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Rol"
          value={employeeForm.role}
          onChange={(e) =>
            setEmployeeForm({ ...employeeForm, role: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Departament"
          value={employeeForm.department}
          onChange={(e) =>
            setEmployeeForm({ ...employeeForm, department: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={employeeForm.email}
          onChange={(e) =>
            setEmployeeForm({ ...employeeForm, email: e.target.value })
          }
        />
        <input
          type="tel"
          placeholder="Telefon"
          value={employeeForm.phone}
          onChange={(e) =>
            setEmployeeForm({ ...employeeForm, phone: e.target.value })
          }
        />
        <button type="submit">Adaugă Angajat</button>
      </form>
    </div>
  );
};

export default EmployeeList;
