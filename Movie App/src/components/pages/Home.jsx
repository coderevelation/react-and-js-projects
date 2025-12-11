// will be our homepage that will display movies

import React, {useState, useEffect} from 'react'
import MovieCard from '../MovieCard'
import '../../css/Home.css'
import { searchMovies, getPopularMovies } from '../../services/api.js'
// an array to contain our movies
// we  will render the movies dynamically
// we will display a moviecard for every movie

function Home() {
  // a state to store what the user types in the search input
  // so that we can use it later
  const [searchQuery, setSearchQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    // when the component loads, we want to fetch popular movies
    const loadPopularMovies = async () => {
      try {
        const popularMovies =  await getPopularMovies()
        setMovies(popularMovies)
      } catch (err) {
        console.error(err)
        setError('Failed to load popular movies')
      }
      finally {
        setLoading(false)
      }
    }
    loadPopularMovies()
  }, [])


  const handleSearch = async (e) =>  {
    // the searchbox clears after search, we will use e.preventDefault() to stop it
    e.preventDefault()
    if (!searchQuery.trim()) return 
    // if the search query is empty, do nothing
    if (loading) return
    // if we are already loading, do nothing

    setLoading(true)
    try{
      const searchResults =  await searchMovies(searchQuery)
      setMovies(searchResults)
      setError(null)
    } catch (err) {
      console.error(err)
      setError('Failed to search movies')
    } finally {
      setLoading(false)
    }

    setSearchQuery('')
  }


  return (
    <div className='home'>

    {/* a search form to search for movies */}
    <form onSubmit={handleSearch} className='search-form'>
      <input type="text"
      placeholder='Search for movies' 
      className='search-input'
      value={searchQuery}
      // the value of the input is linked to the state(searchQuery)
      // since the current state is '', the input will be empty even if we type something in it
      onChange={(e) => setSearchQuery(e.target.value)}
      // when the user types in the input, we update the state with what the user typed
      />
      <button type='submit' className='search-btn'>Search</button> 
    </form>


    {error && <p className='error-message'>{error}</p>}

    {loading ? (
      <p className='loading'>Loading movies...</p>
    ) : (
      <div className="movies-grid">
        {movies.map(movie => 
          <MovieCard movie={movie} key={movie.id} />
        )}
      </div>
    )}
    </div>
  )
}

export default Home
