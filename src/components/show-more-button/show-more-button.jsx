import React from "react";
import MainProps from "../main/main-props";

const ShowMoreButton = (props) => {
  const {getShowMoreStatus} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => {
          getShowMoreStatus();
        }}
      >Show more</button>
    </div>
  );
};

ShowMoreButton.propTypes = MainProps.propTypes;

export default ShowMoreButton;
