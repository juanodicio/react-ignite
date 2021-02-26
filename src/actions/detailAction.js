import axios from "axios";
import {gameDetails, gameScreenshotURL} from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL"
  });

  const detailData = await axios.get(gameDetails(id));
  const screenShotData = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screens: screenShotData.data.results
    }
  })
}
