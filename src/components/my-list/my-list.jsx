import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getFilteredFilms} from "../../store/selectors";
import MainProps from "../main/main-props";
import ListOfFilms from "../list-of-films/list-of-films";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const ListOfFilmsWrapped = withActiveItem(ListOfFilms);

const MyList = (props) => {
  const {films} = props;

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
          <ListOfFilmsWrapped
            filteredFilms={films.filteredFilms}
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
  films: {
    filteredFilms: getFilteredFilms(state)
  },
});

export {MyList};
export default connect(mapStateToProps)(MyList);
