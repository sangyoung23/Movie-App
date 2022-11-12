import React, { useEffect } from "react";

const SearchBar = ({ search, handleSearch }) => {
  useEffect(() => {
    console.log("rerender");
  });
  return (
    <div className="Search">
      <input
        placeholder="Search here"
        type="text"
        value={search}
        onChange={handleSearch}
      ></input>
    </div>
  );
};

export default React.memo(SearchBar);
