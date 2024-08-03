import React from 'react';
import { observer } from 'mobx-react-lite';
import movieStore from '../stores/MovieStore';
import MovieCard from './MovieCard';
import { Grid, Paper, Typography} from '@mui/material';

const FavoriteList: React.FC = observer(() => {
  const { fav } = movieStore;

  return (
    <>
  
      {/* <Typography variant="h4" gutterBottom>
        Favorite Movies
      </Typography> */}
      <Grid container spacing={3} >
        {
        fav.length > 0 
        ? 
        (
          fav.map((movie) => (
            <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
              <MovieCard 
                movie={movie} 
                onClickHandler={() => movieStore.removeFavourite(movie)} 
                buttonLabel="Remove from Favourite" 
              />
            </Grid>
          ))
        )
        : 
         (
          <Typography variant='h6'sx={{margin:3}}>No movies in favorite list.</Typography>
        )
        }
      </Grid>
    
    </>
  );
});

export default FavoriteList;
