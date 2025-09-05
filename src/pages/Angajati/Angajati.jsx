import React, { useState, useEffect } from "react";
import CardAngajat from "../../components/CardAnagajat/CardAngajat";
import NewModal from "../../components/NewModal";
import "./Angajati.css";

const Angajati = () => {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // filtr
  const [searchName, setSearchName] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("");
  const [filterRole, setFilterRole] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/employee")
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error("Eroare la fetch:", err));
  }, []);

  const addNewEmployee = async (employeeForm) => {
    const { firstName, lastName, role, department, email, phone } =
      employeeForm;

    if (!firstName || !lastName || !role || !department || !email || !phone) {
      alert("Te rog completează toate câmpurile!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employeeForm),
      });

      if (!response.ok) throw new Error("Eroare la adăugarea angajatului!");

      const savedEmployee = await response.json();
      setEmployees([...employees, savedEmployee]);
      setShowModal(false);
    } catch (err) {
      console.error(err);
      alert("A aparut o eroare la trimiterea datelor!");
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await fetch(`http://localhost:3001/employee/${id}`, { method: "DELETE" });
      setEmployees(employees.filter((emp) => emp.id !== id));
    } catch (err) {
      console.error("Eroare la stergere:", err);
    }
  };

  const filteredEmployees = employees
    .filter((emp) =>
      `${emp.firstName} ${emp.lastName}`
        .toLowerCase()
        .includes(searchName.toLowerCase())
    )
    .filter((emp) =>
      filterDepartment ? emp.department === filterDepartment : true
    )
    .filter((emp) => (filterRole ? emp.role === filterRole : true))
    .sort((a, b) => a.firstName.localeCompare(b.firstName));

  const departments = [...new Set(employees.map((emp) => emp.department))];
  const roles = [...new Set(employees.map((emp) => emp.role))];

  return (
    <div className="employee-list">
      <h2>Employee Directory</h2>
      <button className="open-modal-btn" onClick={() => setShowModal(true)}>
        Adaugă Angajat
      </button>

      {/* Filtrare fggfdg */}
      <div className="filters">
        <input
          type="text"
          placeholder="Caută după nume"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <select
          value={filterDepartment}
          onChange={(e) => setFilterDepartment(e.target.value)}
        >
          <option value="">Toate departamentele</option>
          {departments.map((dep) => (
            <option key={dep} value={dep}>
              {dep}
            </option>
          ))}
        </select>
        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
        >
          <option value="">Toate functiile</option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <div className="employee-cards">
        {filteredEmployees.map((employee) => (
          <CardAngajat
            key={employee.id}
            angajat={employee}
            deleteEmployee={deleteEmployee}
          />
        ))}
      </div>

      {showModal && (
        <NewModal onAdd={addNewEmployee} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Angajati;
