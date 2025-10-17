export const FETCH_MUSIC_SUCCESS = "FETCH_MUSIC_SUCCESS";

export const fetchMusicSucces = (artistName, tracks) => ({
  type: FETCH_MUSIC_SUCCESS,
  payload: { artistName, tracks },
});

export const fetchMusic = (artistName) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`
      );
      if (response.ok) {
        let cnvrtData = await response.json();
        dispatch(fetchMusicSucces(artistName, cnvrtData.data));
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("Errore fetch", err);
    }
  };
};
