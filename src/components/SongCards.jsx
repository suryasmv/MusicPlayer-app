import { useState } from "react";

function SongCards({ Song }) {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const handleSongClick = (song) => {
    setCurrentlyPlaying(song.title);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-10">
      {Song.map((song) => (
        <div
          key={song.id}
          className="bg-white rounded-md shadow-md p-4 flex flex-col justify-between cursor-pointer hover:shadow-lg hover:bg-gray-400 hover:text-white"
          onClick={() => handleSongClick(song)}
        >
          <h2 className="text-lg font-semibold">{song.title}</h2>
          <p className="text-gray-500 hover:text-white">{song.artist}</p>
          <div className="flex justify-between">
            <span className="text-sm">{song.year}</span>
            <span className="text-sm">{song.duration} seconds</span>
          </div>
        </div>
      ))}
      {currentlyPlaying && (
        <div className="absolute bottom-20 right-64 left-64  mx-auto bg-gray-400 text-white font-extrabold p-4 rounded-md">
          Now Playing: {currentlyPlaying}
        </div>
      )}
    </div>
  );
}

export default SongCards;
