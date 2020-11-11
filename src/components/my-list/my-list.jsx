import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import MainProps from "../main/main-props";
import ListOfFilms from "../list-of-films/list-of-films";

const MyList = (props) => {
  const {films, currentGenre} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <Link to="/login">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </Link>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          <ListOfFilms
            films={films}
            currentGenre={currentGenre}
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
  );
};

MyList.propTypes = MainProps.propTypes;

const mapStateToProps = (state) => ({
  films: state.films,
  currentGenre: state.currentGenre
});

export {MyList};
export default connect(mapStateToProps)(MyList);
