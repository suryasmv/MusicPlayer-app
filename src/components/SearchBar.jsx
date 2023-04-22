import React from "react";


const SearchBar = () => {
  return (
    <div>
      <div className="flex items-center justify-center pt-12">
        <input
          className="flex items-center text-xl py-2 px-5 rounded-xl border-2 border-black h-12 w-2/4"
          type="text"
          placeholder="Search Here"
        />
      </div>
    </div>
  );
};

export default SearchBar;
