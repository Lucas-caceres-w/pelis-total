import Film from '../components/film'
import FetchPelis from '../components/call'
import React from 'react'

async function Pelis() {
  const data = await FetchPelis('movie')
  //console.log(data);
  return (
    <article className="galeria">
      {data.results.map(
        (post: {
          id: number
          backdrop_path: string
          poster_path: string
          name: string
          title: string
          vote_average: number
        }) => {
          return (
            <Film
              key={post.id}
              id={post.id}
              type={'movie'}
              video={'video'}
              image={post.poster_path || post.backdrop_path}
              name={post.name || post.title}
              valor={post.vote_average}
            />
          )
        },
      )}
    </article>
  )
}

export default Pelis
