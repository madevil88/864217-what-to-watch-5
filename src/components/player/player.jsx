import React from "react";
import {Link} from "react-router-dom";
import PlayerProps from "./player-props";

const Player = (props) => {
  const {allFilms, id} = props;

  return (
    <div className="player">
      <video className="player__video"
        src={allFilms[id - 1].video_link}
        poster={allFilms[id - 1].poster_image}
        controls={true}
      ></video>
      <Link to={`/films/${id - 1}`} className="player__exit">Exit</Link>
    </div>
  );
};

Player.propTypes = PlayerProps.propTypes;

export default Player;
