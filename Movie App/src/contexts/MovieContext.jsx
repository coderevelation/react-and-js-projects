// a state manager for our favourite movies
import React, {createContext, useState, useContext, useEffect, } from 'react'


export const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favourites, setFavourites] = useState([])
    
    useEffect(() => {
        const storedFavourites = localStorage.getItem('favourites')
        if (storedFavourites) {
            setFavourites(JSON.parse(storedFavourites))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites))
    }, [favourites])

    const addToFavourites = (movie) => {
        setFavourites(prev => [...prev, movie])
    }

    const removeFromFavourites = (movieId) => {
        setFavourites(prev => prev.filter(movie => movie.id !== movieId))
    }
    
    const isFavourite = (movieId) => {
        return favourites.some(movie => movie.id === movieId)
    }


    const value = {
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite
    }
    
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}