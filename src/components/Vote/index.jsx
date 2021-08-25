import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { WrapperVote } from "./style-vote.js";

const colors_range = {
  veryHight: "rgb(0, 255, 21)",
  medium: "rgba(255, 251, 0, 0.918)",
  low: "rgb(255, 0, 0)",
};

const getStyles = (vote) => {
  let style_circules = {};
  if (vote >= 6) {
    style_circules = { color: colors_range.veryHight };
  } else if ((vote >= 4) & (vote < 6)) {
    style_circules = { color: colors_range.medium };
  } else {
    style_circules = { color: colors_range.low };
  }
  return style_circules;
};

export const Vote = ({ vote }) => {
  if (!vote) return false;
  const voteFormat = vote.toFixed(1);
  const style_circule = getStyles(voteFormat);
  return (
    <WrapperVote>
      <CircularProgress
        style={{
          ...style_circule,
          borderRadius: "50%",
          backgroundColor: "black",
        }}
        size="5.5rem"
        variant="determinate"
        value={voteFormat * 10}
        color="primary"
      />
      <p>
        {voteFormat === 0 ? "-- " : voteFormat}
        <span> pts</span>
      </p>
    </WrapperVote>
  );
};
