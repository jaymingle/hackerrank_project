import React, {useState} from 'react'

function Search({movies, searchFilteredMovies}) {

    const [search, setSearch] = useState('')

    const searchHandler = e => {
        const searchValue = e.target.value
        setSearch(searchValue)
        console.log(searchValue)

        if(searchValue.length >= 2){
            const filtered = movies.filter(movie => movie.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            searchFilteredMovies(filtered)
        }else{
            searchFilteredMovies([])
        }
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
    </section>
  )
}

export default Search
