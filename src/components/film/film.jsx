import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import MainProps from "../main/main-props";
import ListOfFilms from "../list-of-films/list-of-films";
import Tabs from "../tabs/tabs";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const ListOfFilmsWrapped = withActiveItem(ListOfFilms);
const TabsWrapped = withActiveItem(Tabs);

const FILMS_COUNT = 4;

const Film = (props) => {
  const {films,
    currentGenre,
    reviews,
    getFilteredFilmsCount} = props;

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
              <TabsWrapped
                film={films[0]}
                reviews={reviews}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            <ListOfFilmsWrapped
              films = {films}
              filmsCount = {FILMS_COUNT}
              currentGenre = {currentGenre}
              getFilteredFilmsCount={getFilteredFilmsCount}
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

const mapStateToProps = (state) => ({
  films: state.films,
  currentGenre: state.currentGenre,
  reviews: state.reviews
});

const mapDispatchToProps = (dispatch) => ({
  getFilteredFilmsCount(filteredFilmsCount) {
    dispatch(ActionCreator.getFilteredFilmsCount(filteredFilmsCount));
  },
});

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
