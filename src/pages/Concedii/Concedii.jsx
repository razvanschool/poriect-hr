import React, { useEffect, useState } from "react";
import "./Concedii.css";

const Concedii = () => {
  const [vacations, setVacations] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    employeeId: "",
    start_date: "",
    end_date: "",
    days_taken: "",
    type: "paid",
    reason: "",
  });

  useEffect(() => {
    fetchVacations();
  }, []);

  const fetchVacations = () => {
    fetch("http://localhost:3001/employee")
      .then((res) => res.json())
      .then((data) => {
        const withVacation = data.filter((emp) => emp.vacation);
        setVacations(withVacation);
      })
      .catch((err) => console.error("Eroare la fetch concedii:", err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const employee = vacations.find((emp) => emp.id.toString() === formData.employeeId);
    if (!employee) return alert("Angajat invalid!");

    
    const newVacation = {
      start_date: formData.start_date,
      end_date: formData.end_date,
      days_taken: parseInt(formData.days_taken),
      type: formData.type,
      reason: formData.reason,
    };


    const updatedEmployee = {
      ...employee,
      vacation: {
        ...employee.vacation,
        days_taken: employee.vacation.days_taken + newVacation.days_taken,
        remaining_days: employee.vacation.remaining_days - newVacation.days_taken,
        vacation_history: [...employee.vacation.vacation_history, newVacation],
      },
    };

    try {
      const response = await fetch(`http://localhost:3001/employee/${employee.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedEmployee),
      });

      if (!response.ok) throw new Error("Eroare la salvarea concediului!");

      setFormData({
        employeeId: "",
        start_date: "",
        end_date: "",
        days_taken: "",
        type: "paid",
        reason: "",
      });
      setShowForm(false);
      fetchVacations(); 
    } catch (err) {
      console.error(err);
      alert("A apărut o eroare la adăugarea concediului!");
    }
  };

  return (
    <div className="vacation-page">
      <h2>Zile de Concediu</h2>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Închide formular" : "Adaugă concediu"}
      </button>

      {showForm && (
        <form className="vacation-form" onSubmit={handleSubmit}>
          <select
            name="employeeId"
            value={formData.employeeId}
            onChange={handleInputChange}
            required
          >
            <option value="">Selectează angajat</option>
            {vacations.map((emp) => (
              <option key={emp.id} value={emp.id}>
                {emp.first_name} {emp.last_name}
              </option>
            ))}
          </select>
          <input
            type="date"
            name="start_date"
            value={formData.start_date}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="end_date"
            value={formData.end_date}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="days_taken"
            value={formData.days_taken}
            onChange={handleInputChange}
            placeholder="Zile luate"
            min="1"
            required
          />
          <select name="type" value={formData.type} onChange={handleInputChange}>
            <option value="paid">Plătit</option>
            <option value="unpaid">Neplătit</option>
          </select>
          <input
            type="text"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            placeholder="Motiv"
            required
          />
          <button type="submit">Salvează concediu</button>
        </form>
      )}

      {vacations.length === 0 ? (
        <p>Nu există date despre concedii.</p>
      ) : (
        vacations.map((emp) => (
          <div key={emp.id} className="vacation-card">
            <h3>
              {emp.first_name} {emp.last_name}
            </h3>
            <p>Total zile: {emp.vacation.total_days}</p>
            <p>Zile luate: {emp.vacation.days_taken}</p>
            <p>Zile rămase: {emp.vacation.remaining_days}</p>

            <h4>Istoric Concedii:</h4>
            <ul>
              {emp.vacation.vacation_history.map((v, idx) => (
                <li key={idx}>
                  {v.start_date} - {v.end_date} ({v.days_taken} zile, {v.type}) ➝ {v.reason}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default Concedii;
