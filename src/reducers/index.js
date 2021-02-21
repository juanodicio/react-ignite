import {combineReducers} from "redux";
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";

const initState = {
  name: "",
  isLogged: false
}

const userReducer = (state, action) => {
  switch (action.type) {
    default:
      return {...initState}
  }
}

const rootReducer = combineReducers({
  games: gamesReducer,
  user: userReducer,
  detail: detailReducer
})

export default rootReducer;