import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute} from "../../const";
import {getFilms} from "../../store/selectors";
import MainProps from "../main/main-props";
import AddReviewForm from "../add-review-form/add-review-form";
import withInputValue from "../../hocs/with-input-value/with-input-value";
import UserBlock from "../user-block/user-block";

const AddReviewFormWrapped = withInputValue(AddReviewForm);

const AddReview = (props) => {
  const {films, id} = props;
  const currentFilm = films.allFilms[id - 1];

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src="/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${currentFilm.id}`} className="breadcrumbs__link">{currentFilm.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={currentFilm.poster_image} alt={currentFilm.name} width="218" height="327" />
        </div>
      </div>
      <AddReviewFormWrapped
        id={id}
      />
    </section>
  );
};

AddReview.propTypes = MainProps.propTypes;

const mapStateToProps = (state) => ({
  films: {
    allFilms: getFilms(state),
  },
});

export {AddReview};
export default connect(mapStateToProps)(AddReview);
