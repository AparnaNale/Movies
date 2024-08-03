import React from 'react'
import { Card,CardMedia,CardContent,Typography,Button } from '@mui/material'


interface Movie{
    title:string;
    imdbID:string;
    Poster:string;
    Year:string;
  }

interface MovieCardProps{
    movie:Movie;
    onClickHandler:()=>void;
    buttonLabel:string;
}
const MovieCard:React.FC<MovieCardProps> = ({movie,onClickHandler,buttonLabel}) => {

  return (
    <>
    <Card sx={{ maxWidth: 345, margin:3 }}>
    <CardMedia
      component="img"
      alt={movie.title}
      height="340"
      image={movie.Poster}
    />
    <CardContent>
      <Typography  variant="h5" component="div">
        {movie.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {movie.Year}
      </Typography>
      <Button variant="contained" color="primary" onClick={onClickHandler} >
        {buttonLabel}
      </Button>
    </CardContent>
  </Card></>
  )
}

export default MovieCard
