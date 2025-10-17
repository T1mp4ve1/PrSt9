import { combineReducers } from "redux";
import FetchMusicReducer from "./FetchMusicReducer";
import TrackSelected from "./TrackSelected";

const rootReducer = combineReducers({
  musicReducer: FetchMusicReducer,
  currentTrackReducer: TrackSelected,
});
export default rootReducer;
