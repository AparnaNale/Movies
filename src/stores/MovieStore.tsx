import { makeAutoObservable } from "mobx";

//each storing Movie objects that represent details like title, IMDb ID, poster, and year."

interface Movie {
  title: string;
  imdbID: string;
  Poster: string;
  Year: string;
}


class MovieStore {
  movies: Movie[] = [];   //array to store the list of movies.
  fav: Movie[] = [];    //array to store the list of favorite movies.
  search: string = 'Don';  //string to store the current search term. Default is 'Don'.
  name: string = "";    ///string to store a name, presumably related to the user or the movie list.
  error: string | null


  constructor() {
    makeAutoObservable(this)//This MobX function makes the class properties observable, MobX will track changes and automatically update other observers when changes occur.
    this.error = null
  }

  //  setMovies, setFav, setSearch, setName: "These methods update respective properties (movies, fav, search, name) with new values. For example, setMovies updates the list of movies, while setSearch manages the current search term."

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

  //addFavorite and removeFavorite: "These methods handle adding and removing movies from the favorites list (fav). When adding a favorite, it removes the movie from the main movies list to prevent duplicates. Conversely, removing a favorite restores the movie to the main list."

  addFavorite(movie: Movie) {
    this.fav.push(movie)
    // this.movies = this.movies.filter(m => m.imdbID !== movie.imdbID);
  }

  removeFavourite(movie: Movie) {
    this.movies.push(movie);
    this.fav = this.fav.filter(f => f.imdbID !== movie.imdbID);
  }
}
const movieStore = new MovieStore()   //Creates an instance of the MovieStore class.
export default movieStore  //Exports the movieStore instance so it can be imported and used in other parts of the application.

