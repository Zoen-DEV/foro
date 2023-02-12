import Navbar from "@/components/navbar";
import Image from "next/image";
import hands from "../../public/hands.png";
import arquitectura from "../../public/arquitectura.png";
import programacion from "../../public/programacion.png";
import peliculas from "../../public/peliculas.png";
import series from "../../public/series.png";
import anime from "../../public/anime.png";
import escritura from "../../public/escritura.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="Home">
        <header>
          <Image src={hands} className="image" alt="banner. manos y texto" />
        </header>
        <Link href="#categories" class="mouse"></Link>
        <section id="categories">
          <h1>Categorias</h1>
          <div className="cards_container">
            <Link href="/arquitectura" className="category">
              <span>ARQUITECTURA</span>
              <Image src={arquitectura} className="image" />
            </Link>
            <Link href="/programacion" className="category">
              <span>PROGRAMACIÓN</span>
              <Image src={programacion} className="image" />
            </Link>
            <Link href="/peliculas" className="category">
              <span>PELICULAS</span>
              <Image src={peliculas} className="image" />
            </Link>
            <Link href="/series" className="category">
              <span>SERIES</span>
              <Image src={series} className="image" />
            </Link>
            <Link href="/anime" className="category">
              <span>ANIME</span>
              <Image src={anime} className="image" />
            </Link>
            <Link href="/escritura" className="category">
              <span>ESCRITURA</span>
              <Image src={escritura} className="image" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
