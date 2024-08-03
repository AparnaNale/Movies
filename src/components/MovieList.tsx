import React from 'react'
import movieStore from '../stores/MovieStore'
import { observer } from 'mobx-react-lite'
import { Grid, Paper } from '@mui/material'
import MovieCard from './MovieCard'

const MovieList:React.FC = () => {

const{movies}=movieStore;

  return (
    <Paper elevation={3}>
    <Grid container >
        {movies.map((movie)=>(
           <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
               <MovieCard 
                onClickHandler={()=>movieStore.addFavorite(movie)}
                movie={movie}
                buttonLabel="Add To Favorite"/>
           </Grid>
        ))}
    </Grid>
    </Paper>
  )
}

export default observer( MovieList)
