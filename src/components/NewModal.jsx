import React, { useState } from "react";
import "./NewModal.css";

const NewModal = ({ onAdd, onClose }) => {
  const [employeeForm, setEmployeeForm] = useState({
    firstName: "",
    lastName: "",
    role: "",
    department: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(employeeForm);
    setEmployeeForm({
      firstName: "",
      lastName: "",
      role: "",
      department: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h3>Adauga Angajat</h3>
        <form onSubmit={handleSubmit} className="employee-form">
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
          <button type="submit">Adauga</button>
        </form>
      </div>
    </div>
  );
};

export default NewModal;
