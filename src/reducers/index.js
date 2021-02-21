import {combineReducers} from "redux";
import gamesReducer from "./gamesReducer";

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
})

export default rootReducer;