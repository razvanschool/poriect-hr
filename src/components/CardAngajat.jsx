import "./CardAngajat.css";


function CardAngajat({ angajat, deleteEmployee }) {
  return (
    <div className="card">
      <h3 className="card-title">{angajat.firstName} {angajat.lastName}</h3>
      <p className="card-text">Funcție: {angajat.role}</p>
      <p className="card-text">Departament: {angajat.department}</p>
      <button onClick={() => deleteEmployee(angajat.id)}>Șterge</button>
    </div>
  );
}

export default CardAngajat;
