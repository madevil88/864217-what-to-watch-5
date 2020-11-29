import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {loadedData} from "./loaded-data";
import {ActionType} from "../../action";
import {fetchFilmList,
  fetchFilmId,
  checkAuth,
  login,
  commentFilm,
  fetchPromoFilm,
  fetchFavoriteFilms,
  fetchReviews,
  isFavoriteFilm} from "../../api-actions";
import {APIRoute, AuthorizationStatus} from "../../../const";
import {films, reviews} from "../../../test-mocks/test-mocks";

const api = createAPI(() => {});
const apiMock = new MockAdapter(api);
const dispatch = jest.fn();

const commentsTest = [{
  "id": 1,
  "user": {
    "id": 4,
    "name": `Kate Muir`
  },
  "rating": 8.9,
  "comment": `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  "date": `2019-05-08T14:13:56.569Z`
}, {
  "id": 2,
  "user": {
    "id": 2,
    "name": `Kate Kuir`
  },
  "rating": 9,
  "comment": `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  "date": `2020-05-08T14:13:56.569Z`
}];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(loadedData(void 0, {})).toEqual({
    films: [],
    filmId: ``,
    reviews: [],
    promoFilm: ``,
    favoriteFilms: [],
    reviewStatus: ``,
    loginStatus: ``,
  });
});

it(`Reducer should update films by load films`, () => {
  expect(loadedData({
    films: [],
  }, {
    type: ActionType.LOAD_FILMS,
    payload: films,
  })).toEqual({
    films,
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, films);

    return fetchFilmList()(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: films,
        });
      });
  });

  it(`Should make a correct API call to /film/:id`, () => {
    apiMock
      .onGet(`/films/${1}`)
      .reply(200, films.allFilms[0]);

    return fetchFilmId(1)(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_FILM_ID,
          payload: films.allFilms[0],
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    apiMock
      .onGet(APIRoute.PROMO_FILM)
      .reply(200, films.allFilms[0]);

    return fetchPromoFilm()(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: films.allFilms[0],
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    apiMock
      .onGet(APIRoute.FAVORITE_FILMS)
      .reply(200, films.allFilms);

    return fetchFavoriteFilms()(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.LOAD_FAVORITE_FILMS,
          payload: films.allFilms,
        });
      });
  });

  it(`Should make a correct API call to /comments/: film_id`, () => {
    apiMock
      .onGet(`/comments/${1}`)
      .reply(200, reviews);

    return fetchReviews(1)(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(5);
        expect(dispatch).toHaveBeenNthCalledWith(5, {
          type: ActionType.LOAD_REVIEWS,
          payload: reviews,
        });
      });
  });

  it(`Should make a correct API call to /comments/:id`, () => {
    const commentTest = {"rating": commentsTest[0].rating, "comment": commentsTest[0].comment};
    apiMock
      .onPost(`/comments/${1}`)
      .reply(200, commentsTest);

    return commentFilm(1, commentTest)(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(6);
      });
  });

  it(`Should make a correct API call to /favorite/: film_id/: status`, () => {
    apiMock
      .onPost(`/favorite/${1}/${0}`)
      .reply(200, films.allFilms[0]);

    return isFavoriteFilm(1, 0)(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(8);
      });
  });

  it(`Should make a correct API call to /login`, () => {
    const loginTest = {"email": `Oliver.conner@gmail.com`, "password": `12345678`};
    apiMock
      .onPost(APIRoute.LOGIN, loginTest)
      .reply(200);

    return login(loginTest)(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(10);
      });
  });

  it(`Should make a correct API get call to /login`, () => {
    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200);

    return checkAuth()(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(11);
        expect(dispatch).toHaveBeenNthCalledWith(11, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });
});
