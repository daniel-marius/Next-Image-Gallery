import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

export default axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: API_KEY
  }
});
