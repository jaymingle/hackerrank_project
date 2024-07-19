import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'
import 'h8k-components'

import { Movieform, Movieslist, Search } from './components'

const title = 'Favorite Movie Directory'

const DATA = [
  {
    id: 1,
    name: 'The Godfather',
    rating: 95,
    duration: '3h'
  },
  {
    id: 2,
    name: 'Friends',
    rating: 90,
    duration: '16h'
  },
  {
    id: 3,
    name: 'Tom & Jerry',
    rating: 78,
    duration: '25m'
  }
]

function App() {

  const [movies, setMovies] = useState(DATA)
  const [filteredMovie, setFilteredMovie] = useState([])
  const [searchConducted, setSearchConducted] = useState(false)

  const searchFilteredMovies = theFilteredMovie => {
    setFilteredMovie(theFilteredMovie)
    console.log('From the App.js', theFilteredMovie)
    setSearchConducted(true)
  }

  // console.log('Initial Movies', movies)

  const addMovie = movie => {
    // console.log('App',movie)
    setMovies(movies => {
      return [...movies, {id: uuidv4(), name: movie.movie, rating: movie.rating, duration: movie.duration}]
    })
    // console.log('New Movies + Added', movies)
  }

  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform addMovie={addMovie} />
        </div>
        <div className='layout-column w-30'>
          <Search movies={movies} searchFilteredMovies={searchFilteredMovies} />
          <Movieslist movies={movies} />

          <div data-testid='noResult'>
            {searchConducted && filteredMovie.length === 0 ? <h3 className='text-center'>No Results Found</h3> : filteredMovie.map(movie => <li style={{listStyleType: 'none', color: 'green'}} key={movie.id}>{movie.name}</li>)}
          </div>
        </div>
      </div> 
    </div>
  )
}

export default App;
