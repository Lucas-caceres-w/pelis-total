import Series from "./series";
import Filter from "../components/filtros";
import React from "react";

function SeriesPage() {
  return (
    <main className="main">
      <Filter />
      <section>
        <h3>Series</h3>
        {/* @ts-expect-error Server Component */}
        <Series />
      </section>
    </main>
  );
}

export default SeriesPage;