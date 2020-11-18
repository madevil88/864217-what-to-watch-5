import React from "react";
import {TabsMap} from "../../const";
import MainProps from "../main/main-props";
import Overview from "../overview/overview";
import Details from "../details/details";
import Reviews from "../reviews/reviews";

const getRenderComponent = (activeId, film, reviews) => {
  switch (activeId) {
    case 0:
      return <Overview
        film={film}
      />;
    case 1:
      return <Details
        film={film}
      />;
    case 2:
      return <Reviews
        film={film}
        reviews={reviews}
      />;
  }
  return null;
};

const Tabs = (props) => {
  const {activeId, handleOnClick, film, reviews} = props;

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.values(TabsMap).map((tab, i) => {
            return (
              <li key={i} className={activeId === i ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
                <a href="#" className="movie-nav__link"
                  onClick={(evt) => {
                    evt.preventDefault();
                    handleOnClick(i);
                  }}
                >{TabsMap[i]}</a>
              </li>
            );
          }
          )}
        </ul>
      </nav>
      {getRenderComponent(activeId, film, reviews)}
    </React.Fragment>
  );
};

Tabs.propTypes = MainProps.propTypes;

export default Tabs;
