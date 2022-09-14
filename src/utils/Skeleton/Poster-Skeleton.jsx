import React from "react";
import { Vote } from "../../components/Vote";
import imageDefault from "../../images/image_default.svg";
import "./style-poster-skeleton.scss";
export const PosterSkeleton = () => {
  const data = {
    title: "Loading...",
    release_date: "Loading...",
    path_fake: imageDefault,
    vote_average: 10,
  };
  return (
    <div className="wrap-poster-skeleton">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => {
        return (
          <div key={index} className="poster-skeleton">
            <div className="poster-skeleton__image">
              <div className="poster-skeleton__image__img" />
              <div className="poster-skeleton__image__vote">
                <Vote />
              </div>
            </div>
            <div className="poster-skeleton__title">
              <p className="poster-skeleton__title__name"></p>
              <p className="poster-skeleton__title__date"></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
