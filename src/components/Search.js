import React, {useState} from 'react'

function Search() {

    const [search, setSearch] = useState('')

    const searchHandler = e => {
        setSearch(e.target.value)
        console.log(search)
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
