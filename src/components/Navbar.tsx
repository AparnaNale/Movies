import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import movieStore from '../stores/MovieStore';
import { Button, Input, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = observer(() => {

  async function loadMovies() {
    try {
      await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=582de5f4&s=${movieStore.search}`)
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
    <>
      <Typography variant="h6" fontWeight={'bold'}>
        Movies App
      </Typography>
      <form onSubmit={clickHandler} style={{ display: 'flex', padding: 10 }}>
        <Input
          value={movieStore.name}
          onChange={(e) => movieStore.setName(e.target.value)}
          placeholder="Search your favorite movie"
          data-cy="search-movie"
          style={{ backgroundColor: "white", paddingLeft: "5px", marginRight: 8, width: "300px", borderRadius: '5px' }}
        />
        <Button type="submit" variant="outlined" color="inherit" size='small' sx={{ borderRadius: '5px' }}
          data-cy="search-click">
          Search
        </Button>
      </form>
      <Stack spacing={1} direction={'row'}>
        <Button color="inherit" variant="outlined" size="small" component={Link} to='/'
          data-cy="movies">
          Movies
        </Button>
        <Button color="inherit" variant="outlined" size="small" component={Link} to="/favorites"
          data-cy="fav">
          Favorites
        </Button>
      </Stack>
    </>
  );
});

export default Navbar;
