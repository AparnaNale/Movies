import React from 'react'
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material'
import movieStore from '../stores/MovieStore';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';


interface Movie {
  Title: string;
  imdbID: string;
  Poster: string;
  Year: string;
}

interface MovieCardProps {
  movie: Movie;
  onClickHandler: () => void;
  buttonLabel: string;
}
const MovieCard: React.FC<MovieCardProps> = ({ movie, onClickHandler, buttonLabel }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 3, border: '1px solid orange' }}>
      <CardMedia
        component="img"
        alt={movie.Title}
        height="340"
        image={movie.Poster}
      />
      <CardContent sx={{ backgroundColor: "grey.100" }}>
        <Typography
          variant="h5"
          noWrap sx={{ maxWidth: "100%", justifyContent: 'space-between', alignItems: 'center', display: 'flex', fontSize: "15px" }}
          fontWeight='bold'
          data-cy='movie-title'
        >
          {movie.Title}
          {movieStore.fav.some((m) => m.imdbID === movie.imdbID)
            ? <FavoriteIcon color='error' />
            : <FavoriteBorderOutlinedIcon />}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          data-cy='movie-year'>
          Published in {movie.Year}
        </Typography>
        <Button
          variant="contained"
          color={movieStore.fav.some((m) => m.imdbID === movie.imdbID)
            ? "secondary" : "primary"}
          size='small'
          onClick={onClickHandler}
          data-cy='add-to-fav'
        >
          {buttonLabel}
        </Button>
      </CardContent>
    </Card>
  )
}

export default MovieCard
