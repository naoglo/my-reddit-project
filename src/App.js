import logo from './logo.svg';
import './App.css';
import React from 'react';
import SearchBar from './Components/SearchBar';
import NewsStories from './Components/NewsStories';
import SideBar from './Components/SideBar';

function App() {
  
  return (
    
      <div>
        <h1>
        My Reddit App
        <SearchBar/>
        </h1>
        <NewsStories/>
        <SideBar/>
      </div>
    
  );
}

export default App;
