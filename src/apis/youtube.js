import axios from "axios";

const KEY = "AIzaSyAI-J4NN3tnmPOGz24DmJMIMwhsEWLwgp0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
