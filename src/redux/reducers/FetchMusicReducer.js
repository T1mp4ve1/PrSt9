import { FETCH_MUSIC_SUCCESS, FETCH_SEARCH } from "../actions";

const initialState = {
  artistTracks: {},
  searchRes: null,
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

    case FETCH_SEARCH:
      return {
        ...state,
        searchRes: {
          artistName: action.payload.artistName,
          tracks: action.payload.tracks,
        },
      };

    default:
      return state;
  }
};
export default FetchMusicReducer;
