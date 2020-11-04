import React from "react";
import {FilmTabs} from "../../const";
import MainProps from "../main/main-props";
import Overview from "../overview/overview";
import Details from "../details/details";
import Reviews from "../reviews/reviews";

const getRenderComponent = (selectedSection, film, reviews) => {
  switch (selectedSection) {
    case FilmTabs.OVERVIEW:
      return <Overview
        film={film}
      />;
    case FilmTabs.DETAILS:
      return <Details
        film={film}
      />;
    case FilmTabs.REVIEWS:
      return <Reviews
        film={film}
        reviews={reviews}
      />;
  }
  return null;
};

const Tabs = (props) => {
  const {onLinkClick, selectedSection, film, reviews} = props;

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={selectedSection === FilmTabs.OVERVIEW ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
            <a href="#" className="movie-nav__link" data-section={FilmTabs.OVERVIEW}
              onClick={(evt) => {
                evt.preventDefault();
                onLinkClick(evt);
              }}
            >Overview</a>
          </li>
          <li className={selectedSection === FilmTabs.DETAILS ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
            <a href="#" className="movie-nav__link" data-section={FilmTabs.DETAILS}
              onClick={(evt) => {
                evt.preventDefault();
                onLinkClick(evt);
              }}
            >Details</a>
          </li>
          <li className={selectedSection === FilmTabs.REVIEWS ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
            <a href="#" className="movie-nav__link" data-section={FilmTabs.REVIEWS}
              onClick={(evt) => {
                evt.preventDefault();
                onLinkClick(evt);
              }}
            >Reviews</a>
          </li>
        </ul>
      </nav>
      {getRenderComponent(selectedSection, film, reviews)}
    </React.Fragment>
  );
};

Tabs.propTypes = MainProps.propTypes;

export default Tabs;
