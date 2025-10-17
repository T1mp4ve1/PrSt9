import { SELECTED_TRACK } from "../actions";

const initialState = {
  currentTrack: null,
};

const TrackSelected = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_TRACK:
      return {
        ...state,
        currentTrack: action.payload,
      };
    default:
      return state;
  }
};
export default TrackSelected;
