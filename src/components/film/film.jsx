import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute, AuthorizationStatus, HttpCode} from "../../const";
import {getFilteredFilms,
  getReviews,
  getFilmId,
  getAuthorizationStatus,
  getReviewStatus} from "../../store/selectors";
import MainProps from "../main/main-props";
import ListOfFilms from "../list-of-films/list-of-films";
import Tabs from "../tabs/tabs";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import UserBlock from "../user-block/user-block";
import MyListButton from "../my-list-button/my-list-button";
import {fetchFilmId, fetchReviews} from "../../store/api-actions";

const ListOfFilmsWrapped = withActiveItem(ListOfFilms);
const TabsWrapped = withActiveItem(Tabs);
const MyListButtonWrapped = withActiveItem(MyListButton);

const FILMS_COUNT = 4;

const Film = (props) => {
  const {films,
    id,
    reviews,
    filmId,
    authorizationStatus,
    loadedFilmIdAction,
    loadedReviewsAction,
    reviewStatus} = props;

  useEffect(()=> {
    loadedFilmIdAction(id);
    loadedReviewsAction(id);
  }, [id]);

if (reviewStatus === HttpCode.BAD_REQUEST) {
  return (
    <div>MOVIE_NOT_FOUND</div>
    );
} else {
  return (
    <React.Fragment>
      <section className="movie-card movie-card--full" style={{backgroundColor: filmId.background_color}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={filmId.background_image} alt={filmId.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to={AppRoute.ROOT} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <UserBlock />
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{filmId.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{filmId.genre}</span>
                <span className="movie-card__year">{filmId.released}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`/player/${filmId.id}`} className="btn btn--play movie-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                {(authorizationStatus === AuthorizationStatus.AUTH) &&
                  <MyListButtonWrapped
                    id={filmId.id}
                    initialActiveItem={filmId.is_favorite}
                    updateData={loadedFilmIdAction}
                  />
                }
                {(authorizationStatus === AuthorizationStatus.AUTH) &&
                  <Link to={`/films/${filmId.id}/review`} className="btn movie-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={filmId.poster_image} alt={filmId.name} width="218" height="327" />
            </div>
            <div className="movie-card__desc">
            {
              // console.log(filmId)
            }
            {
              <TabsWrapped
                film={filmId}
                reviews={reviews}
              />
            }
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            <ListOfFilmsWrapped
              filteredFilms = {films.filteredFilms}
              filmsCount = {FILMS_COUNT}
            />
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
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
}

};

Film.propTypes = MainProps.propTypes;

const mapStateToProps = (state) => ({
  films: {
    filteredFilms: getFilteredFilms(state)
  },
  filmId: getFilmId(state),
  reviews: getReviews(state),
  authorizationStatus: getAuthorizationStatus(state),
  reviewStatus: getReviewStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadedFilmIdAction(id) {
    dispatch(fetchFilmId(id));
  },
  loadedReviewsAction(id) {
    dispatch(fetchReviews(id));
  },
});

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
