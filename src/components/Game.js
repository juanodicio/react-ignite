import React from "react";
import styled from "styled-components"
import {motion} from "framer-motion"
import {useDispatch} from "react-redux";
import {loadDetail} from "../actions/detailAction"
import {Link} from "react-router-dom";
import {smallImage} from "../util";

const Game = ({id, name, released, image}) => {

  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  }

  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  text-align: center;
  cursor: pointer;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`

export default Game;