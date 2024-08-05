import React from 'react';
import { observer } from 'mobx-react-lite';
import movieStore from '../stores/MovieStore';
import MovieCard from './MovieCard';
import { Grid, Typography } from '@mui/material';

const FavoriteList: React.FC = observer(() => {
  const { fav } = movieStore;

  return (
    <>
      {fav.length > 0
        ?
        <Grid container spacing={3} >
          {fav.map((movie) => (
            <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
              <MovieCard
                movie={movie}
                onClickHandler={() => movieStore.removeFavourite(movie)}
                buttonLabel="Remove from Favourite"
              />
            </Grid>
          ))}
        </Grid>
        : <Typography variant='h5' sx={{ alignItems: 'center', display: "flex", justifyContent: "center" }}>No movies in favorite list.</Typography>
      }
    </>
  );
});

export default FavoriteList;
