import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar";
import NewsStories from "./Components/NewsStories";
import SideBar from "./Components/SideBar";
import Footer from "./Components/Footer";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("business");
  return (
    <div class="container">
      <SearchBar search={search} setSearch={setSearch} />
      <NewsStories search={search} category={category} />
      <SideBar setCategory={setCategory} />
      <Footer />
    </div>
  );
}

export default App;
