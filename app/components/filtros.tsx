import React from "react";

function Filter() {
  return (
    <section className="filter">
      <h3>Buscar por...</h3>
      <p>Ordenar resultados:</p>
      <select name="filtros" id="cars">
        <option value="trasnmitidas">En transmision</option>
        <option value="ultimas">Ultimas</option>
        <option value="popular">Populares</option>
      </select>
    </section>
  );
}

export default Filter;
