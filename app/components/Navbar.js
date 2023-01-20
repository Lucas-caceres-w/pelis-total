"use client";
import Link from "next/link";
import Image from "next/image";
import image from "../../images/logo.png";
import { useEffect, useRef, useState } from "react";

function Navbar() {

  return (
    <nav className="nav">
      <Link href={"/"}>
        <Image alt="logo" width={50} height={50} src={image} />
      </Link>
      <ul>
        <Link className="enlace" href={"/"}>
          <li>Home</li>
        </Link>
        <Link className="enlace" href={"/peliculas"}>
          <li>Peliculas</li>
        </Link>
        <Link className="enlace" href={"/series"}>
          <li>Series</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
