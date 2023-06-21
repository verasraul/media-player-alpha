import React, { useEffect, useRef, useState } from 'react';

function ApiMediaPlayer({ songId }) {
  const audioElement = useRef(null);
  const [song, setSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    async function fetchSong() {
      const response = await fetch(`/api/songs/${songId}`);
      const data = await response.json();
      setSong(data);
    }
    fetchSong();
  }, [songId]);

  useEffect(() => {
    if (song) {
      audioElement.current.src = song.url;
      audioElement.current.load();
    }
  }, [song]);

  function togglePlay() {
    if (isPlaying) {
      audioElement.current.pause();
    } else {
      audioElement.current.play();
    }
  }

  function handleEnded() {
    setIsPlaying(false);
  }

  function handleTimeUpdate() {
    // Update the progress bar here
  }

  return (
    <div>
      {song && (
        <>
          <h2>{song.title}</h2>
          <h3>{song.artist}</h3>
        </>
      )}
      <audio
        ref={audioElement}
        onEnded={handleEnded}
        onTimeUpdate={handleTimeUpdate}
      />
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      {/* Add a progress bar here */}
    </div>
  );
}


export default ApiMediaPlayer;