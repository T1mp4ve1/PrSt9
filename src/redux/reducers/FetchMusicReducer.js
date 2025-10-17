import { FETCH_MUSIC_SUCCESS } from "../actions";

const initialState = {
  artistTracks: {},
};

const FetchMusicReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MUSIC_SUCCESS:
      return {
        ...state,
        artistTracks: {
          ...state.artistTracks,
          [action.payload.artistName]: action.payload,
        },
      };
    default:
      return state;
  }
};
export default FetchMusicReducer;
