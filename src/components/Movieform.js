import React, {useState} from 'react'

function Movieform({addMovie}) {

  const [movieName, setMovieName] = useState('')
  const [movieRating, setMovieRating] = useState(0)
  const [movieDuration, setMovieDuration] = useState('')
  const [error, setError] = useState('')


  const movieNameHandler = e => {
    setMovieName(e.target.value)
  }

  const movieRatingHandler = e => {
    setMovieRating(e.target.value)
  }

  const movieDurationHandler = e => {
    setMovieDuration(e.target.value)
  }

  const clearError = () => {
    if (error) {
      setError('');
    }
  };

  const validateDuration = duration => {
    const minutesPattern = /^(\d+)(m)$/;
    const hoursPattern = /^(\d+(\.\d+)?)h$/;

    if (minutesPattern.test(duration)) {
      return 'minutes';
    } else if (hoursPattern.test(duration)) {
      return 'hours';
    } else {
      return null;
    }
  };

  const convertMinutesToHours = minutes => {
    const hours = Math.floor(minutes / 60);
    const remainderMinutes = minutes % 60;
    return `${hours + remainderMinutes / 60} Hrs`;
  };


  const formSubmitHandler = e => {
    e.preventDefault()

    const durationType = validateDuration(movieDuration);

    if(movieName || movieRating || movieDuration) {
      console.log('Movie form',movie)
    }

    if(!movieName || !movieRating || !movieDuration) {
      setError('Fill all form fields');
      return;
    }

    if (!durationType) {
      setError('Please specify the time in hours or minutes (e.g. 2.5h or 150m)');
      return;
    }

    let durationDisplay = movieDuration;
    if (durationType === 'minutes') {
      const minutes = parseInt(movieDuration, 10);
      durationDisplay = convertMinutesToHours(minutes);
    }

    const movie = {
      movie: movieName,
      rating: movieRating,
      duration: movieDuration
    }

    addMovie(movie);

    setMovieName('')
    setMovieRating('')
    setMovieDuration('')
  }


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
                min="1"
                max="100"
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
