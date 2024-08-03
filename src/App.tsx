// import React, { useEffect } from 'react';
// import { observer } from 'mobx-react-lite';
// import movieStore from './stores/MovieStore';
// import Navbar from './components/Navbar';
// import MovieList from './components/MovieList';
// import FavoriteList from './components/FavoriteList';
// import { Container } from '@mui/material';

// const App: React.FC = observer(() => {
//   useEffect(() => {
//     fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=582de5f4&s=${movieStore.search}`)
//       .then(res => res.json())
//       .then(data => {
//         if (data.Search) {
//           movieStore.setMovies(data.Search);
//         }
//       });
//   }, [movieStore.search]);

//   return (
//     <Container>
//       <Navbar />
//       <MovieList />
//       <FavoriteList />
//     </Container>
//   );
// });

// export default App;


import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import MovieList from "./components/MovieList";
import FavoriteList from "./components/FavoriteList";
import Navbar from "./components/Navbar";
import movieStore from "./stores/MovieStore";

const App: React.FC = () => {


  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Movie App
          </Typography>
          <Navbar/>
          <Button color="inherit" component={Link} to="/">
            Movies
          </Button>
          <Button color="inherit" component={Link} to="/favorites">
            Favorites
          </Button>
        </Toolbar>
       
      </AppBar>
      
      <Container>
        <Routes>
          <Route path="/" element={<MovieList/>} />
          <Route path="/favorites" element={<FavoriteList/>} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
