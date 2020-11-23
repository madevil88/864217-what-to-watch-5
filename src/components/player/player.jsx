import React from "react";
import {Link} from "react-router-dom";
import PlayerProps from "./player-props";

const Player = (props) => {
  const {filteredFilms, id} = props;

  return (
    <div className="player">
      <video className="player__video"
        src={filteredFilms[id].video_link}
        poster={filteredFilms[id].poster_image}
        controls={true}
      ></video>
      <Link to={`/films/${id}`} className="player__exit">Exit</Link>
    </div>
  );
};

Player.propTypes = PlayerProps.propTypes;

export default Player;
