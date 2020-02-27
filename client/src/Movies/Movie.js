import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';
import MovieCard from './MovieCard';

function Movie(props,{ addToSavedList }) {
  const [movie, setMovie] = useState(null);
  const match = useRouteMatch();

  const fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  console.log(movie);

  useEffect(() => {
    fetchMovie(match.params.id);
  }, [match.params.id]);

  const handleUpdate = e => {
    e.preventDefault();
    props.history.push(`/update-movie/${movie.id}`);
  }

  const handleDelete = e => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/api/movies/${movie.id}`)
    .then( res => {
      props.getMovieList()
      props.history.push('/')
    })
    .catch ( err => console.log('handleDelete error: ', err))

  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className='save-wrapper'>
      <MovieCard movie={movie} />

      <div className='save-button' onClick={saveMovie}>
        Save
      </div>
      <div className='edit-button' onClick={handleUpdate}>
        Edit
      </div>
      <div className='delete-button' onClick={handleDelete}>
        Delete
      </div>
    </div>
  );
}

export default Movie;
