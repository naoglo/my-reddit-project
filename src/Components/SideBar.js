import React from "react";

const SideBar = ({ setCategory }) => {
  const styles = {
    sideBar: {
      gridArea: "nav",
      backgroundColor: "tomato",
    },
  };

  const categoryList = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <div className="sideBar" style={styles.sideBar}>
      <h3> SideBar placeholder</h3>
      <ul style={{ textAlign: "left", cursor: "pointer", margin: "0" }}>
        {categoryList.map((item, index) => {
          return (
            <li
              onClick={(e) => {
                setCategory(e.target.textContent);
              }}
              style={{
                listStyle: "none",
                padding: "5px",
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SideBar;
