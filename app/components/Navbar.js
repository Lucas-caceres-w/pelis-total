import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <ul>
        <Link href={'/'}>
          <li>Home</li>
        </Link>
        <Link href={'/peliculas'}>
          <li>Peliculas</li>
        </Link>
        <Link href={'/mas'}>
          <li>Mas</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
