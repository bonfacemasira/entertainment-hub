import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageContent from './components/PageContent/PageContent';
import { Route, Routes } from 'react-router-dom';
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Search from './pages/Search/Search';
import Favorites from './pages/Favorites/Favorites';
import SingleContent from './components/SingleContent/SingleContent';

function App() {
  return (
    <div className="App">
      <div><Header /></div>
      <div>
        <Footer />
        <Routes>
          <Route exact path="/" element={<Trending />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
