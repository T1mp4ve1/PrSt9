import { FETCH_MUSIC_SUCCESS, FETCH_SEARCH, LIKE_TRACK } from "../actions";

const initialState = {
  artistTracks: {},
  searchRes: null,
  likedTracks: {},
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
        likedTracks: { ...state.likedTracks },
      };

    case FETCH_SEARCH:
      return {
        ...state,
        searchRes: {
          artistName: action.payload.artistName,
          tracks: action.payload.tracks,
        },
        likedTracks: { ...state.likedTracks },
      };

    case LIKE_TRACK:
      return {
        ...state,
        likedTracks: {
          ...state.likedTracks,
          [action.payload]: !state.likedTracks[action.payload],
        },
      };

    default:
      return state;
  }
};
export default FetchMusicReducer;
