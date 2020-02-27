import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const initialItem = {
  id: '',
  title: '',
  director: '',
  metascore: '',
  stars: []
};

const UpdateForm = props => {
  const [movie, setMovie] = useState(initialItem);
  const { id } = useParams();

  useEffect(() => {
    const itemToUpdate = props.items.find(thing => `${thing.id}` === id);

    if (itemToUpdate) {
      setMovie(itemToUpdate);
    }
  }, [props.items, id]);

  const changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    if (ev.target.name === 'price') {
      value = parseInt(value, 10);
    }

    setMovie({
      ...movie,
      [ev.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // make a PUT request to edit the item
    axios
      .put(`http://localhost:5000/movies/${id}`, movie)
      .then(res => {
        // res.data is the FULL array with the updated item
        // That's not always the case. Sometimes you need to build your
        // own updated array
        props.setMovie(res.data);
        props.history.push(`/movies/${id}`);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Update Item</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={changeHandler}
          placeholder="Title"
          value={movie.title}
        />
        <div className="baseline" />

        <input
          type="text"
          name="director"
          onChange={changeHandler}
          placeholder="Director"
          value={movie.director}
        />
        <div className="baseline" />

        <input
          type="text"
          name="metascore"
          onChange={changeHandler}
          placeholder="Metascore"
          value={movie.metascore}
        />
        <div className="baseline" />

        <input
          type="text"
          name="stars"
          onChange={changeHandler}
          placeholder="Stars"
          value={movie.stars}
        />

        <div className="baseline" />

        <button className="md-button form-button">Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;