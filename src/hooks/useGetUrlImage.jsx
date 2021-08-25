import React from "react";
const path = "https://image.tmdb.org/t/p/w";
const pathOriginal = "https://image.tmdb.org/t/p/";
const validateWidth = [200, 300, 400, 500, "original"];

export default function useGetUrlImage(width = 200, pathImage) {
  let value_return;
  if (pathImage === null) return value_return;
  if (validateWidth.includes(width)) {
    let url;
    if (width === "original") {
      value_return = `${pathOriginal}${width}/${pathImage}`;
    } else {
      value_return = `${path}${width}/${pathImage}`;
    }
  }

  return value_return;
}
