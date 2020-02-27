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

    const changeHandler = e => {
        setMovieData()
    }

    handleSubmit = e => {
        e.preventDefault
    }

    return (

        <div>
            <form>
                <input 
                type='text'
                name='title'
                value={setMovieData.title}
                placeholder='Title' 
                onChange={handleSubmit}
                />

                <input 
                type='text'
                name='direcctor'
                value={setMovieData.director}
                placeholder='Director' 
                onChange={handleSubmit}
                />

                <input 
                type='text'
                name='metascore'
                value={setMovieData.metascore}
                placeholder='Metascore' 
                onChange={handleSubmit}
                />

                <input 
                type='text'
                name='stars'
                value={setMovieData.stars}
                placeholder='Stars' 
                onChange={handleSubmit}
                />
                <button value={handleSubmit}>Sumbit</button>
            </form>
        </div>
    )
}

export default MovieForm;