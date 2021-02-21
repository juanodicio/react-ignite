import axios from "axios";
import {popularGamesURL, newGamesURL, upcomingGamesURL} from "../api";


export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const newGames = await axios.get(newGamesURL());
  const upcomingGames = await axios.get(upcomingGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingGames.data.results,
      newGames: newGames.data.results
    }
  })
}