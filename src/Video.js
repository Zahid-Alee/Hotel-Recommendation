// Video.js
import React from 'react';

const Video = ({ videoId, title, onClick }) => {
  return (
    <div className="video" onClick={() => onClick(videoId)}>
      <h3>{title}</h3>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
