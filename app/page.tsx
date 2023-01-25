import Film from './components/film'
import FetchPelis from './components/call'
import CarouselBoostrap from './components/carousel'
import React from 'react'

async function Index() {
  const data = await FetchPelis('tv')
  const dataMovie = await FetchPelis('movie')

  return (
    <>
      <CarouselBoostrap />
      <h2>Lo ultimo!</h2>
      <h4>Series de Tv</h4>
      <article className="populares">
        {data.results.slice(0, 4).map((post) => {
          return (
            <Film
              key={post.id}
              id={post.id}
              type={'tv'}
              image={post.backdrop_path || post.poster_path}
              name={post.title || post.name}
              valor={post.vote_average}
            />
          )
        })}
      </article>
      <h4>Ultimas peliculas</h4>
      <article className="populares">
        {dataMovie.results.slice(0, 4).map((post) => {
          return (
            <Film
              key={post.id}
              type={'movie'}
              id={post.id}
              image={post.backdrop_path || post.poster_path}
              name={post.name || post.title}
              valor={post.vote_average}
            />
          )
        })}
      </article>
    </>
  )
}

export default Index
