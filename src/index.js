import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const promoFilm = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_DATE: 2014
};

ReactDOM.render(
    <App
      name={promoFilm.NAME} genre={promoFilm.GENRE} releaseDate={promoFilm.RELEASE_DATE}
    />,
    document.querySelector(`#root`)
);
