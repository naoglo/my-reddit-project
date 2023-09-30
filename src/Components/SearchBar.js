import React, { useState, useEffect } from "react";
import NewsStories from "./NewsStories";

const SearchBar = ({ search, setSearch }) => {
  const styles = {
    header: {
      gridArea: "header",
      backgroundColor: "teal",
    },
  };

  return (
    <div className="header" style={styles.header}>
      <input
        type="text"
        className={styles.textbox}
        placeholder="Search.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h1>Header </h1>
    </div>
  );
};
export default SearchBar;
