import React from 'react'
import "../../css/Favorites.css"
import { useMovieContext } from '../../contexts/MovieContext'
import MovieCard from '../MovieCard'

function Favourites() {
const {favourites} = useMovieContext()
if (favourites) {

    return <div className="movies-grid">
      <div>
        <h2 className="fav">Favourites</h2>
            {favourites.map(movie => 
              <MovieCard movie={movie} key={movie.id} />
            )}
          </div>
      </div>
  }


  return (
    <div className='fav-empty'>
      <h2>No favourites yet</h2>
        <p>You haven't added any movies to your favourites yet.</p>
    </div>
  )
}

export default Favourites
