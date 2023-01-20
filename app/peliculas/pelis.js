import Film from "../components/film";
import FetchPelis from "../components/call";

async function Pelis() {
  const data = await FetchPelis("movie");
  //console.log(data);
  return (
    <article className="galeria">
      {data.results.map((post) => {
        return (
          <Film
            key={post.id}
            id={post.id}
            type={"movie"}
            video={'video'}
            image={post.poster_path || post.backdrop_path}
            name={post.name || post.title}
            valor={post.vote_average}
          />
        );
      })}
    </article>
  );
}

export default Pelis;
