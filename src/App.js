import React, { useState } from "react";
import SongCards from "./components/SongCards";
import Song from "./components/SongsDB";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredSongs = Song.filter((song) =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="container mx-auto p-5 bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')" }}
    >
      <div className="w-2/4 mx-auto">
        <input
          className="p-2 rounded-md w-full"
          type="text"
          placeholder="Search Songs"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <SongCards Song={filteredSongs} />
    </div>
  );
}

export default App;
