import React from "react";
import {Link} from "react-router-dom";
import PlayerProps from "./player-props";

const Player = (props) => {
  const {films, id} = props;

  return (
    <div className="player">
      <video className="player__video"
        src={films[id].src}
        poster={films[id].poster}
        controls={true}
      ></video>
      <Link to="/films/0" className="player__exit">Exit</Link>
    </div>
  );
};

Player.propTypes = PlayerProps.propTypes;

export default Player;
