import React from "react";
import MainProps from "../main/main-props";
import CreateReview from "../create-review/create-review";

const FilmReviews = (props) => {
  const {reviews} = props;

  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {reviews.map((review, i, comments) => {
            if (i < Math.round(comments.length / 2)) {
              return (
                <React.Fragment key={`${review.rating}-${i}`}>
                  <CreateReview
                    review={review}
                  />
                </React.Fragment>
              );
            }
            return null;
          })
          }
        </div>
        <div className="movie-card__reviews-col">
          {reviews.map((review, i, comments) => {
            if (i >= Math.round(comments.length / 2) && i < comments.length) {
              return (
                <React.Fragment key={`${review.rating}-${i}`}>
                  <CreateReview
                    review={review}
                  />
                </React.Fragment>
              );
            }
            return null;
          })
          }
        </div>
      </div>
    </React.Fragment>
  );
};

FilmReviews.propTypes = MainProps.propTypes;

export default FilmReviews;
