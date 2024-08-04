import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import movieStore from '../stores/MovieStore';
import { TextField, Button, Input } from '@mui/material';

const Navbar: React.FC = observer(() => {

  async function loadMovies() {
    try {
      await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=582de5f4&s=${movieStore.search}`)
        .then(res => res.json())
        .then(data => {
          if (data.Search) {
            movieStore.setMovies(data.Search);
          }
        });
    } catch (error) {
      movieStore.setError("API error, Cant fetch movies list")
    }
  }

  useEffect(() => {
    loadMovies()

  }, [movieStore.search]);

  const clickHandler = (e: React.FormEvent) => {
    e.preventDefault();
    movieStore.setSearch(movieStore.name);
  };

  return (

    <form onSubmit={clickHandler} style={{ display: 'flex', padding: 10 }}>
      <Input
        value={movieStore.name}
        onChange={(e) => movieStore.setName(e.target.value)}
        placeholder="Search your favorite movie"
        style={{ backgroundColor: "white", paddingLeft: "5px", marginRight: 8, width: "300px", borderRadius: '5px' }}
      />
      <Button type="submit" variant="outlined" color="inherit" size='small' sx={{ borderRadius: '5px' }}>
        Search
      </Button>
    </form>

  );
});

export default Navbar;
