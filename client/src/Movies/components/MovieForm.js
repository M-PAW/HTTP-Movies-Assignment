import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const initalState = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: [],
};

const MovieForm = props => {
    const [movieData, setMovieData] = useState(initalState);
    const { id } = useParams();

const handleChanges = e => {
    setUpdates({
        ...updateMovie,
        [e.target.name]: e.target.value
    })
}

const updateMovie = () => {
    e.preventDefault()
    Axios
        .get(`http://localhost:500/api/movies/${props.movie.id}`, update )
        .then( res => {
            console.log(res)
            props.history.push(`/update-movie/${movie.id}`)
        })
        .catch(err => { console.log(err) });
        
}

return (

    <div>
        <form>
            <input 
              type='text'
              name='title'
              value={setMovie.title}
              placeholder='Title' 
              onChange={handleSubmit}
            />

            <input 
              type='text'
              name='direcctor'
              value={setMovie.director}
              placeholder='Director' 
              onChange={handleSubmit}
            />

            <input 
              type='text'
              name='metascore'
              value={setMovie.metascore}
              placeholder='Metascore' 
              onChange={handleSubmit}
            />

            <input 
              type='text'
              name='stars'
              value={setMovie.stars}
              placeholder='Stars' 
              onChange={handleSubmit}
            />
            <button value={e.target.value}>Sumbit</button>
        </form>
    </div>
)
}

export default MovieForm;