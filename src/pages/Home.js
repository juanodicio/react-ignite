import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import {useLocation} from "react-router-dom";

import styled from "styled-components"
import {motion} from "framer-motion"

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  console.log(location);
  const dispatch = useDispatch();


  useEffect(() => {
      dispatch(loadGames());
  }, [dispatch]);

  const {popular, newGames, upcoming} = useSelector((state) => state.games);

  return (
    <GameList>

      {pathId && <GameDetail />}

      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game key={game.id} name={game.name} released={game.released}
                id={game.id} image={game.background_image} />
          ))}
      </Games>

      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game key={game.id} name={game.name} released={game.released}
                id={game.id} image={game.background_image} />
        ))}
      </Games>

      <h2>Upcoming</h2>
      <Games>
        {upcoming.map((game) => (
          <Game key={game.id} name={game.name} released={game.released}
                id={game.id} image={game.background_image} />
        ))}
      </Games>

    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
