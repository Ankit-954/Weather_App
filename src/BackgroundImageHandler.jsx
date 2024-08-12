// BackgroundImageHandler.js
import axios from 'axios';
import { UNSPLASH_ACCESS_KEY } from './APIConfig';

export const fetchBackgroundImage = (query, setBackgroundImage) => {
  axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query: query,
      client_id: UNSPLASH_ACCESS_KEY,
      per_page: 1,
    },
  })
  .then((response) => {
    const imageUrl = response.data.results[0]?.urls?.full || "https://cdn.pixabay.com/photo/2024/01/24/10/25/ai-generated-8529315_960_720.png";
    setBackgroundImage(`url(${imageUrl})`);
  })
  .catch((error) => {
    console.error("Error fetching image from Unsplash:", error);
    setBackgroundImage("url('https://cdn.pixabay.com/photo/2024/01/24/10/25/ai-generated-8529315_960_720.png')");
  });
};
