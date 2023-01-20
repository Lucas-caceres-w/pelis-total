"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FetchOne } from "./call";
import MyVerticallyCenteredModal from "./modal";

function Film(props) {
  const [modalShow, setModalShow] = useState(false);
  const [film, setFilm] = useState({});

  const one = () => {
    if (props.valor < 3) {
      return "⭐";
    } else if (props.valor < 5) {
      return "⭐⭐";
    } else if (props.valor < 7) {
      return "⭐⭐⭐";
    } else if (props.valor < 9) {
      return "⭐⭐⭐⭐";
    } else if (props.valor >= 9) {
      return "⭐⭐⭐⭐⭐";
    }
  };

  const Title = async () => {
    const Titulo = await FetchOne(props.type, props.id);
    setModalShow(true);
    setFilm(Titulo);
  };
  //console.log(film);

  return (
    <section className="conteiner-card">
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        titulo={film.name || film.title}
        popularidad={film.popularity}
        img={film.poster_path}
        original={film.original_title || film.original_name}
        img2={film.backdrop_path}
        link={film.homepage}
        votos={film.vote_average}
        overview={film.overview || "No tiene"}
        idioma={film.original_language}
      />
      <div
        className="card-film"
        onClick={() => {
          Title();
        }}
      >
        <Image
          alt="portada"
          className="image"
          loading="lazy"
          fill
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${props.image}`}
        />
      </div>
      <h3 className="title-film">{props.name}</h3>
      <p>
        Valoracion : {props.valor} <br />
        {one()}
      </p>
    </section>
  );
}

export default Film;
