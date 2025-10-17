import { combineReducers } from "redux";
import FetchMusicReducer from "./FetchMusicReducer";

const rootReducer = combineReducers({
  musicReducer: FetchMusicReducer,
});
export default rootReducer;
