import { useEffect } from "react";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchMusic } from "../redux/actions";

const FetchMusic = ({ artistName }) => {
  const dispatch = useDispatch();
  const { tracks } = useSelector(
    (state) => state.musicReducer.artistTracks[artistName] || []
  );

  useEffect(() => {
    dispatch(fetchMusic(artistName));
  }, [artistName, dispatch]);

  return (
    <>
      {tracks?.slice(0, 4).map((track) => (
        <Col key={track.id} className="text-center">
          <img
            className="img-fluid"
            src={track.album.cover_medium}
            alt="track"
          />
          <p>
            Track: {track.title} Artist: {track.artist.name}
          </p>
        </Col>
      ))}
    </>
  );
};
export default FetchMusic;
