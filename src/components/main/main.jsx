import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../const";
import {getSelectedGenre,
  incrementFilmsCount} from "../../store/action";
import {getFilteredFilms,
  getFilms,
  getCurrentGenre,
  getFilmsCount,
  getPromoFilm,
  getAuthorizationStatus} from "../../store/selectors";
import {fetchPromoFilm} from "../../store/api-actions";
import MainProps from "./main-props";
import ListOfFilms from "../list-of-films/list-of-films";
import ListOfGenres from "../list-of-genres/list-of-genres";
import ShowMoreButton from "../show-more-button/show-more-button";
import UserBlock from "../user-block/user-block";
import MyListButton from "../my-list-button/my-list-button";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const MyListButtonWrapped = withActiveItem(MyListButton);

const Main = (props) => {
  const {films,
    getSelectedGenreAction,
    filmsCount,
    getShowMoreStatusAction,
    currentGenre,
    promoFilm,
    fetchPromoFilmAction,
    authorizationStatus} = props;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoFilm.background_image} alt={promoFilm.name} />
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

          <UserBlock />
        </header>
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoFilm.poster_image} alt={promoFilm.name} width="218" height="327" />
            </div>
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoFilm.genre}</span>
                <span className="movie-card__year">{promoFilm.released}</span>
              </p>
              <div className="movie-card__buttons">
                <Link to={`/player/${promoFilm.id}`} className="btn btn--play movie-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                {(authorizationStatus === AuthorizationStatus.AUTH) &&
                  <MyListButtonWrapped
                    id={promoFilm.id}
                    initialActiveItem={promoFilm.is_favorite}
                    updateData={fetchPromoFilmAction}
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ListOfGenres
            allFilms={films.allFilms}
            getSelectedGenre={getSelectedGenreAction}
            currentGenre={currentGenre}
          />
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
  promoFilm: getPromoFilm(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  getSelectedGenreAction(selectGenre) {
    dispatch(getSelectedGenre(selectGenre));
  },
  getShowMoreStatusAction() {
    dispatch(incrementFilmsCount());
  },
  fetchPromoFilmAction() {
    dispatch(fetchPromoFilm());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
