import Filter from "../components/filtros";
import Pelis from "./pelis";

function Categories() {
  return (
    <main className="main">
      <Filter />
      <section >
        <h3>Peliculas</h3>
        <Pelis />
      </section>
    </main>
  );
}

export default Categories;
