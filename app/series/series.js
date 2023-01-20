import FetchPelis from "../components/call";
import Film from "../components/film";

async function Series() {
  const data = await FetchPelis("tv");
  //console.log(data);

  return (
    <article className="galeria">
      {data.results.map((post) => {
        return (
          <Film
            key={post.id}
            id={post.id}
            type={"tv"}
            image={post.backdrop_path || post.poster_path}
            name={post.name || post.title}
            valor={post.vote_average}
          />
        );
      })}
    </article>
  );
}

export default Series;
