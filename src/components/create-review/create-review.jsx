import React from "react";
import MainProps from "../main/main-props";

const getDateTime = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, `0`);
  const day = date.getDate().toString().padStart(2, `0`);

  return `${year}-${month}-${day}`;
};

const CreateReview = (props) => {
  const {review} = props;

  return (
    <React.Fragment>
      <div className="review">
        <blockquote className="review__quote">
          <p className="review__text">{review.text}</p>

          <footer className="review__details">
            <cite className="review__author">{`${review.firstName} ${review.secondName}`}</cite>
            <time className="review__date" dateTime={getDateTime(review.date)}>{`${review.date.toLocaleString(`en-EN`, {month: `long`, day: `numeric`, year: `numeric`})}`}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{review.rating}</div>
      </div>
    </React.Fragment>
  );
};

CreateReview.propTypes = MainProps.propTypes;

export default CreateReview;
