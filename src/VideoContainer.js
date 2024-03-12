// VideoContainer.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Video from './Video';

const VideoContainer = ({ apiKey, channelId }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&key=${apiKey}`
        );

        console.log(response.data)
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [apiKey, channelId]);

  const playVideo = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div className="video-container">
      <h2>Videos</h2>
      <div className="videos">
        {videos.map((video) => (
          <Video
            key={video.id.videoId}
            videoId={video.id.videoId}
            title={video.snippet.title}
            onClick={playVideo}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
