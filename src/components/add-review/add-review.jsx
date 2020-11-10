import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import MainProps from "../main/main-props";
import AddReviewForm from "../add-review-form/add-review-form";

const AddReview = (props) => {
  const {films} = props;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src="/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to="/films/1" className="breadcrumbs__link">{films[0].title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <Link to="/login">
              <div className="user-block__avatar">
                <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </Link>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={films[0].poster} alt={films[0].title} width="218" height="327" />
        </div>
      </div>
      <AddReviewForm />
    </section>
  );
};

AddReview.propTypes = MainProps.propTypes;

const mapStateToProps = (state) => ({
  films: state.films,
});

export {AddReview};
export default connect(mapStateToProps)(AddReview);
