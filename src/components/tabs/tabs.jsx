import React from "react";
import MainProps from "../main/main-props";
import Overview from "../overview/overview";
import Details from "../details/details";
import Reviews from "../reviews/reviews";

const getRenderComponent = (selectedSection, film, reviews) => {
  switch (selectedSection) {
    case `overview`:
      return <Overview
        film={film}
      />;
    case `details`:
      return <Details
        film={film}
      />;
    case `reviews`:
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
          <li className={selectedSection === `overview` ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
            <a href="#" className="movie-nav__link" data-section="overview"
              onClick={(evt) => {
                evt.preventDefault();
                onLinkClick(evt);
              }}
            >Overview</a>
          </li>
          <li className={selectedSection === `details` ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
            <a href="#" className="movie-nav__link" data-section="details"
              onClick={(evt) => {
                evt.preventDefault();
                onLinkClick(evt);
              }}
            >Details</a>
          </li>
          <li className={selectedSection === `reviews` ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
            <a href="#" className="movie-nav__link" data-section="reviews"
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
