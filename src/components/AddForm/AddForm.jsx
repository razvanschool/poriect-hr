import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AddForm ({employees, setEmployees, employeeForm, setEmployeeForm, show, handleClose}) {
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

    fetch(`http://localhost:3001/employee`, {
      method: "POST",
      body: JSON.stringify(employeeForm),
      headers: {
        "Content-Type": "application/json",
      },
    });
};
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><form onSubmit={addNewEmployee} className="employee-form">
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
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

