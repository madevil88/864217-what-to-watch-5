import React from "react";
import MainProps from "../main/main-props";

const getDateTime = (date) => {
  const currentDate = new Date(date);

  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, `0`);
  const day = currentDate.getDate().toString().padStart(2, `0`);

  return {dateTime: `${year}-${month}-${day}`,
    reviewDate: `${currentDate.toLocaleString(`en-EN`, {month: `long`, day: `numeric`, year: `numeric`})}`};
};

const CreateReview = (props) => {
  const {review} = props;
  const {dateTime, reviewDate} = getDateTime(review.date);

  return (
    <React.Fragment>
      <div className="review">
        <blockquote className="review__quote">
          <p className="review__text">{review.comment}</p>

          <footer className="review__details">
            <cite className="review__author">{`${review.user.name}`}</cite>
            <time className="review__date" dateTime={dateTime}>{reviewDate}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{review.rating}</div>
      </div>
    </React.Fragment>
  );
};

CreateReview.propTypes = MainProps.propTypes;

export default CreateReview;
