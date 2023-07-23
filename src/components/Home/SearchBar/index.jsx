import React from "react";
import "./styles.css";
import { useTheme, lightTheme, darkTheme } from "../../Common/Theme";
const SearchBar = ({ value, handleSearchKey, clearSearch, formSubmit }) => {
  const theme= useTheme();
  return (
    <div className="SBwrap">
      <form onSubmit={formSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleSearchKey}
          placeholder="Click here to Search"
        ></input>
        {value && <span onClick={clearSearch}>X</span>}
        <button>Go</button>
      </form>
    </div>
  );
};

export default SearchBar;
