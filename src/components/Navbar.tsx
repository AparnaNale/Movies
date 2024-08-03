import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import movieStore from '../stores/MovieStore';
import {  TextField, Button } from '@mui/material';

const Navbar: React.FC = observer(() => {
  
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=582de5f4&s=${movieStore.search}`)
      .then(res => res.json())
      .then(data => {
        if (data.Search) {
          movieStore.setMovies(data.Search);
        }
      });
  }, [movieStore.search]);

  const clickHandler = (e: React.FormEvent) => {
    e.preventDefault();
    movieStore.setSearch(movieStore.name);
  };

  return (
    
        <form onSubmit={clickHandler} style={{ display: 'flex', flexGrow: 1 ,padding:10}}>
          <TextField
            variant="filled"
            value={movieStore.name}
            onChange={(e) => movieStore.setName(e.target.value)}
            placeholder="Search"
            style={{ marginRight: '8px', flexGrow: 1 }}
          />
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
        </form>
    
  );
});

export default Navbar;
