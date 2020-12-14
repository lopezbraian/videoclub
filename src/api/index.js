import axios from 'axios'
const KEY = '2efd2929da5c71965ff2ae70228e1720'
const URL_BASE = 'https://api.themoviedb.org/3'
const LANGUAGE = 'language=es'
const REGION = '&region=AR'

const querySearch = async (query) => {
  try {
    const resp = await axios.get(`${URL_BASE}/search/movie?api_key=${KEY}&query=${query}&${LANGUAGE}`)
    return resp.data
  } catch (err) {
    console.log(err)
  }
}
const queryMoviePopular = async () => {
  try {
    const url = `${URL_BASE}/movie/popular?api_key=${KEY}&${LANGUAGE}${REGION}`
    const resp = await axios.get(url)
    return resp.data
  } catch (err) {
    console.log(err)
  }
}
const queryTvPopular = async () => {
  try {
    const url = `${URL_BASE}/tv/popular?api_key=${KEY}&${LANGUAGE}${REGION}`
    const resp = await axios.get(url)
    return resp.data
  } catch (err) {
    console.log(err)
  }
}
const getDatailMovie = async (id) => {
  try {
    const url = `${URL_BASE}/movie/${id}?api_key=${KEY}&${LANGUAGE}${REGION}`
    const resp = await axios.get(url)
    return resp.data
  } catch (err) {
    console.log(err)
  }
}
const getDatailTv = async (id) => {
  try {
    const url = `${URL_BASE}/tv/${id}?api_key=${KEY}&${LANGUAGE}${REGION}`
    const resp = await axios.get(url)
    return resp.data
  } catch (err) {
    console.log(err)
  }
}
const GetWatchProvidersMovie = async (id) => {
  try {
    const url = `${URL_BASE}/movie/${id}/watch/providers?api_key=${KEY}`
    const resp = await axios.get(url)
    return resp.data
  } catch (err) {
    console.log(err)
  }
}
const GetWatchProvidersTv = async (id) => {
  try {
    const url = `${URL_BASE}/tv/${id}/watch/providers?api_key=${KEY}`
    const resp = await axios.get(url)
    return resp.data
  } catch (err) {
    console.log(err)
  }
}
const getCastMovie = async (id) => {
  try {
    const url = `${URL_BASE}/movie/${id}/credits?api_key=${KEY}`
    const resp = await axios.get(url)
    return resp.data
  } catch (err) {
    console.log(err)
  }
}
const getCastTv = async (id) => {
  try {
    const url = `${URL_BASE}/tv/${id}/aggregate_credits?api_key=${KEY}`
    const resp = await axios.get(url)
    return resp.data
  } catch (err) {
    console.log(err)
  }
}
const getTrending = async (type, time) => {
  try {
    const url = `${URL_BASE}/trending/${type}/${time}?api_key=${KEY}`
    const resp = await axios.get(url)
    return resp.data
  } catch {
    return false
    console.log(err)
  }
}
export default {
  querySearch,
  queryMoviePopular,
  queryTvPopular,
  getDatailMovie,
  getDatailTv,
  GetWatchProvidersMovie,
  GetWatchProvidersTv,
  getCastMovie,
  getCastTv,
  getTrending
}
