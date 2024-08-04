import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import movieStore from '../stores/MovieStore';
import { TextField, Button, Input } from '@mui/material';

const Navbar: React.FC = observer(() => {

  useEffect(() => {
    try {
      fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=582de5f4&s=${movieStore.search}`)
        .then(res => res.json())
        .then(data => {
          if (data.Search) {
            movieStore.setMovies(data.Search);
          }
        });
    } catch (error) {
      movieStore.setError("API error, Cant fetch movies list")
    }

  }, [movieStore.search]);

  const clickHandler = (e: React.FormEvent) => {
    e.preventDefault();
    movieStore.setSearch(movieStore.name);
  };

  return (

    <form onSubmit={clickHandler} style={{ display: 'flex', flexGrow: 1, padding: 10 }}>
      <Input
        value={movieStore.name}
        onChange={(e) => movieStore.setName(e.target.value)}
        placeholder="Search your favorite movie"
        style={{ marginRight: '8px', flexGrow: 1, backgroundColor: "white", paddingLeft: "5px" }}
      />
      <Button type="submit" variant="contained" color="success">
        Search
      </Button>
    </form>

  );
});

export default Navbar;
