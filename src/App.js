import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContentDetails from './components/ContentDetails/ContentDetails';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Search from './pages/Search/Search';
import Favorites from './pages/Favorites/Favorites';

function App() {
  return (
    <div>
      <Header />
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Trending />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
