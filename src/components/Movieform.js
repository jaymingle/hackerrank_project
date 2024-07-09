import React, {useState} from 'react'

function Movieform() {

  const [movieName, setMovieName] = useState('')
  const [movieRating, setMovieRating] = useState(0)
  const [movieDuration, setMovieDuration] = useState('')


  const movieNameHandler = e => {
    setMovieName(e.target.value)
  }

  const movieRatingHandler = e => {
    setMovieRating(e.target.value)
  }

  const movieDurationHandler = e => {
    setMovieDuration(e.target.value)
  }

  const formSubmitHandler = e => {
    e.preventDefault()

    const movie = {
      movie: movieName,
      rating: movieRating,
      duration: movieDuration
    }

    console.log(movie)

    setMovieName('')
    setMovieRating('')
    setMovieDuration('')

  }

  console.log('MovieForm')

  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={formSubmitHandler}>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input
                onChange={movieNameHandler}
                value={movieName}
              type='text' 
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input
                onChange={movieRatingHandler}
                value={movieRating}
              type='number' 
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input
                onChange={movieDurationHandler}
                value={movieDuration}
              type='text' 
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
            />
          </div>
          {/* Use this div when time format is invalid */}
          {/* <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>  */}
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0'
              data-testid='addButton'
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

export default Movieform
