import React from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src="http://localhost:3000/read-me/vid/hutao.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Konten atau elemen lainnya */}
    </div>
  );
}

export default VideoBackground;
