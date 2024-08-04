


import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container, Box, Stack } from "@mui/material";
import MovieList from "./components/MovieList";
import FavoriteList from "./components/FavoriteList";
import Navbar from "./components/Navbar";


const App: React.FC = () => {


  return (
    <Router>
      <AppBar position="static" color="warning">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6">
            Movies App
          </Typography>
          <Navbar />
          <Stack spacing={1} direction={'row'}>
            <Button color="inherit" variant="outlined" size="small" component={Link} to="/">
              Movies
            </Button>
            <Button color="inherit" variant="outlined" size="small" component={Link} to="/favorites">
              Favorites
            </Button>
          </Stack>
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
