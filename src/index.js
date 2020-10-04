import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const PromoFilm = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_DATE: 2014
};

ReactDOM.render(
    <App
      name={PromoFilm.NAME} genre={PromoFilm.GENRE} releaseDate={PromoFilm.RELEASE_DATE}
    />,
    document.querySelector(`#root`)
);
