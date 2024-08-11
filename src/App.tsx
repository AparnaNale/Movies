import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppBar, Toolbar, Container } from "@mui/material";
import MovieList from "./components/MovieList";
import FavoriteList from "./components/FavoriteList";
import Navbar from "./components/Navbar";


const App: React.FC = () => {


  return (
    <Router>
      <AppBar position="static" color="warning">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Navbar />
        </Toolbar>
      </AppBar>

      <Container sx={{ paddingY: 2 }} >
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/favorites" element={<FavoriteList />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
