import React from "react";
import MainProps from "../main/main-props";

const getRunTime = (time) => {
  const minutes = Math.round(time % 60);
  const hours = Math.round((time - minutes) / 60);

  return `${hours}h ${minutes}m`;
};

const FilmDetails = (props) => {
  const {film} = props;

  return (
    <React.Fragment>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{film.director}</span>
          </p>
          <div className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              <ul style={{listStyle: `none`, padding: `0`, margin: `0`}}>
                {film.starring.map((star, i) => (
                  <li key={`${star}-${i}`}>
                    {star}, <br/>
                  </li>
                ))}
              </ul>
            </span>
          </div>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{getRunTime(film.durationMinutes)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{film.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{film.released}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

FilmDetails.propTypes = MainProps.propTypes;

export default FilmDetails;
