import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getSelectedGenre,
  incrementFilmsCount} from "../../store/action";
import {getFilteredFilms,
  getFilms,
  getCurrentGenre,
  getFilmsCount} from "../../store/selectors";
import MainProps from "./main-props";
import ListOfFilms from "../list-of-films/list-of-films";
import ListOfGenres from "../list-of-genres/list-of-genres";
import ShowMoreButton from "../show-more-button/show-more-button";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const ListOfGenresWrapped = withActiveItem(ListOfGenres);

const Main = (props) => {
  const {films,
    getSelectedGenreAction,
    filmsCount,
    getShowMoreStatusAction} = props;
  const currentFilm = films.filteredFilms[0];

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
              <img src={currentFilm.poster_image} alt={currentFilm.name} width="218" height="327" />
            </div>
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{currentFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{currentFilm.genre}</span>
                <span className="movie-card__year">{currentFilm.released}</span>
              </p>
              <div className="movie-card__buttons">
                <Link to="/player/0" className="btn btn--play movie-card__button">
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
            <ListOfGenresWrapped
              allFilms={films.allFilms}
              getSelectedGenre={getSelectedGenreAction}
            />
          </ul>
          <div className="catalog__movies-list">
            <ListOfFilms
              filteredFilms={films.filteredFilms}
              filmsCount={filmsCount}
            />
          </div>
          {(filmsCount < films.filteredFilms.length) && <ShowMoreButton
            getShowMoreStatus={getShowMoreStatusAction}
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
  films: {
    allFilms: getFilms(state),
    filteredFilms: getFilteredFilms(state)
  },
  currentGenre: getCurrentGenre(state),
  filmsCount: getFilmsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  getSelectedGenreAction(selectGenre) {
    dispatch(getSelectedGenre(selectGenre));
  },
  getShowMoreStatusAction() {
    dispatch(incrementFilmsCount());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
