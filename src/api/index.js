import axios from "axios";
const KEY = process.env.REACT_APP_KEY;
const URL_BASE = "https://api.themoviedb.org/3";
const LANGUAGE = "language=es-MX";
const REGION = "&region=AR";

const getSimilar = async (type, id) => {
  try {
    const url = `${URL_BASE}/${type}/${id}/similar?api_key=${KEY}&${LANGUAGE}`;
    const resp = await axios.get(url);
    return resp.data;
  } catch (err) {
    return false;
  }
};
const querySearch = async (query) => {
  try {
    const resp = await axios.get(
      `${URL_BASE}/search/multi?api_key=${KEY}&query=${query}&${LANGUAGE}`
    );
    return resp.data;
  } catch (err) {
    return false;
  }
};
const queryMoviePopular = async () => {
  try {
    const url = `${URL_BASE}/movie/popular?api_key=${KEY}&${LANGUAGE}${REGION}`;
    const resp = await axios.get(url);
    return resp.data;
  } catch (err) {
    return false;
  }
};
const queryTvPopular = async () => {
  try {
    const url = `${URL_BASE}/tv/popular?api_key=${KEY}&${LANGUAGE}${REGION}`;
    const resp = await axios.get(url);
    return resp.data;
  } catch (err) {
    return false;
  }
};
const getDatailMovie = async (id) => {
  try {
    const url = `${URL_BASE}/movie/${id}?api_key=${KEY}&${LANGUAGE}${REGION}`;
    const resp = await axios.get(url);
    return resp.data;
  } catch (err) {
    return false;
  }
};
const getDatailTv = async (id) => {
  try {
    const url = `${URL_BASE}/tv/${id}?api_key=${KEY}&${LANGUAGE}${REGION}`;
    const resp = await axios.get(url);
    return resp.data;
  } catch (err) {
    return false;
  }
};
const GetWatchProvidersMovie = async (id) => {
  try {
    const url = `${URL_BASE}/movie/${id}/watch/providers?api_key=${KEY}`;
    const resp = await axios.get(url);
    return resp.data;
  } catch (err) {
    return false;
  }
};
const GetWatchProvidersTv = async (id) => {
  try {
    const url = `${URL_BASE}/tv/${id}/watch/providers?api_key=${KEY}`;
    const resp = await axios.get(url);
    return resp.data;
  } catch (err) {
    return false;
  }
};
const getCastMovie = async (id) => {
  try {
    const url = `${URL_BASE}/movie/${id}/credits?api_key=${KEY}`;
    const resp = await axios.get(url);
    return resp.data;
  } catch (err) {
    return false;
  }
};
const getCastTv = async (id) => {
  try {
    const url = `${URL_BASE}/tv/${id}/aggregate_credits?api_key=${KEY}`;
    const resp = await axios.get(url);
    return resp.data;
  } catch (err) {
    return false;
  }
};
const getTrending = async (type, time) => {
  try {
    const url = `${URL_BASE}/trending/${type}/${time}?api_key=${KEY}`;
    const resp = await axios.get(url);
    return resp.data;
  } catch {
    return false;
  }
};
const discoverMovie = async () => {
  try {
    const url = `${URL_BASE}/discover/movie?api_key=${KEY}&${LANGUAGE}&${REGION}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=7`;
    const resp = await axios.get(url);
    return resp.data;
  } catch {
    return false;
  }
};
const getPerson = async (personId) => {
  try {
    const url = `${URL_BASE}/person/${personId}?api_key=${KEY}&${LANGUAGE}`;
    const resp = await axios.get(url);
    return resp.data;
  } catch {
    return false;
  }
};
const getPersonCredits = async (personId) => {
  try {
    const url = `${URL_BASE}/person/${personId}/combined_credits?api_key=${KEY}&${LANGUAGE}`;
    const resp = await axios.get(url);
    return resp.data;
  } catch {
    return false;
  }
};
const getVideo = async (type, id) => {
  try {
    const url = `${URL_BASE}/${type}/${id}/videos?api_key=${KEY}&${LANGUAGE}-MX`;
    const resp = await axios.get(url);
    return resp.data;
  } catch (err) {
    return false;
  }
};

const getReview = async (type, review_id) => {
  try {
    const url = `${URL_BASE}/${type}/${review_id}/reviews?api_key=${KEY}&${LANGUAGE}`;
    const resp = await axios.get(url);
    return resp.data;
  } catch (err) {
    return false;
  }
};
export default {
  getReview,
  discoverMovie,
  querySearch,
  queryMoviePopular,
  queryTvPopular,
  getDatailMovie,
  getDatailTv,
  GetWatchProvidersMovie,
  GetWatchProvidersTv,
  getCastMovie,
  getCastTv,
  getTrending,
  getPerson,
  getPersonCredits,
  getVideo,
  getSimilar,
};
