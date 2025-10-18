export const FETCH_MUSIC_SUCCESS = "FETCH_MUSIC_SUCCESS";
export const SELECTED_TRACK = "SELECTED_TRACK";
export const FETCH_SEARCH = "FETCH_SEARCH";
export const LIKE_TRACK = "LIKE_TRACK";

export const fetchMusicSuccess = (artistName, tracks) => ({
  type: FETCH_MUSIC_SUCCESS,
  payload: { artistName, tracks },
});

export const selectedTrack = (track) => ({
  type: SELECTED_TRACK,
  payload: track,
});

export const fetchSearchFunc = (artistName, tracks) => ({
  type: FETCH_SEARCH,
  payload: { artistName, tracks },
});

export const toggleLikeTrack = (trackId) => ({
  type: LIKE_TRACK,
  payload: trackId,
});

export const fetchMusic = (artistName) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`
      );
      if (response.ok) {
        let cnvrtData = await response.json();
        dispatch(fetchMusicSuccess(artistName, cnvrtData.data));
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("Errore fetch", err);
    }
  };
};

export const fetchSearch = (artistName) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`
      );
      if (response.ok) {
        let cnvrtData = await response.json();
        dispatch(fetchSearchFunc(artistName, cnvrtData.data));
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("Errore fetch", err);
    }
  };
};
