const path = 'https://image.tmdb.org/t/p/w'
const pathOriginal = 'https://image.tmdb.org/t/p/'
const validateWidth = [200, 300, 400, 500, 'original']
export const getUrlImage = (width = 200, pathImage) => {
  if (validateWidth.includes(width)) {
    let url
    if (width === 'original') {
      url = `${pathOriginal}${width}/${pathImage}`
    } else {
      url = `${path}${width}/${pathImage}`
    }
    return url
  } else {
    return false
  }
}
