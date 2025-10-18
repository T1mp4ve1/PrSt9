import { useEffect } from "react";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchMusic, selectedTrack, toggleLikeTrack } from "../redux/actions";

const FetchMusic = ({ artistName }) => {
  const dispatch = useDispatch();
  const artistData = useSelector(
    (state) => state.musicReducer.artistTracks[artistName]
  );
  const tracks = artistData ? artistData.tracks : [];

  const currentTrack = useSelector(
    (state) => state.currentTrackReducer.currentTrack
  );

  const likedTracks = useSelector((state) => state.musicReducer.likedTracks);
  const handleLike = (id) => {
    dispatch(toggleLikeTrack(id));
  };

  useEffect(() => {
    dispatch(fetchMusic(artistName));
  }, [artistName, dispatch]);

  return (
    <>
      {tracks &&
        tracks.slice(0, 4).map((track) => {
          const isLiked = likedTracks[track.id];
          const isActive = currentTrack && currentTrack.id === track.id;
          return (
            <Col
              key={track.id}
              className="text-center py-4"
              onClick={() => dispatch(selectedTrack(track))}
              style={{
                cursor: "pointer",
                border: isActive
                  ? "2px solid #1DB954"
                  : "2px solid transparent",
              }}
            >
              <img
                className="img-fluid"
                src={track.album.cover_medium}
                alt="track"
              />
              <p className="m-0">
                Track: {track.title} Artist: {track.artist.name}
              </p>
              <button
                onClick={() => handleLike(track.id)}
                className="btn btn-sm"
                style={{ color: isLiked ? "green" : "gray" }}
              >
                <i className={isLiked ? "bi bi-heart-fill" : "bi bi-heart"}></i>
              </button>
            </Col>
          );
        })}
    </>
  );
};
export default FetchMusic;
