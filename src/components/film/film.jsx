import React from "react";
import {Link} from "react-router-dom";
import {FilmStatus} from "../../const";
import MainProps from "../main/main-props";
import ListOfFilms from "../list-of-films/list-of-films";

const FILMS_COUNT = 4;

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

const Film = (props) => {
  const {films} = props;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src="/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              <Link to="/login">
                <div className="user-block__avatar">
                  <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </Link>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{films[0].title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{films[0].genre}</span>
                <span className="movie-card__year">{films[0].released}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to="/player/1" className="btn btn--play movie-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to="/mylist" className="btn btn--list movie-card__button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </Link>
                <Link to="/films/1/review" className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={films[0].poster} alt={films[0].title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="movie-rating">
                <div className="movie-rating__score">{films[0].rating}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{getFilmStatus(films[0].rating)}</span>
                  <span className="movie-rating__count">{films[0].reviewsCount} ratings</span>
                </p>
              </div>

              <div className="movie-card__text">
                <p>{films[0].plot}</p>
                <p className="movie-card__director"><strong>Director: {films[0].director}</strong></p>

                <p className="movie-card__starring"><strong>Starring: {films[0].starring.map((star) => (
                  star
                )).join(`, `)}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            <ListOfFilms
              films = {films}
              filmsCount = {FILMS_COUNT}
            />
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Film.propTypes = MainProps.propTypes;

export default Film;
