const API_KEY = "e7963ffcaf386bbf96275dc8894e6152"
const BASE_URL = "https://api.themoviedb.org/3"
// request will be sent to the URL

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    const data = await response.json()
    return data.results
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
    const data = await response.json()
    return data.results
}