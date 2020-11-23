import React from "react";
import {FilmStatus} from "../../const";
import MainProps from "../main/main-props";

const FilmStatusMap = [
  {
    min: 0,
    max: 5,
    status: FilmStatus.VERY_BAD
  }, {
    min: 5,
    max: 6,
    status: FilmStatus.BAD
  }, {
    min: 6,
    max: 7,
    status: FilmStatus.NOT_BAD
  }, {
    min: 7,
    max: 8,
    status: FilmStatus.GOOD
  }, {
    min: 8,
    max: Infinity,
    status: FilmStatus.VERY_GOOD
  }
];

const getFilmStatus = (rating) => {
  let status;
  FilmStatusMap.forEach((condition) => {
    if (rating >= condition.min && rating < condition.max) {
      status = condition.status;
    }
  });
  return status;
};

const FilmOverview = (props) => {
  const {film} = props;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getFilmStatus(film.rating)}</span>
          <span className="movie-rating__count">{film.scores_count} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{film.description}</p>
        <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {film.starring.map((star) => (
          star
        )).join(`, `)}</strong></p>
      </div>
    </React.Fragment>
  );
};

FilmOverview.propTypes = MainProps.propTypes;

export default FilmOverview;
