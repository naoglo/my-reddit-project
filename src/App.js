import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './Components/SearchBar';
import NewsStories from './Components/NewsStories';
import SideBar from './Components/SideBar';
import Footer from './Components/Footer';




function App() {
  
  return (
    
      <div class='container'>
        
        <SearchBar/>
        <NewsStories/>
        <SideBar/>
        <Footer />
      </div>
    
  );
}

export default App;
