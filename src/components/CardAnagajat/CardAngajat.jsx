function CardAngajat({ angajat, deleteEmployee }) {
  return (
    <div className="card">
      <h3 className="card-title">{angajat.first_name}</h3>
      <p className="card-text">Funcție: {angajat.position}</p>
      <p className="card-text">Departament: {angajat.department}</p>
      <button onClick={() => deleteEmployee(angajat.id)}>Șterge</button>
    </div>
  );
}

export default CardAngajat;
