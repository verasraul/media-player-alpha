import React, { useRef, useState } from 'react';

function MediaPlayer() {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
      <audio controls
        ref={audioElement}
        onEnded={handleEnded}
        onTimeUpdate={handleTimeUpdate}
        source src="https://www.computerhope.com/jargon/m/example.mp3"
      />
      
      {/* <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button> */}
      {/* Add a progress bar here */}
    </div>
  );
}

export default MediaPlayer;