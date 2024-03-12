// PlaylistContainer.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlaylistContainer = ({ apiKey, channelId }) => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=10&key=${apiKey}`
        );
        setPlaylists(response.data.items);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };

    fetchPlaylists();
  }, [apiKey, channelId]);

  return (
    <div className="playlist-container">
      <h2>Playlists</h2>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>
            <strong>Title:</strong> {playlist.snippet.title} |{' '}
            <strong>Date Created:</strong> {playlist.snippet.publishedAt}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistContainer;
