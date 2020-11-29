const reviews = [{
  "id": 1,
  "user": {
    "id": 1,
    "name": `Emely`
  },
  "rating": 4,
  "comment": `This movie is just plain bad. There must be some big payola going round this awards season.`,
  "date": `2020-11-24T16:25:11.950Z`
}, {
  "id": 2,
  "user": {
    "id": 3,
    "name": `Max`
  },
  "rating": 3,
  "comment": `I personally found this movie to be boring.`,
  "date": `2020-11-27T21:02:38.606Z`
}];

const films = {
  allFilms: [{
    "name": `Bronson`,
    "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
    "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
    "background_color": `#73B39A`,
    "description": `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
    "rating": 3.6,
    "scores_count": 109661,
    "director": `Nicolas Winding Refn`,
    "starring": [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`],
    "run_time": 92,
    "genre": `Action`,
    "released": 2008,
    "id": 1,
    "is_favorite": false,
    "video_link": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }, {
    "name": `Pulp Fiction`,
    "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Pulp_Fiction.jpg`,
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/pulp-fiction.jpg`,
    "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Pulp_Fiction.jpg`,
    "background_color": `#795433`,
    "description": `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
    "rating": 1.5,
    "scores_count": 1635992,
    "director": `Quentin Tarantino`,
    "starring": [`John Travolta`, `Uma Thurman`, `Samuel L. Jackson`],
    "run_time": 153,
    "genre": `Crime`,
    "released": 1994,
    "id": 2,
    "is_favorite": true,
    "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }],
  filteredFilms: [{
    "name": `Bronson`,
    "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
    "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
    "background_color": `#73B39A`,
    "description": `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
    "rating": 3.6,
    "scores_count": 109661,
    "director": `Nicolas Winding Refn`,
    "starring": [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`],
    "run_time": 92,
    "genre": `Action`,
    "released": 2008,
    "id": 1,
    "is_favorite": false,
    "video_link": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }, {
    "name": `Pulp Fiction`,
    "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Pulp_Fiction.jpg`,
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/pulp-fiction.jpg`,
    "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Pulp_Fiction.jpg`,
    "background_color": `#795433`,
    "description": `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
    "rating": 1.5,
    "scores_count": 1635992,
    "director": `Quentin Tarantino`,
    "starring": [`John Travolta`, `Uma Thurman`, `Samuel L. Jackson`],
    "run_time": 153,
    "genre": `Crime`,
    "released": 1994,
    "id": 2,
    "is_favorite": true,
    "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }]
};

export {
  reviews,
  films
};
