import React, {useState} from 'react'

function Search({movies}) {

    // console.log('Search List: ', movies)
    const [search, setSearch] = useState('')
    const [filteredMovies, setFilteredMovies] = useState([])

    const searchHandler = e => {
        const searchValue = e.target.value
        setSearch(searchValue)
        console.log(searchValue)

        if(searchValue.length >= 2){
            const filtered = movies.filter(movie => movie.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            setFilteredMovies(filtered)
        }else{
            setFilteredMovies([])
        }
        console.log('Filtered Movies: ', filteredMovies)
    }

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input
          onChange={searchHandler}
          value={search}
        type='text'
        placeholder='Search for movie by name' 
        className='w-75 py-2'
        data-testid='search'
      />
        <ul>
            {filteredMovies.map(movie =>
                <li key={movie.id}>{movie.name}</li>)}
        </ul>
    </section>
  )
}

export default Search
