export const FETCH_MUSIC_SUCCESS = "FETCH_MUSIC_SUCCESS";
export const SELECTED_TRACK = "SELECTED_TRACK";

export const fetchMusicSuccess = (artistName, tracks) => ({
  type: FETCH_MUSIC_SUCCESS,
  payload: { artistName, tracks },
});

export const selectedTrack = (track) => ({
  type: SELECTED_TRACK,
  payload: track,
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
