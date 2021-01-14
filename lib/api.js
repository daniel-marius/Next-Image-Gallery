import axios from "axios";

import endpoint from "./endpoint";

// Pexels API endpoints
// /curated  to receive real-time photos curated by the Pexels team.
// /search to search for photos based on a query.
// /photos/:id to get a single photo from its id.

export const getCuratedPhotos = async () => {
  const res = await endpoint.get(`/curated?page=11&per_page=18`);
  return res.data;
};

export const getQueryPhotos = async (query) => {
  const res = await endpoint.get(`/search?query=${query}`);
  return res.data;
};

export const getPhotoById = async (id) => {
  const res = await endpoint.get(`/photos/${id}`);
  return res.data;
};
