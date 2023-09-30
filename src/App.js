import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar";
import NewsStories from "./Components/NewsStories";
import SideBar from "./Components/SideBar";
import Footer from "./Components/Footer";

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <p>{search}</p>
      <div class="container">
        <SearchBar search={search} setSearch={setSearch} />
        <NewsStories />
        <SideBar />
        <Footer />
      </div>
    </>
  );
}

export default App;
