import { makeAutoObservable } from "mobx";

interface Movie {
  Title: string;
  imdbID: string;
  Poster: string;
  Year: string;
}


class MovieStore {
  movies: Movie[] = [];
  fav: Movie[] = [];
  search: string = 'Don';
  name: string = "";
  error: string | null


  constructor() {
    makeAutoObservable(this)
    this.error = null
  }



  setMovies(movies: Movie[]) {
    this.movies = movies;
  }

  setError(error: string): void {
    this.error = error
  }

  setSearch(search: string) {    //manages the current search term."
    this.search = search;
  }

  setName(name: string) {   //method updates the name string with a new name.
    this.name = name;
  }

  setFav(fav: Movie[]) {  // method updates the fav array with a new array of favorite movies.
    this.fav = fav;
  }


  addFavorite(movie: Movie) {

    this.fav.push(movie)

  }

  removeFavourite(movie: Movie) {
    this.movies.push(movie);
    this.fav = this.fav.filter(f => f.imdbID !== movie.imdbID);
  }
}
const movieStore = new MovieStore()   //Creates an instance of the MovieStore class.
export default movieStore  //Exports the movieStore instance so it can be imported and used in other parts of the application.

