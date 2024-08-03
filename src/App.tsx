


import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import MovieList from "./components/MovieList";
import FavoriteList from "./components/FavoriteList";
import Navbar from "./components/Navbar";


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
