import axios from 'axios'
const KEY = '2efd2929da5c71965ff2ae70228e1720'
const URL_BASE = 'https://api.themoviedb.org/3'
const LANGUAGE = 'language=es'
const REGION = '&region=AR'

const querySearch = async (query) => {
  try {
    const resp = await axios.get(`${URL_BASE}/search/multi?api_key=${KEY}&query=${query}&${LANGUAGE}`)
    return resp.data
  } catch (err) {
    return false
  }
}
const queryMoviePopular = async () => {
  try {
    const url = `${URL_BASE}/movie/popular?api_key=${KEY}&${LANGUAGE}${REGION}`
    const resp = await axios.get(url)
    return resp.data
  } catch (err) {
    return false
  }
}
const queryTvPopular = async () => {
  try {
    const url = `${URL_BASE}/tv/popular?api_key=${KEY}&${LANGUAGE}${REGION}`
    const resp = await axios.get(url)
    return resp.data
  } catch (err) {
    return false
  }
}
const getDatailMovie = async (id) => {
  try {
    const url = `${URL_BASE}/movie/${id}?api_key=${KEY}&${LANGUAGE}${REGION}`
    const resp = await axios.get(url)
    return resp.data
  } catch (err) {
    return false
  }
}
const getDatailTv = async (id) => {
  try {
    const url = `${URL_BASE}/tv/${id}?api_key=${KEY}&${LANGUAGE}${REGION}`
    const resp = await axios.get(url)
    return resp.data
  } catch (err) {
    return false
  }
}
const GetWatchProvidersMovie = async (id) => {
  try {
    const url = `${URL_BASE}/movie/${id}/watch/providers?api_key=${KEY}`
    const resp = await axios.get(url)
    return resp.data
  } catch (err) {
    return false
  }
}
const GetWatchProvidersTv = async (id) => {
  try {
    const url = `${URL_BASE}/tv/${id}/watch/providers?api_key=${KEY}`
    const resp = await axios.get(url)
    return resp.data
  } catch (err) {
    return false
  }
}
const getCastMovie = async (id) => {
  try {
    const url = `${URL_BASE}/movie/${id}/credits?api_key=${KEY}`
    const resp = await axios.get(url)
    return resp.data
  } catch (err) {
    return false
  }
}
const getCastTv = async (id) => {
  try {
    const url = `${URL_BASE}/tv/${id}/aggregate_credits?api_key=${KEY}`
    const resp = await axios.get(url)
    return resp.data
  } catch (err) {
    return false
  }
}
const getTrending = async (type, time) => {
  try {
    const url = `${URL_BASE}/trending/${type}/${time}?api_key=${KEY}`
    const resp = await axios.get(url)
    return resp.data
  } catch {
    return false
  }
}
const discoverMovie = async () => {
  try {
    const url = `${URL_BASE}/discover/movie?api_key=${KEY}&${LANGUAGE}&${REGION}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=7`
    const resp = await axios.get(url)
    return resp.data
  } catch {
    return false
  }
}
const getPerson = async (personId) => {
  try {
    const url = `${URL_BASE}/person/${personId}?api_key=${KEY}&${LANGUAGE}`
    const resp = await axios.get(url)
    return resp.data
  } catch {
    return false
  }
}
const getPersonCredits = async (personId) => {
  try {
    const url = `${URL_BASE}/person/${personId}/combined_credits?api_key=${KEY}&${LANGUAGE}`
    const resp = await axios.get(url)
    return resp.data
  } catch {
    return false
  }
}
export default {
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
  getPersonCredits
}
