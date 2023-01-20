import Series from "./series";
import Filter from "../components/filtros";

function SeriesPage() {
  return (
    <main className="main">
      <Filter />
      <section>
        <h3>Series</h3>
        <Series />
      </section>
    </main>
  );
}

export default SeriesPage;
