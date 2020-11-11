import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import MainProps from "./main-props";
import ListOfFilms from "../list-of-films/list-of-films";
import ListOfGenres from "../list-of-genres/list-of-genres";
import ShowMoreButton from "../show-more-button/show-more-button";

const Main = (props) => {
  const {films,
    currentGenre,
    getSelectedGenre,
    filmsCount,
    getShowMoreStatus,
    isShowMoreButton} = props;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="user-block">
            <Link to="/login">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </Link>
          </div>
        </header>
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={films[0].poster} alt={films[0].title} width="218" height="327" />
            </div>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            <ListOfGenres
              films={films}
              currentGenre={currentGenre}
              getSelectedGenre={getSelectedGenre}
            />
          </ul>
          <div className="catalog__movies-list">
            <ListOfFilms
              films={films}
              currentGenre={currentGenre}
              filmsCount={filmsCount}
            />
          </div>
          {isShowMoreButton && <ShowMoreButton
            getShowMoreStatus={getShowMoreStatus}
            allFilmsCount={films.length}
            showFilmsCount={filmsCount}
          />}
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = MainProps.propTypes;

const mapStateToProps = (state) => ({
  films: state.films,
  currentGenre: state.currentGenre,
  filmsCount: state.filmsCount,
  isShowMoreButton: state.isShowMoreButton,
});

const mapDispatchToProps = (dispatch) => ({
  getSelectedGenre(selectGenre) {
    dispatch(ActionCreator.getSelectedGenre(selectGenre));
  },
  getShowMoreStatus() {
    dispatch(ActionCreator.incrementFilmsCount());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
