import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "../../images/logo.png";

function Footer() {
  return (
    <footer>
      <section className="footer-tags">
        <div className="image-conteiner">
          <Image alt="img" src={image} width={150} height={150} />
        </div>
        <div>
          <h3>Recursos</h3>
          <ul className="lista">
            <Link href={"/peliculas"} target="_blank">
              <li>Peliculas</li>
            </Link>
            <Link href={"series"} target="_blank">
              <li>Series</li>
            </Link>
            <li>Populares</li>
            <Link href={"https://www.themoviedb.org/"} target="_blank">
              <li>API</li>
            </Link>
          </ul>
        </div>
        <div>
          <h3>Redes</h3>
          <ul className="lista">
            <Link href={"https://github.com/Lucas-caceres-w"} target="_blank">
              <li>Github</li>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/lucasdev03/"}
              target="_blank"
            >
              <li>Linkedin</li>
            </Link>
            <Link href={"https://www.facebook.com/LucasDev03/"} target="_blank">
              <li>Facebook</li>
            </Link>
            <Link
              href={"https://www.instagram.com/lucas.dev.03/"}
              target="_blank"
            >
              <li>Intagram</li>
            </Link>
          </ul>
        </div>
      </section>
      <p>
        Desarrollado por{" "}
        <a href="https://lucasdev.com.ar" target={'_blank'} rel="noopener noreferrer">
          <b>Lucas Dev</b>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
