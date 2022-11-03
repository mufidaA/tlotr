import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Book from './pages/book';
import Character from './pages/character';


const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/character' element={<Character/>} />
        <Route path='/book' element={<Book/>} />
      </Routes>
    </Router>

  );
}

export default App;