import React from "react";
import {connect} from "react-redux";
import {isFavoriteFilm, fetchFavoriteFilms} from "../../store/api-actions";

const MyListButton = (props) => {
  const {id,
    isFavoriteFilmAction,
    updateData,
    activeItem,
    handleActiveItem} = props;

  if (activeItem) {
    return (
      <button
        className="btn btn--list movie-card__button"
        type="button"
        onClick={() => {
          isFavoriteFilmAction(id, 0);
          updateData(id);
          handleActiveItem(false);
        }}
      >
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        <span>My list</span>
      </button>
    );
  } else {
    return (
      <button
        className="btn btn--list movie-card__button"
        type="button"
        onClick={() => {
          isFavoriteFilmAction(id, 1);
          updateData(id);
          handleActiveItem(true);
        }}
      >
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>
    );
  }
};

MyListButton.propTypes = {};

const mapDispatchToProps = (dispatch) => ({
  isFavoriteFilmAction(id, activeItem) {
    dispatch(isFavoriteFilm(id, activeItem));
  },
  fetchFavoriteFilmsAction() {
    dispatch(fetchFavoriteFilms());
  },
});

export {MyListButton};
export default connect(null, mapDispatchToProps)(MyListButton);

